import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MERCHANT_ID, LANG_CODE } from '../../config';
import { MartjackauthConfigProvider } from '../../providers/martjackauthcofig/martjackauthconfig';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { Observable } from 'rxjs/Observable';
import moment from 'moment';


@Injectable()
export class CheckoutProvider {

  orderStatuses:any = [{
    status: 'A',
    text:'CONFIRMED'
    
  },
  {
    status: 'P',
    text:'PAYMENT PENDING'
    
    },
    {
      status: 'F',
      text:'PAYMENT FAILED'
      
    },
    {
      status: 'D',
      text:'COLLECTED'
      
    },
    {
      status: 'C',
      text:'CANCELLED'
      
    },
    {
      status: 'W',
      text:'WAITING FOR COLLECTION'
      
    },
    {
      status: 'S',
      text:'Shipped'
      
    }
  ]

  headers: HttpHeaders;
  constructor(public http: HttpClient,
    private userdataProvider: UserdataProvider,
    private martjackauthConfigProvider: MartjackauthConfigProvider) {
    this.headers = new HttpHeaders();
  }

  getOrderHistory(userId) {
    let url = `Order/History/${MERCHANT_ID}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let searchmartjack_url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData
    let data = `OrderID=&UserId=${userId}&ToDate=` + moment().add(1,'day').format('MM-DD-YYYY') ;
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('MerchantId', MERCHANT_ID)
    let body = data;
    return this.http.post(searchmartjack_url, body, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"))
  }

  getOrderInfo(orderId) {
    let url = `Order/${MERCHANT_ID}/${orderId}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${url}`, '');
    let searchmartjack_url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded')
    return this.http.get(searchmartjack_url, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("something"))
  }

  getDeliverySlots() {
    return this.http.get(`${this.martjackauthConfigProvider.MARTJACK_FRONT_API_URL}DeliverySlots/${MERCHANT_ID}?deliverymode=S&storeid=${this.userdataProvider.mallid}&outputformat=graph&daysuntil=30`).catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  setDeliverySlot(deliveryDate, deliverySlotId) {
    let url = `Carts/SetDeliverySlot/${MERCHANT_ID}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let deliverySlotUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json').append('Accesstoken', localStorage.getItem('token'));
    let rawData = `MerchantId=${MERCHANT_ID}&deliveryslotid=${deliverySlotId}&deliverydate=${deliveryDate}`;
    return this.http.post(deliverySlotUrl, rawData, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  // API to clear all the cart items from the user's cart.
  removeAllCartItems() {
    let url = `Carts/RemoveAll/${MERCHANT_ID}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${url}`, '');
    let clearCartUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json').append('Accesstoken', localStorage.getItem('token'));
    return this.http.get(clearCartUrl, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  getPaymentMethods() {
    let url = `Carts/PaymentOptions/${MERCHANT_ID}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${url}`, '');
    let paymentOptionsUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json').append('Accesstoken', localStorage.getItem('token'));
    return this.http.get(paymentOptionsUrl, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  placeOrder(paymentData) {
    let url = `Order/PlaceOrder/${MERCHANT_ID}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let placeOrderUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json').append('Accesstoken', localStorage.getItem('token'));
    let rawData = `PaymentType=${paymentData.PaymentType}&PaymentOption=${paymentData.Paymentoption}&GateWayId=${paymentData.GatewayId}&ClearCart=true&Transaction=false`;
    return this.http.post(placeOrderUrl, rawData, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"))
  }


  getOrderStatus(orderStatus) {
    
    let status = this.orderStatuses.filter(stat => stat.status === orderStatus);
    if (status.length > 0)
      return status[0].text;
    return null;  
  }
}
