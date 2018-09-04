import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MERCHANT_ID, LANG_CODE } from '../../config';
import { Observable,BehaviorSubject } from 'rxjs';
import { MartjackauthConfigProvider } from '../../providers/martjackauthcofig/martjackauthconfig';
import { UserdataProvider } from '../../providers/userdata/userdata';

@Injectable()
export class ProductsProvider {
  headers: HttpHeaders;
  sortBy: any;
  isFilterSubject:any;

  constructor(public http: HttpClient, private martjackauthConfigProvider: MartjackauthConfigProvider, private userdataProvider: UserdataProvider) {
    this.headers = new HttpHeaders();
    console.log(this.userdataProvider.mallid, '===================Mall Id=====================')
    this.isFilterSubject = new BehaviorSubject<boolean>(this.hasFilter())
  }

  fetchProductDetails(productId) {
    // graph, object, flat
    return this.http.get(`${this.martjackauthConfigProvider.MARTJACK_FRONT_API_URL}Products/${MERCHANT_ID}?productid=${productId}&storeid=${this.userdataProvider.mallid}&hsid=&outputformat=string`).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  fetchListofProducts(categoryId: any, brandId: any, tagId: any, queryText: any, sortBy: any, minprice: any, maxprice: any, pageNo: any) {
    let url = `Search/Refine/${MERCHANT_ID}?OnlyFilters=&storeid=${this.userdataProvider.mallid}&attributeValueids=&brandids=${brandId}&categoryids=${categoryId}&from=${pageNo}&groupids=&limit=10&maxprice=${maxprice}&minprice=${minprice}&orderseq=${sortBy}&outputformat=object&query_text=${queryText}&supplierids=&tagIds=${tagId}&variantpropertyids=&languagecode=${LANG_CODE}`;
    return this.http.get(`${this.martjackauthConfigProvider.MARTJACK_FRONT_API_URL}` + url).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  validateToken(token) {
    console.log(token, "token====")
    let url = `Customer/${MERCHANT_ID}/` + token + `/ValidateToken`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${url}`, '');
    const _headers = this.headers.set('Content-Type', 'application/x-www-form-urlencoded').set('Accept', 'application/json').set('AccessToken', token);
    let validateUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    return this.http.get(validateUrl, { headers: _headers }).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  addCartItems(productData: any, token: string, userData: any) {
    let url = `carts/AddCartItems/${MERCHANT_ID}`;
    console.log(url, '===========================URL Formation========================')
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let _headers = this.headers.set('Content-Type', 'application/x-www-form-urlencoded').set('Accept', 'application/json').set('AccessToken', token);
    let inputType = `MerchantID=${MERCHANT_ID}&InputFormat=application/json&InputData=`;
    let validateUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    let inputData = {
      cart: {
        "alternatePickupFirstName": userData.alternatePickupFirstName,
        "alternatePickupLastName": userData.alternatePickupLastName,
        "alternatePickupMobile": userData.alternatePickupMobile,
        "alternatePickupEmail": userData.alternatePickupEmail,
        "alternatePickupIcNo": userData.alternatePickupIcNo,
        "isPickupStore": "true",
        "CurrencyCode": userData.CurrencyCode,
        "billFirstName": userData.billFirstName,
        "shipCity": userData.shipCity,
        "shipState": userData.shipState,
        "shipCountry": userData.shipCountry,
        "pickupEmail": userData.pickupEmail,
        "pickupFirstName": userData.pickupFirstName,
        "pickupLastName": userData.pickupLastName,
        "pickupMobile": userData.pickupMobile,
        Item: productData
      }
    }
    // inputData.cart
    console.log(inputData, '====================Cart Input Data==============================')
    // let body = inputType + JSON.stringify(inputData);
    let body = inputType + JSON.stringify(inputData);
    return this.http.post(validateUrl, body, { headers: _headers }).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("final Data"));
  }

  // GET /Carts/CartByUser/{merchantId}/{userName}
  getCartItems(email, token) {
    let getcarturl = `Carts/Cart/${MERCHANT_ID}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${getcarturl}`, '');
    let _headers = this.headers.set('Content-Type', 'application/x-www-form-urlencoded').set('Accept', 'application/json').set('AccessToken', token);
    // let inputType = `MerchantID=${MERCHANT_ID}&InputFormat=application/json&InputData=`;
    let Url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + getcarturl + signatureData;
    return this.http.get(Url, { headers: _headers }).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("final Data"));
  }

  removeCartItems(cartData) {
    let deletecarturl = `Carts/Remove/${MERCHANT_ID}/${cartData.CartReferenceKey}/${cartData.Quantity}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${deletecarturl}`, '');
    let _headers = this.headers.set('Content-Type', 'application/x-www-form-urlencoded').set('Accept', 'application/json').set('AccessToken', localStorage.getItem('token'));
    // let inputType = `MerchantID=${MERCHANT_ID}&InputFormat=application/json&InputData=`;
    let Url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + deletecarturl + signatureData;
    return this.http.get(Url, { headers: _headers }).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("final Data"));
  }

  redeemCoupon(coupon) {
    let applyCoupon = `Carts/ApplyVoucher/${MERCHANT_ID}/${coupon}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${applyCoupon}`, '');
    let _headers = this.headers.set('Content-Type', 'application/x-www-form-urlencoded').set('Accept', 'application/json').set('AccessToken', localStorage.getItem('token'));
    // let inputType = `MerchantID=${MERCHANT_ID}&InputFormat=application/json&InputData=`;
    let Url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + applyCoupon + signatureData;
    return this.http.get(Url, { headers: _headers }).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("final Data"));
  }


  getProductsFilters(categoryId, brandId, tagId, queryText) {
    let url = `Search/Refine/${MERCHANT_ID}?OnlyFilters=true&storeid=${this.userdataProvider.mallid}&attributeValueids=&brandids=${brandId}&categoryids=${categoryId}&from=1&groupids=&limit=100&maxprice=&minprice=&orderseq=catalog&outputformat=object&query_text=${queryText}&supplierids=&tagIds=${tagId}&variantpropertyids=&languagecode=${LANG_CODE}`;
    return this.http.get(`${this.martjackauthConfigProvider.MARTJACK_FRONT_API_URL}` + url).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  setSort(sortdata) {
    localStorage.setItem('sort', sortdata);
  }

  getSort() {
    return localStorage.getItem('sort');
  }

  hasFilter():boolean {
    return !!localStorage.getItem('sort');
  }

  getfilterSubject(): Observable<boolean>{
    return this.isFilterSubject.asObservable();
  }

  setFilterSubject(data) {
    console.log("setFilterSubject", data);
    this.isFilterSubject.next(data);
  }

  
}