
import { Injectable, } from '@angular/core';
import { Platform } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { OTPCHECK, LOGIN_WITH_EMAIL, SEND_OTP, REGISTRATION, LOGIN_WITH_SOCIAL, SOCIAL_AUTH, CONTACT_FORM, GET_SUBSCRIBE, POST_SUBSCRIBE, LOGIN_WITH_PHONE, FORWARD_OTP } from '../../url';
import * as moment from 'moment';
import { LoaderProvider } from '../loader/loader';
import { Observable } from 'rxjs/Observable';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { Customer, SendOtp, ValidateOtp, ProfileData, UpdateProfile } from '../../models/customerDataModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MartjackauthConfigProvider } from '../../providers/martjackauthcofig/martjackauthconfig';
import { PushProvider } from '../../providers/push/push';
import { MERCHANT_ID, EN, CONSUMER_KEY, SECRET_KEY, LANG_CODE, JPO_STOREID, BRAND_ID, BASE_URL, } from '../../config';


@Injectable()
export class AuthProvider {
  contentHeader: any;
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient, public userdataProvider: UserdataProvider, private loaderProvider: LoaderProvider,
    private excepProvider: ExceptionHandlerProvider, private martjackauthConfigProvider: MartjackauthConfigProvider,
    private pushProvider: PushProvider, private platform: Platform) {
    this.headers = new HttpHeaders();
  }

  // User Login function //
  verifyEmail(userData): Observable<Customer> {
    console.log(userData, ":;;;;;;useradata:::::::::")
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(BASE_URL + LOGIN_WITH_EMAIL + BRAND_ID + '&identifier_value=' + userData)
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  verifyMobile(mobile): Observable<Customer> {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(BASE_URL + LOGIN_WITH_PHONE + BRAND_ID + '&identifier_value=' + mobile)
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  //Verify social id
  verifySocialId(userData, socialChannel) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(BASE_URL + LOGIN_WITH_SOCIAL + userData + '&brand_identifier=' + BRAND_ID + '&social_user_id=' + userData + '&social_channel=' + socialChannel)
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  //Send OTP function //
  sendOTP(userEmail, ignoreSend): Observable<SendOtp> {
    // let loader = this.loaderProvider.presentLoadingCustom();
    // loader.present();
    let userData = new FormData();
    userData.append('brand_identifier', BRAND_ID);
    userData.append('identifier_key', 'email');
    userData.append('identifier_value', userEmail)
    return this.httpClient.post(BASE_URL + SEND_OTP + ignoreSend, userData)
      .catch((err: Error) => Observable.throw(err))
  }


  //Verify OTP
  verifyOtp(userEmail, otpValue): Observable<ValidateOtp> {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let userData = new FormData();
    userData.append('brand_identifier', BRAND_ID);
    userData.append('identifier_key', 'email');
    userData.append('identifier_value', userEmail);
    userData.append('otp_value', otpValue)
    // userData.append('otp_value', otpValue._otp)
    return this.httpClient.post(BASE_URL + OTPCHECK, userData)
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  // User Registration Function 
  userRegistration(userData, _email, tempAuth, social_channel: any, social_user_id: any): Observable<UpdateProfile> {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let data: ProfileData = {
      brand_identifier: BRAND_ID,
      first_name: userData.firstname,
      last_name: userData.lastname,
      mobile: userData.countrycode ? userData.countrycode.concat(userData.mobile) : userData.mobile,
      email: _email,
      identifier_value: _email,
      identifier_key: 'email',
      custom_fields: this.formCustomField(userData)
    }
    if (social_channel && social_user_id) {
      data.social_user_id = social_user_id;
      data.social_channel = social_channel;
    }
    return this.httpClient.post(BASE_URL + REGISTRATION, JSON.stringify(data), { headers: this.headers.set('Authorization', tempAuth) })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  updateProfile(userData, _email, tempAuth, social_channel: any, social_user_id: any, mobileDetails: any): Observable<UpdateProfile> {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let data: ProfileData = {
      brand_identifier: BRAND_ID,
      first_name: userData.firstname,
      last_name: userData.lastname,
      mobile: mobileDetails.countrycode ? mobileDetails.countrycode.concat(mobileDetails.mobile) : userData.mobile,
      email: _email,
      identifier_value: _email,
      identifier_key: 'email',
      custom_fields: this.formCustomField(userData)
    }
    if (social_channel && social_user_id) {
      data.social_user_id = social_user_id;
      data.social_channel = social_channel;
    }
    return this.httpClient.post(BASE_URL + REGISTRATION, JSON.stringify(data), { headers: this.headers.set('Authorization', tempAuth) })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  formCustomField(customField) {
    return Object.keys(customField).filter(key => key != "firstname" && key != "lastname" && key != 'mobile' && key != "countrycode").map(data => {
      let obj = {
        key: data,
        value: customField[data] || '',
      }
      return obj;
    })
  }

  // Getting Customer Social Auth //
  getCustomerSocialAuth(useremail) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(BASE_URL + SOCIAL_AUTH + 'identifier_value=' + useremail)
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  contactCustomField(formdata) {
    return Object.keys(formdata).filter(key => key != "mobile" && key != "email_address" && key != "inquiry_type").map(data => {
      let obj = {
        key: data,
        value: formdata[data],
      }
      return obj;
    })
  }

  ContactForm(email, mobile, formdata) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let msg = formdata.message;
    let inq = formdata.inquiry_type;
    formdata.message = inq + ' ' + msg;
    let currentTime = moment().format('DD-MM-YYYY hh:mm:ss');
    let userdata = {
      mobile: mobile,
      email: email,
      brand_identifier: BRAND_ID,
      identifier_value: email,
      custom_fields: this.contactCustomField(formdata)
    }
    userdata.custom_fields.push({ key: 'subject', value: currentTime });
    return this.httpClient.post(BASE_URL + CONTACT_FORM, JSON.stringify(userdata), { headers: this.userdataProvider.headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  getSubscribe(email, auth_token) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(BASE_URL + GET_SUBSCRIBE + '&identifier_value=' + email + '&brand_identifier=' + BRAND_ID, { headers: this.headers.set('Authorization', auth_token) })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  postSubscribe(email, isSubscribed, authToken) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let subscriptionData: any = {
      'subscription': [{
        email: email,
        priority: "bulk",
        scope: "all",
        channel: "email",
        is_subscribed: isSubscribed
      }, {
        email: email,
        priority: "trans",
        scope: "all",
        channel: "email",
        is_subscribed: 1
      }]
    };
    let mysubscription = new FormData();
    mysubscription.append('brand_identifier', BRAND_ID);
    mysubscription.append('subscription', JSON.stringify(subscriptionData));
    mysubscription.append('identifier_value', email);
    return this.httpClient.post(BASE_URL + POST_SUBSCRIBE, mysubscription, { headers: this.headers.set('Authorization', authToken) })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  // ==========================================MartJack API's==================================================
  login(inputData) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let url = `Customer/${MERCHANT_ID}/Login/false`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json');
    let inputType = `MerchantID=${MERCHANT_ID}&InputFormat=application/json&InputData=`;
    let loginUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    let body = inputType + JSON.stringify(inputData);
    return this.httpClient.post(loginUrl, body, { headers: _headers }).do((res) => {
      if (res['messageCode'] == '1004') {
        this.userdataProvider.login(res['Token'].AccessToken);
        this.userdataProvider.setUserId(res['Token'].UserId)
        this.userdataProvider.setIsTokenValid(true);
        this.userdataProvider.saveBasicDetails(inputData.username, inputData.password);
        this.searchMartjack(inputData.username).subscribe(searchUserData => {
          if (searchUserData.messageCode == '1004') {
            let user = searchUserData.Customers.find(usr => usr.UserName == inputData.username);
            let userdata = {
              firstName: user.FirstName || '',
              lastName: user.LastName || '',
              mobile: user.MobileNo || '',
              email: inputData.username || ''
            }
            this.userdataProvider.setMJBasicDetails(userdata);
            if (this.platform.is('cordova')) {
              this.pushProvider.loginToWebengage(inputData.username);
              this.pushProvider.saveCustomerInfoToWebengage(userdata);
            }
          }
        })

        this.verifyEmail(inputData.username).subscribe(crmloginData => {
          if (crmloginData[0].code == '200') {
            this.sendOTP(inputData.username, true).subscribe(otpdata => {
              if (otpdata[0].code == '200') {
                this.verifyOtp(inputData.username, '3636').subscribe(verifyOtp => {
                  if (verifyOtp[0].code == '200') {
                    this.userdataProvider.setCRMToken(verifyOtp[0].auth_key);
                  }
                }, err => {
                  console.log(err, "err")
                })
              }
            }, err => {
              console.log(err, "err")
            })
          }
        }, err => {
          console.log(err, "err")
        })
      }
    })
      .catch((err) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader));
  }

  sendOtpForgetPassword(username) {
  
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let url = `carts/SendOTP/${MERCHANT_ID}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let _headers = this.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    let customer = {
      "customer": {
        "merchantId": MERCHANT_ID,
        "UserName": username,
        "MobileNo": '1234567890'
      }
    }
    let inputType = `MerchantId=${MERCHANT_ID}&InputFormat=application/json&Inputdata=`;
    let sendOTPurl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    let body = inputType + JSON.stringify(customer);
    return this.httpClient.post(sendOTPurl, body, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  getResetAccesToken(){
  //  {{Baseurl}}Customer/GetAccessToken/{{MerchantId}}
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let url = `Customer/GetAccessToken/${MERCHANT_ID}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let _headers = this.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    let reseturl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;

    return this.httpClient.post(reseturl, '',{headers:_headers} )
    .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))

  }

  //Change password API
  changePassword(inputdata) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let userId = this.userdataProvider.getUserId();
    let accessToken = this.userdataProvider.getToken();
    console.log("::::::::::gettoken::::::::::", userId, "inputdata", inputdata)
    let url = `Customer/${MERCHANT_ID}/${userId}/ChangePassword`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('AccessToken', accessToken);
    let inputType = `InputFormat=application/json&InputData={"Password":`;
    let changePasswordUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    let body = inputType + JSON.stringify(inputdata) + '}';
    console.log(changePasswordUrl, "changepasswordurl", body, "body")
    return this.httpClient.post(changePasswordUrl, body, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader));
  }

  //Search API for customers in martjack
  searchMartjack(useremail) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.userdataProvider.getEmail();
    console.log(this.userdataProvider.getEmail(), "useremail")
    let customersearch = {
      "customerSearch": {
        "merchantId": MERCHANT_ID,
        "UserName": useremail
      }
    };
    let url = `Customer/${MERCHANT_ID}/Search`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let searchmartjack_url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData
    let userData = new FormData();
    userData.append('InputFormat', 'application/json'),
      userData.append('InputData', JSON.stringify(customersearch))
    return this.httpClient.post(searchmartjack_url, userData)
      .do((res) => {
        if (res['messageCode'] == '1004') {
          let customerData = res['Customers'][0];
          console.log(customerData, 'customerdata')
          console.log(customerData.UserInfoId, 'customerdataUserInfoId')
          this.userdataProvider.setUserInfoId(customerData.UserInfoId)
        }
      })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }


  loginWithFB(fbdata) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let url = `Customer/${MERCHANT_ID}/LoginWithThirdPartyProvider`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let fbloginmartjack_url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json');
    // let inputType = `MerchantID=${MERCHANT_ID}&InputFormat=application/json&InputData=`;
    let inputType = `Inputformat=application/json&inputdata=`;
    let body = inputType + JSON.stringify(fbdata);
    return this.httpClient.post(fbloginmartjack_url, body, { headers: _headers })
      .do((fbResponse) => {
        if (fbResponse['messageCode'] == '1004') {
          let userdata = {
            firstName: fbdata.firstName || '',
            lastName: fbdata.lastName || '',
            mobile: fbdata.mobileNo || '',
            email: fbdata.email || ''
          }
          this.userdataProvider.setMJBasicDetails(userdata);
          this.userdataProvider.login(fbResponse['Token'].AccessToken);
          this.userdataProvider.setUserId(fbResponse['Token'].UserId);
          this.verifyEmail(fbdata.email).subscribe(isCustomerPresent => {
            this.sendOTP(fbdata.email, true).subscribe(otpdata => {
              if (otpdata[0].code == '200') {
                this.verifyOtp(fbdata.email, '3636').subscribe(verifyOtp => {
                  if (verifyOtp[0].code == '200' && isCustomerPresent[0].code == '200') {
                    this.userdataProvider.setCRMToken(verifyOtp[0].auth_key);
                  }
                  else {
                    this.userRegistration(userdata, fbdata.email, verifyOtp[0].auth_key, 'facebook', fbdata.profileId).subscribe(regData => {
                      if (regData[0].code == '200') {
                        this.userdataProvider.setCRMToken(verifyOtp[0].auth_key);
                      }
                    }, err => {
                      console.log("reg error");
                    })

                  }
                }, err => {
                  console.log(err, "err")
                })
              }
            }, err => {
              console.log(err, "err")
            })
          }, err => {
            console.log(err, "err")
          })
        }

      })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  forwardMartJackOtp(emailId: string, otpValue: string) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let userData = new FormData();
    userData.append('brand_identifier', BRAND_ID);
    userData.append('identifier_key', 'email');
    userData.append('identifier_value', emailId);
    userData.append('otp', otpValue)
    // userData.append('otp_value', otpValue._otp)
    return this.httpClient.post(BASE_URL + FORWARD_OTP, userData)
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }


  setPasswordWithOtp(email: string, otp: string, password: string) {

    console.log(email, "email"),
    console.log(otp, "otp");
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let url = `Customer/${MERCHANT_ID}/ResetPassword`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let passworddetails = `MerchantId=${MERCHANT_ID}&UserName=${email}`;
    let resetPassword = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    let body = passworddetails;
    console.log(body, "sending body");
    return this.httpClient.post(resetPassword, body, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => loader.dismiss(loader))

  }

  // Developer API for register
  register(inputData) {
    inputData.merchantId = MERCHANT_ID;
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let url = `Customer/${MERCHANT_ID}/Create`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json');
    let inputType = `InputFormat=application/json&InputData={ customer:`;
    let registerUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    let body = inputType + JSON.stringify(inputData) + '}';
    console.log(body, "body")
    return this.httpClient.post(registerUrl, body, { headers: _headers })
      .catch((err) => Observable.throw(err))
      .finally(() => loader.dismiss());
  }

  updateProfileData(inputData) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let accessToken = this.userdataProvider.getToken();
    let url = `Customer/${MERCHANT_ID}/Update`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('AccessToken', accessToken);
    let updateProfileUrl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    let inputType = `merchantId:"${MERCHANT_ID}"&InputFormat=application/json&InputData={"customer":`
    let body = inputType + JSON.stringify(inputData) + '}';
    return this.httpClient.post(updateProfileUrl, body, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => loader.dismiss());
  }

  updateProfileAttribute(inputData) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let accessToken = this.userdataProvider.getToken();
    let url = `Customer/${MERCHANT_ID}/UpdateUserProfile`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${url}`, '');
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('AccessToken', accessToken);
    let updateProfileAttribute = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;
    let inputType = `merchantId:${MERCHANT_ID}&InputFormat=application/json&InputData=`;
    let body = inputType + JSON.stringify(inputData);
    console.log(body, " of update profile attribute url");
    return this.httpClient.post(updateProfileAttribute, body, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => loader.dismiss());
  }

  // API call for Banner MartJack API.
  fetchBanners(storeId) {
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.get(`${this.martjackauthConfigProvider.MARTJACK_FRONT_API_URL}Banners/${MERCHANT_ID}?storeid=${storeId}&languagecode=${LANG_CODE}`, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  navigationLevels(storeId) {
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.get(`${this.martjackauthConfigProvider.MARTJACK_FRONT_API_URL}Navigations/${MERCHANT_ID}?refcode=app&name=app&storeid=${storeId}&languagecode=${LANG_CODE}&outputformat=graph`, { headers: _headers })
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }

  profileData() {
  
    let userId = this.userdataProvider.getUserId();
    let url = `Customer/${MERCHANT_ID}/${userId}`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('GET', `${url}`, '');
    let profileurl = this.martjackauthConfigProvider.MARTJACK_DEV_URL + url + signatureData;

    return this.httpClient.get(profileurl)
      .catch((err: Error) => Observable.throw(err))
      .finally(() => console.log("done"));
  }



  searchSuggetion(queryparam) {

    let url = `${this.martjackauthConfigProvider.MARTJACK_FRONT_API_URL}Search/Auto/${MERCHANT_ID}?searchKey=${queryparam}&categoryid=&limit=10&storeid=${this.userdataProvider.mallid}`;
    return this.httpClient.get(url)
      .catch(err => Observable.throw(err))

  }


  validateToken() {
    return new Promise((resolve, reject) => {
      let token = this.userdataProvider.getToken();
      let profileId = this.userdataProvider.getProfileId();
      this.martjackauthConfigProvider.validateToken(token).subscribe(validateTokenData => {
        if (validateTokenData.messageCode == '1004' && validateTokenData.SessionValid == 'true') {
          console.log("session Valid");
          resolve(true);
        } else if (validateTokenData.messageCode == '1016' && validateTokenData.SessionValid == 'false') {
          console.log("session Invalid. Logging in ..");
          if(profileId){
            let fbData = {
              "merchantId": MERCHANT_ID,
              "provider": "fb",
              "profileId": profileId,
              "email": this.userdataProvider.getEmail(),
              "firstName": this.userdataProvider.getUserFirstName(),
              "lastName": this.userdataProvider.getUserLastName(),
              "gender": '',
              "loginId": this.userdataProvider.getEmail(),
              "mobileNo": this.userdataProvider.getUserMobileNo()
            }
            this.loginWithFB(fbData).subscribe(fbLoginSuccess=>{
              if (fbLoginSuccess.messageCode == '1004') {
                console.log("session valid. Logged in sucessfully ..");
                setTimeout(() => {
                  resolve(true);
                }, 100);
              } else {
                console.log("login failed");
                reject(false);
              }
            },err=>{
              reject(false);
            })


          }else{
          this.login({ username: this.userdataProvider.getEmail(), password: this.userdataProvider.getPassword() }).subscribe(loginData => {
            if (loginData.messageCode == '1004') {
              console.log("session valid. Logged in sucessfully ..");
              setTimeout(() => {
                resolve(true);
              }, 100);
            } else {
              console.log("login failed");
              reject(false);
            }
          }, err => {
            reject(false);
          });
        }
        } else {
          reject(false);
        }
        
      }, err => {
        reject(false);
      });
    });
    
  }

  logout() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    let logoutUrl = `Customer/${MERCHANT_ID}/Logout`;
    let signatureData = this.martjackauthConfigProvider.getOuthSignature('POST', `${logoutUrl}`, '');
    let _headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded').append('Accept', 'application/json').append('AccessToken', localStorage.getItem('token'));
    let Url = this.martjackauthConfigProvider.MARTJACK_DEV_URL + logoutUrl + signatureData;
    return this.httpClient.post(Url, '', { headers: _headers }).catch((err: Error) => Observable.throw(err))
      .finally(() => loader.dismiss());
  }



  getTransitionOption(direction) {
    return {
      direction: direction,
      duration: 300,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 100,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };
  }
}