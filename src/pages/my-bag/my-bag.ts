import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MERCHANT_ID } from '../../config';
// Import All Providers.
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { ProductsProvider } from '../../providers/products/products';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { CartProvider } from '../../providers/cart/cart';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-my-bag',
  templateUrl: 'my-bag.html',
})
export class MyBagPage {
  ProductList: any;
  couponDetail: boolean;
  getCouponData: boolean;
  applyCoupon: boolean;
  couponCode: any;
  discountDetail: boolean;
  cartList: any;
  tokenValid: any = '';
  guestUser: boolean = false;

  constructor(private excepProvider: ExceptionHandlerProvider,
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertProvider: AlertProvider,
    private loaderProvider: LoaderProvider,
    private authProvider: AuthProvider,
    private productsProvider: ProductsProvider,
    private userdataProvider: UserdataProvider,
    private cartProvider: CartProvider) {
    this.couponDetail = true;
    this.getCouponData = true;
    this.applyCoupon = false;
    this.discountDetail = false;
    this.cartList = [];
    if (localStorage.getItem('token'))
      this.tokenValid = localStorage.getItem('token');
  }

  ionViewWillLoad() {
    // this.ProductList = 'MyWishList';
  }

  getCouponCode() {
    this.getCouponData = false;
    this.applyCoupon = true;
  }

