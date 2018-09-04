import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import OAuths from 'oauth-signature';
import { Platform } from 'ionic-angular';
import { MERCHANT_ID, CONSUMER_KEY, SECRET_KEY, LANG_CODE } from '../../config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MartjackauthConfigProvider {
  _header: HttpHeaders;
  oAuthData: OAuths;

  // MartJack Front API Base URL.


 MARTJACK_FRONT_API_URL = `https://frontapi.martjack.com/V2/`;
  MARTJACK_DEV_URL = `https://www.martjack.com/developerapi/`;

  //Imp for oauth signature - don't remove ios
  MARTJACK_DEV_URL_COPY = `https://www.martjack.com/developerapi/`;

  
// MARTJACK_FRONT_API_URL = `https://api.sttarter.com/martjack/frontapi/`;
// MARTJACK_DEV_URL = `https://api.sttarter.com/martjack/developerapi/`;
// MARTJACK_DEV_URL_COPY = `https://www.martjack.com/DeveloperAPI/`;

  constructor(private http: HttpClient,platform:Platform) {
    this._header = new HttpHeaders();
    console.log("platform is",platform.is('ios'));
    if (platform.is('ios')) {
      
      this.MARTJACK_FRONT_API_URL = `https://api.sttarter.com/martjack/frontapi/`;
      this.MARTJACK_DEV_URL = `https://api.sttarter.com/martjack/developerapi/`;
      this. MARTJACK_DEV_URL_COPY = `https://www.martjack.com/DeveloperAPI/`;
    }
  }

  getConfig() {
    let _headers = this._header.append('Content-Type', 'application/x-www-form-urlencoded')
    .append("Access-Control-Allow-Origin", "*")
    .append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    .append("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Host"
    + "Referer, Connection, User-Agent, authorization, sw-useragent, sw-version")
    .append('Accept', 'application/json')
    .append('AccessToken', localStorage.getItem('token'));
    this.http.get(`${this.MARTJACK_FRONT_API_URL}Config/${ MERCHANT_ID }?languagecode=${LANG_CODE}`).subscribe(data => {
      if (data['MessageCode'] == '200') {
      }
    }, err => {
      Observable.throw(err)
    });
  }

  getNounce(length) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getOuthSignature(requestType: string, url: string,oauth_token:any):string {
    let finalURL;
      const time = new Date().getTime();
      const nonce = this.getNounce(10);
      this.oAuthData = {
        oauth_consumer_key: CONSUMER_KEY,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: time,
        oauth_nonce: nonce,
        oauth_version: '1.0',
      }
      let consumerSecret = SECRET_KEY;
      let signature = OAuths.generate(requestType, this.MARTJACK_DEV_URL_COPY + url, this.oAuthData, consumerSecret);
      return finalURL =  '?oauth_consumer_key=' + this.oAuthData.oauth_consumer_key + '&oauth_token=' + oauth_token + '&' + 'oauth_signature_method=' + this.oAuthData.oauth_signature_method + '&' + 'oauth_timestamp=' + this.oAuthData.oauth_timestamp + '&oauth_nonce=' + this.oAuthData.oauth_nonce + '&oauth_version=' + this.oAuthData.oauth_version + '&oauth_signature=' + signature;
  }

  validateToken(token) {
    let url = `Customer/${MERCHANT_ID}/` + token + `/ValidateToken`;
    let signatureData = this.getOuthSignature('GET', `${url}`, '');
    const _headers = this._header.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json').append('AccessToken', token);
    let validateUrl = this.MARTJACK_DEV_URL + url + signatureData;
    return this.http.get(validateUrl, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }
}
