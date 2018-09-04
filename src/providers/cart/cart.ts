import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

import { MartjackauthConfigProvider } from '../../providers/martjackauthcofig/martjackauthconfig';
import { ExceptionHandlerProvider } from '../exception-handler/exception-handler';
import { ProductsProvider } from '../products/products';
import { UserdataProvider } from '../userdata/userdata';
import { AuthProvider } from '../auth/auth';
import { AlertProvider } from '../alert/alert';
import { MERCHANT_ID, } from '../../config';

@Injectable()
export class CartProvider {
  headers: HttpHeaders;
  productId: any;
  variantProductId: any;
  cartQuantity: any;

  constructor(private http: HttpClient, private productsProvider: ProductsProvider, private userdataProvider: UserdataProvider,
    private martjackauthConfigProvider: MartjackauthConfigProvider, private authProvider: AuthProvider,
    private alertProvider: AlertProvider, private excepProvider: ExceptionHandlerProvider) {
    this.headers = new HttpHeaders();
  }

  public isProductPresentInCart(productId) {
    let cartdata = JSON.parse(localStorage.getItem('martjack-cart'));
    let getProduct = cartdata.filter(data => data.ID = productId);
    return getProduct.length > 0 ? true : false;

  }

  private matchesEl(item) {
    return item.ID === this.productId && item.VariantID === this.variantProductId;
  }

  getCartItemQuantity() {
    if (localStorage.getItem('cartData') != null) {
      var cartData = JSON.parse(localStorage.getItem('cartData'));
      this.cartQuantity = cartData.CartItems.length
      return this.cartQuantity;
    } else {
      return 0;
    }
  }

  addCartItems(productData, variantProduct) {
    if (localStorage.getItem("token")) {
      return new Promise((resolve, reject) => {
        this.productsProvider.validateToken(localStorage.getItem("token")).subscribe(isTokenValid => {
          if (isTokenValid.messageCode == '1004' && isTokenValid.SessionValid == 'true') {
            let data = isTokenValid.SessionValid;
            let value = this.fetchCartData(productData, data, variantProduct);
            console.log("=========================Inside True Validate Auth Token Condition=========================");
            this.productsProvider.addCartItems(value, localStorage.getItem("token"), '').subscribe(cartStatus => {
              console.log(cartStatus, '==========================CArtStatus Dataaaaaaaaaaaaaaa===========================')
              resolve(cartStatus);
            });
          } else {
            if (this.userdataProvider.getProfileId()) {
              let emailData = '';
              let fbData = {
                "merchantId": MERCHANT_ID,
                "provider": "fb",
                "profileId": this.userdataProvider.getProfileId(),
                "email": emailData,
                "firstName": '',
                "lastName": '',
                "gender": '',
                "loginId": emailData,
                "mobileNo": ''
              }
              if (localStorage.getItem("useremail")) {
                fbData.email = localStorage.getItem("useremail");
                fbData.loginId = localStorage.getItem("useremail");
              }
              console.log(fbData, '==================FbData========================');
              this.authProvider.loginWithFB(fbData).subscribe(fbResponse => {
                console.log(fbResponse, "got response for fb from martjack");
                if (fbResponse.messageCode == '1004') {
                  this.userdataProvider.login(fbResponse['Token'].AccessToken);
                  this.userdataProvider.setUserId(fbResponse['Token'].UserId);
                  let cartData = this.fetchCartData(productData, false, variantProduct);
                  console.log(cartData, "=========================Inside False Validate Auth Token Condition Value=========================")
                  this.productsProvider.addCartItems(cartData, localStorage.getItem("token"), '').subscribe(cartStatus => {
                    console.log(cartStatus.Carts, '==========================CArtStatus Dataaaaaaaaaaaaaaa===========================')
                    resolve(cartStatus);
                  });
                } else {
                  let toast = this.alertProvider.presentToast(fbResponse.Message);
                  toast.present();
                }
              }, err => {
                let toast = this.alertProvider.presentToast(err);
                toast.present();
              });
            } else {
              let inputData = {
                "username": this.userdataProvider.getEmail(),
                "password": this.userdataProvider.getPassword()
              }
              this.authProvider.login(inputData).subscribe(loginData => {
                if (loginData['messageCode'] == '1004') {
                  let cartData = this.fetchCartData(productData, false, variantProduct);
                  console.log(cartData, "=========================Inside False Validate Auth Token Condition Value=========================")
                  this.productsProvider.addCartItems(cartData, localStorage.getItem("token"), '').subscribe(cartStatus => {
                    console.log(cartStatus.Carts, '==========================CArtStatus Dataaaaaaaaaaaaaaa===========================')
                    resolve(cartStatus);
                  });
                } else {
                  let toast = this.alertProvider.presentToast('Something went wrong. Please try after some time!!!!');
                  toast.present();
                }
              }, err => {
                this.excepProvider.excpHandler(err);
              });
            }
          }
        });
      })
    }
  }

  fetchCartData(productData, isSessionValid, variants) {
    console.log(productData, '==================================Big Data ======================================')
    let cartValue = [];
    this.getCartItemQuantity();
    if (localStorage.getItem('cartData') && isSessionValid == false) {
      let cartData = JSON.parse(localStorage.getItem('cartData'));
      console.log(cartData, "cartdata after storage")
      if (cartData != null || cartData != '') {
        if (cartData.CartItems.length > 0) {
          for (let i = 0; i < cartData.CartItems.length; i++) {
            let data = {
              ProductID: cartData.CartItems[i].ProductId,
              VariantProductID: cartData.CartItems[i].VariantProductId,
              LocationID: this.userdataProvider.mallid,
              Quantity: cartData.CartItems[i].Quantity,
              Status: "A",
              CartReferenceKey: "00000000-0000-0000-0000-000000000000"
            }
            cartValue.push(data);
          }
        }
        console.log(cartValue, "cartvalue after push")
        // localStorage.setItem('cartQuantity',cartValue)
      }
    }
    if (productData) {
      let value = {
        ProductID: productData.ID,
        VariantProductID: variants != '' ? variants.VariantProductID : 0,
        LocationID: this.userdataProvider.mallid,
        Quantity: 1,
        Status: "A",
        CartReferenceKey: "00000000-0000-0000-0000-000000000000"
      }
      cartValue.push(value);
    }
    return cartValue;
  }

  updateCartQuantity(cartRefKey, quantity) {
    let updateCartItem = `Carts/Update/${MERCHANT_ID}/${cartRefKey}/${quantity}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${updateCartItem}`, '');
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json').append('AccessToken', localStorage.getItem('token'));
    let Url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + updateCartItem + signatureData;
    return this.http.get(Url, { headers: _headers }).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("final Data"));
  }

  removeVoucher(voucherData) {
    let removeVoucherUrl = `Carts/RemoveVoucher/${MERCHANT_ID}/${voucherData}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${removeVoucherUrl}`, '');
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json').append('AccessToken', localStorage.getItem('token'));
    let Url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + removeVoucherUrl + signatureData;
    return this.http.get(Url, { headers: _headers }).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("final Data"));
  }
}