  applyCouponCode(coupon) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.productsProvider.validateToken(localStorage.getItem("token")).subscribe(isTokenValid => {
      if (isTokenValid.messageCode == '1004' && isTokenValid.SessionValid == 'true') {
        this.productsProvider.redeemCoupon(coupon).subscribe(couponData => {
          loader.dismiss();
          if (couponData.messageCode == "1004") {
            localStorage.setItem("voucherCode", coupon);
            if (couponData.Carts.CartItems.length > 0) {
              this.cartList = couponData.Carts;
              if (localStorage.getItem('cartData')) {
                localStorage.removeItem('cartData');
                localStorage.setItem('cartData', JSON.stringify(couponData.Carts));
              } else {
                localStorage.setItem('cartData', JSON.stringify(couponData.Carts));
              }
            }
            this.couponDetail = false;
            this.discountDetail = true;
            let toast = this.alertProvider.presentToast(couponData.Message);
            toast.present();
          } else if (couponData.messageCode == "1008") {
            let toast = this.alertProvider.presentToast(couponData.Message);
            toast.present();
          } else {
            let toast = this.alertProvider.presentToast(couponData.Message);
            toast.present();
          }
        }, err => {
          loader.dismiss();
          this.excepProvider.excpHandler(err);
          let toast = this.alertProvider.presentToast(err);
          toast.present();
        });
      } else {
        this.ionViewDidLoad();
        loader.dismiss();
        let toast = this.alertProvider.presentToast('Something went wrong!!!!. Please go to My Bag and try again');
        toast.present();
      }
    }, err => {
      loader.dismiss();
      this.excepProvider.excpHandler(err);
      let toast = this.alertProvider.presentToast(err);
      toast.present();
    });
  }

  goToPage(page) {
    this.navCtrl.setRoot(page);
  }

  ionViewDidLoad() {
    let cartValue = [];
    this.cartList = [];
    if (this.tokenValid) {
      let loader = this.loaderProvider.presentLoadingCustom();
      loader.present();
      // Start of new Functionality..................
      this.authProvider.validateToken().then(response => {
        if (response == true) {
          this.productsProvider.getCartItems(localStorage.getItem('useremail'), localStorage.getItem('token')).subscribe(cartData => {
            if (cartData.messageCode == "1004") {
              console.log(cartData['Carts'].CartItems.length,'=====================CartDatat Length==================')
              if (cartData['Carts'].CartItems.length > 0) {
                loader.dismiss();
                this.cartList = cartData.Carts;
                if (localStorage.getItem('cartData')) {
                  localStorage.removeItem('cartData');
                  localStorage.setItem('cartData', JSON.stringify(cartData.Carts));
                } else {
                  localStorage.setItem('cartData', JSON.stringify(cartData.Carts));
                }
              } else {
                loader.dismiss();
                console.log("=====================Inside Else condition========================")
                this.fetchCartFromLocal();
              }
            }
          }, err => {
            loader.dismiss();
            this.excepProvider.excpHandler(err);
            let toast = this.alertProvider.presentToast(err);
            toast.present();
          });
        } else {
          loader.dismiss();
          let toast = this.alertProvider.presentToast('Something went wrong. Please try after some time!!!!');
          toast.present();
        }
      }, err => {
        loader.dismiss();
        this.excepProvider.excpHandler(err);
        let toast = this.alertProvider.presentToast(err);
        toast.present();
      });
    }
  }

  goTo(orderTotal) {
    this.productsProvider.validateToken(localStorage.getItem("token")).subscribe(isTokenValid => {
      if (isTokenValid.messageCode == '1004' && isTokenValid.SessionValid == 'true') {
        this.navCtrl.setRoot("CheckOutPage", { 'orderTotal': orderTotal });
      } else {
        this.ionViewDidLoad();
        let toast = this.alertProvider.presentToast("Something went wrong. Please try again..");
        toast.present();
      }
    });
  }

  goBackToMenu() {
    this.navCtrl.push('ShopPage');
  }

  fetchCartFromLocal() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let cartValue = [];
    if (localStorage.getItem('cartData')) {
      let cartData = JSON.parse(localStorage.getItem('cartData'))
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
      this.productsProvider.addCartItems(cartValue, localStorage.getItem("token"), '').subscribe(cartStatus => {
        loader.dismiss();
        if (cartStatus.messageCode == '1004' && (cartStatus.Carts.CartItems.length > 0)) {
          this.cartList = cartStatus.Carts;
          if (localStorage.getItem('cartData')) {
            localStorage.removeItem('cartData');
            localStorage.setItem('cartData', JSON.stringify(cartStatus.Carts));
          } else {
            localStorage.setItem('cartData', JSON.stringify(cartStatus.Carts));
          }
        }
      }, err => {
        this.excepProvider.excpHandler(err);
        let toast = this.alertProvider.presentToast(err);
        toast.present();
      });
    }
  }

  deleteCartItem(product) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    if (product) {
      this.productsProvider.validateToken(localStorage.getItem("token")).subscribe(isTokenValid => {
        if (isTokenValid.messageCode == '1004' && isTokenValid.SessionValid == 'true') {
          this.productsProvider.removeCartItems(product).subscribe(removeData => {
            loader.dismiss();
            this.cartList = removeData.Carts;
            if (localStorage.getItem('cartData')) {
              localStorage.removeItem('cartData');
              if (removeData.Carts.CartItems.length > 0) {
                localStorage.setItem('cartData', JSON.stringify(removeData['Carts']));
              }
            } else {
              if (removeData.Carts.CartItems.length > 0) {
                localStorage.setItem('cartData', JSON.stringify(removeData['Carts']));
              }
            }
          }, err => {
            loader.dismiss();
            this.excepProvider.excpHandler(err);
            let toast = this.alertProvider.presentToast(err);
            toast.present();
          });
        } else {
          this.ionViewDidLoad();
          loader.dismiss();
          let toast = this.alertProvider.presentToast("Something went wrong. Please try to refresh the page and try again!!!!");
          toast.present();
        }
      }, err => {
        loader.dismiss();
        this.excepProvider.excpHandler(err);
        let toast = this.alertProvider.presentToast(err);
        toast.present();
      });
    }
  }

  changeQuantity(changeData) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.productsProvider.validateToken(localStorage.getItem("token")).subscribe(isTokenValid => {
      if (isTokenValid.messageCode == '1004' && isTokenValid.SessionValid == 'true') {
        this.cartProvider.updateCartQuantity(changeData.cartReferenceKey, changeData.quantity).subscribe(quantityStatus => {
          loader.dismiss();
          if (quantityStatus.messageCode == '1004' && (quantityStatus.Carts.CartItems.length > 0)) {
            this.cartList = quantityStatus.Carts;
            if (localStorage.getItem('cartData')) {
              localStorage.removeItem('cartData');
              setTimeout(() => {
                localStorage.setItem('cartData', JSON.stringify(quantityStatus.Carts));
              }, 3000);
            }
          }
        }, err => {
          loader.dismiss();
          this.excepProvider.excpHandler(err);
          let toast = this.alertProvider.presentToast(err);
          toast.present();
        });
      } else {
        this.ionViewDidLoad();
        let toast = this.alertProvider.presentToast("Something went wrong!!!!. Please go to My Bag and try again");
        toast.present();
      }
    }, err => {
      loader.dismiss();
      this.excepProvider.excpHandler(err);
      let toast = this.alertProvider.presentToast(err);
      toast.present();
    });
  }

  undoVoucher() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.productsProvider.validateToken(localStorage.getItem("token")).subscribe(isTokenValid => {
      if (isTokenValid.messageCode == '1004' && isTokenValid.SessionValid == 'true') {
        this.cartProvider.removeVoucher(localStorage.getItem('voucherCode')).subscribe(voucherData => {
          loader.dismiss();
          if (voucherData.messageCode == "1004") {
            localStorage.removeItem('voucherCode');
            if (voucherData.Carts.CartItems.length > 0) {
              this.cartList = voucherData.Carts;
            }
            if (localStorage.getItem('cartData')) {
              localStorage.removeItem('cartData');
              localStorage.setItem('cartData', JSON.stringify(voucherData.Carts));
            } else {
              localStorage.setItem('cartData', JSON.stringify(voucherData.Carts));
            }
            this.couponDetail = true;
            this.getCouponData = true;
            this.applyCoupon = false;
            this.discountDetail = false;
            this.couponCode = '';
            let toast = this.alertProvider.presentToast(voucherData.Message);
            toast.present();
          } else {
            let toast = this.alertProvider.presentToast(voucherData.Message);
            toast.present();
          }
        }, err => {
          loader.dismiss();
          this.excepProvider.excpHandler(err);
          let toast = this.alertProvider.presentToast(err);
          toast.present();
        });
      } else {
        this.ionViewDidLoad();
        let toast = this.alertProvider.presentToast("Something went wrong!!!!. Please go to My Bag and try again");
        toast.present();
      }
    }, err => {
      loader.dismiss();
      this.excepProvider.excpHandler(err);
      let toast = this.alertProvider.presentToast(err);
      toast.present();
    });
  }
}
