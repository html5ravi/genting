import { Injectable } from '@angular/core';
import { BASE_URL, BRAND_ID} from '../../config';
import { REDEEM_EXPERIENCES, ISSUE_VOUCHER, REDEEMED_VOUCHERS } from '../../url';
import { UserdataProvider } from '../userdata/userdata';
import { LoaderProvider } from '../loader/loader';
import { Observable } from 'rxjs/Observable';
import { VouchersData } from '../../models/voucherModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class VouchersProvider {
  headers: HttpHeaders;
  constructor(private userdataProvider:UserdataProvider,private loaderProvider:LoaderProvider,private httpClient:HttpClient) {
    console.log('Hello VouchersProvider Provider');
    this.headers = new HttpHeaders();
  }

  
  
  //Issue Voucher

  issueVouchers(userEmail, expId,authKey) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let userData = new FormData();
    userData.append('brand_identifier', BRAND_ID);
    userData.append('identifier_key','email');
    userData.append('identifier_value', userEmail);
    userData.append('email', userEmail);
    userData.append('experience_id',expId);

return this.httpClient.post(BASE_URL + ISSUE_VOUCHER,userData,{headers:new HttpHeaders().set('Authorization',authKey)})
.catch((err: Error) => Observable.throw(err))
.finally(()=>this.loaderProvider.dismissLoader(loader))  

  }

  //Redeem Experience Vouchers //
  redeemVouchers(userEmail, couponCode, authKey) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let userData = new FormData();
    userData.append('brand_identifier', BRAND_ID);
    userData.append('identifier_key','email');
    userData.append('identifier_value',userEmail);
    userData.append('voucher_code',couponCode);

return this.httpClient.post(BASE_URL + REDEEM_EXPERIENCES,userData,{headers:new HttpHeaders().set('Authorization',authKey)})
  .catch((err: Error) => Observable.throw(err))
  .finally(()=>this.loaderProvider.dismissLoader(loader))   

  }

  

  //returns users redeemed vouchers
  getRedeemedVouchers(userEmail,authKey):Observable<VouchersData> {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(BASE_URL + REDEEMED_VOUCHERS + userEmail + '&identifier_key=email' +  '&brand_identifier=' + BRAND_ID,{ headers:new HttpHeaders().set('Authorization',authKey) })
      .catch((err: Error) => Observable.throw(err))
      .finally(()=>this.loaderProvider.dismissLoader(loader)) 

  }

}
