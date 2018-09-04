import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Events, MenuController, NavParams, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { StoresProvider } from '../../providers/stores/stores';
import { CommonProvider } from '../../providers/common/common';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';
import { NAME_PATTERN } from '../../validator/emailValid';
import { MERCHANT_ID } from '../../config';
import { MOBILE_PATTERN } from '../../validator/emailValid';
import { EMAIL_REGEXP } from '../../validator/emailValid';
import { unescape, uniq } from 'lodash';
import { PushProvider } from '../../providers/push/push';
import { HttpClient } from '@angular/common/http';


declare var $: any


@IonicPage()
@Component({
  selector: 'page-full-profile',
  templateUrl: 'full-profile.html',
})
export class FullProfilePage {
  @ViewChild("fullProfileSuccess") fullProfileModal;

  userProfileData: any = {};
  _email: any;
  _auth_token: any;
  ProfileForm: FormGroup;
  firstname: AbstractControl;
  lastname: AbstractControl;
  address_city: AbstractControl;
  address_state: AbstractControl;
  address_postalcode: AbstractControl;
  address_country: AbstractControl;
  age_group: AbstractControl;
  gender: AbstractControl;
  address_line: AbstractControl;
  preferred_brand_one: AbstractControl;
  preferred_brand_two: AbstractControl;
  preferred_brand_thre: AbstractControl;
  preferred_brand_four: AbstractControl;
  household_income: AbstractControl;
  Promotions: AbstractControl;
  referral_source: AbstractControl;
  brandone: AbstractControl;
  brandone2: AbstractControl;
  brandone3: AbstractControl;
  otherbrands: AbstractControl;
  subcribe_thirdparty: AbstractControl;
  mobile: AbstractControl;
  // userData :any= {};
  storesList: any = [];
  userMobileData = {
    countrycode: '',
    mobile: ''
  };
  mobileErr: string = '';

  countryList: any = [];
  stateList: any = [];
  cityList: any = [];

  // countryList1 = this.commonProvider.getCountryList();
  // stateList1 = this.commonProvider.getStateList();
  // cityList1 = this.commonProvider.getCityList();
  ageList = this.commonProvider.getAgeList();
  viplounge = this.commonProvider.getVipLounge();
  household = this.commonProvider.getHouseHold();
  email: any;
  postalAddress: any;
  city: any;
  cityName: any;
  state: any;
  pin: any;
  country: any;
  countryName: any;
  birthDate: any;
  email_address: any;
  all_attribute: any = [];
  defaultAttributes: any = [];
  update_mobile: number;


  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder, private authProvider: AuthProvider,
    private alertProvider: AlertProvider, private platform: Platform,
    private navParams: NavParams, private pushProvider: PushProvider,
    private userdataProvider: UserdataProvider, private storesProvider: StoresProvider,
    private commonProvider: CommonProvider, private events: Events, private menuCtrl: MenuController,
    private excepProvider: ExceptionHandlerProvider, private analytics: AnalyticsProvider, private translate: TranslateService, private http: HttpClient) {


    // this.userdataProvider.getUserEmail().then(useremail => {
    //   this._email = useremail;
    //   this.getProfileInfo();

    // });

    this.defaultAttributes = {
      "UserProfile": {
        "UserId": this.userdataProvider.getUserId(),
        "ProfileAttributes": {
          "ProfileAttribute": {
            "ProfileAttributeId": "",
            "ProfileAttributeValue": "",
          }
        }
      }
    }

    // fetch('assets/country-list.json').then(response => {
    //   return response.json();
    // })
    //   .then(data => {
    //     this.countryList = data.countryList;
    //     return this.countryList;
    //   }).catch(err => {
    //     // Do something for an error here
    //   });

    this.http.get('assets/country-list.json').subscribe(data => {
      this.countryList = data['countryList'];
      return this.countryList;
    }, err => {
      console.log(err, "err in country list json");
    })


    this._auth_token = this.userdataProvider.getToken();
    this.ProfileForm = this.formBuilder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.pattern(NAME_PATTERN)])],
      lastname: ['', Validators.compose([Validators.required, Validators.pattern(NAME_PATTERN)])],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern(MOBILE_PATTERN)])],
      email_address: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      age_group: [''],
      address_state: [''],
      address_country: [''],
      city: [''],
      otherbrands: [''],
      household_income: [''],
      Promotions: [''],
      referral_source: [''],
      pin: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(5)])],
      gender: [''],
      postalAddress: [''],
      preferred_brand_one: [''],
      preferred_brand_two: [''],
      preferred_brand_thre: [''],
      preferred_brand_four: [''],
      subcribe_thirdparty: [''],

    });

    this.firstname = this.ProfileForm.controls['firstname'];
    this.lastname = this.ProfileForm.controls['lastname'];
    this.mobile = this.ProfileForm.controls['mobile'];
    this.email_address = this.ProfileForm.controls['email_address'];
    this.age_group = this.ProfileForm.controls['age_group'];
    this.address_state = this.ProfileForm.controls['address_state'];
    this.address_country = this.ProfileForm.controls['address_country'];
    this.city = this.ProfileForm.controls['city'];
    this.otherbrands = this.ProfileForm.controls['otherbrands'];
    this.household_income = this.ProfileForm.controls['household_income'];
    this.Promotions = this.ProfileForm.controls['Promotions'];
    this.referral_source = this.ProfileForm.controls['referral_source'];
    this.pin = this.ProfileForm.controls['pin'];
    this.gender = this.ProfileForm.controls['gender'];
    this.preferred_brand_one = this.ProfileForm.controls['preferred_brand_one'];
    this.preferred_brand_two = this.ProfileForm.controls['preferred_brand_two'];
    this.preferred_brand_thre = this.ProfileForm.controls['preferred_brand_thre'];
    this.preferred_brand_four = this.ProfileForm.controls['preferred_brand_four'];
    this.subcribe_thirdparty = this.ProfileForm.controls['subcribe_thirdparty'];
    this.userProfileData = this.navParams.get('userProfileData');



    if (this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1144')) {
      this.ProfileForm.patchValue({
        age_group: this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1144').ProfileAttributeValue || ''
      });
    }

    if (this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1202'))
      this.ProfileForm.patchValue({
        household_income: this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1202').ProfileAttributeValue || ''
      });

    if (this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1208'))
      this.ProfileForm.patchValue({
        Promotions: this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1208').ProfileAttributeValue || ''
      });


    if (this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1204'))
      this.ProfileForm.patchValue({
        referral_source: this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1204').ProfileAttributeValue || ''
      });

    if (this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1200'))
      this.ProfileForm.patchValue({
        preferred_brand_one: this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1200').ProfileAttributeValue || ''
      });

    if (this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1200'))
      this.ProfileForm.patchValue({
        preferred_brand_two: this.userProfileData.UserProfiles.find(user => user.ProfileAttributeId == '1200').ProfileAttributeValue || ''
      });

    if (this.userProfileData.UserName)
      this.ProfileForm.patchValue({
        email_address: this.userProfileData.UserName
      });

    if (this.userProfileData.MobileNo)
      this.ProfileForm.patchValue({
        mobile: this.userProfileData.MobileNo
      });

    if (this.userProfileData.FirstName)
      this.ProfileForm.patchValue({
        firstname: this.userProfileData.FirstName

      });

    if (this.userProfileData.LastName)
      this.ProfileForm.patchValue({
        lastname: this.userProfileData.LastName
      });

    if (this.userProfileData.PostalAddress)
      this.decode()
    this.ProfileForm.patchValue({
      postalAddress: this.decode()
    });

    console.log(this.decode(), "decode")
    if (this.userProfileData.CityName)
      this.ProfileForm.patchValue({
        city: this.userProfileData.CityName
      });


    if (this.userProfileData.Pin)
      this.ProfileForm.patchValue({
        pin: this.pin
      });

    if (this.userProfileData.Country)
      this.ProfileForm.patchValue({
        country: this.userProfileData.Country
      });

    if (this.userProfileData.CountryName)
      this.ProfileForm.patchValue({
        address_country: this.userProfileData.CountryName
      });

    if (this.userProfileData.StateName)
      this.ProfileForm.patchValue({
        address_state: this.userProfileData.StateName
      });
    if (this.userProfileData.BirthDate)
      this.ProfileForm.patchValue({
        birthDate: this.userProfileData.BirthDate
      });

    if (this.userProfileData.Gender)
      this.ProfileForm.patchValue({
        gender: this.userProfileData.Gender
      });
  }

  decode() {
    return $('<div/>').html(this.userProfileData.PostalAddress).text();
  }

  updateCountry(address_country) {
    this.http.get('assets/state-list.json').subscribe(data => {
      var states = data['stateList'];
      this.stateList = states.filter(data => {
        if (data.CountryCode == address_country.value) {
          return data.CountryCode;
        }
      })
    }, err => {
      console.log(err, "err in state list json");
    });
  }

  updateState(address_state) {
    if (address_state.value == '') {
      // let toast = this.alertProvider.presentToast("Please select Country first");
      // toast.present();
    }
    else {
      this.http.get('assets/city-list.json').subscribe(data => {
        var city = data['cityList'];
        this.cityList = city.filter(data => {
          if (data.StateCode == this.address_state.value) {
            return data.StateCode;
          }
        })
      }, err => {
        console.log(err, "err in city list json");
      })
    }
  }

  updateCity(city) {
    if (city.value == '') {
      // let toast = this.alertProvider.presentToast("Please select State first");
      // toast.present();
    }
  }
  ionViewWillEnter() {
    this.getBrands();
    if (this.menuCtrl.isOpen())
      this.menuCtrl.close();
  }

  profileData() {

    this.authProvider.validateToken().then(data => {
      if (data == true) {
        let userdata = {
          "UserInfoId": this.userdataProvider.getUserInfoId(),
          "UserId": this.userdataProvider.getUserId(),
          "merchantId": MERCHANT_ID,
          "UserName": this.userProfileData.UserName,
          "FirstName": this.firstname.value,
          "LastName": this.lastname.value,
          "PostalAddress": this.decode(),
          "AlternateEmail": "",
          "City": this.userProfileData.City,
          "Pin": this.userProfileData.Pin,
          "State": this.userProfileData.State,
          "Country": this.userProfileData.Country,
          "PhoneNo": "",
          "Street": "",
          "MobileNo": this.userProfileData.Mobile,
          "BirthDate": this.userProfileData.BirthDate,
          "Gender": this.userProfileData.Gender,
          "Occupation": "",
          "Industry": "",
          "OtherArea": "",
          "CountryName": this.userProfileData.CountryName,
          "IsReceiveOffers": false
        }
        console.log(userdata, "::::::::::::::userdata of profile to submit:::::::::::::::");
        this.authProvider.updateProfileData(userdata).subscribe((updateProfileData) => {
          console.log("profile update data", updateProfileData)
          if (updateProfileData['Code'] = '1004') {
            if (this.userProfileData.MobileNo != '') {
              this.update_mobile = this.userProfileData.MobileNo;
            }
            else {
              this.update_mobile = this.userProfileData.Mobile;
            }
            // this.authProvider.searchMartjack(this.userProfileData.UserName).subscribe(searchUserData => {
            //   if (searchUserData.messageCode == '1004') {
            //     let user = searchUserData.Customers.find(usr => usr.UserName == this.userProfileData.UserName);
            let userdata = {
              firstName: this.firstname.value || '',
              lastName: this.lastname.value || '',
              mobile: this.update_mobile || '',
              email: this.userProfileData.UserName
            }
            this.userdataProvider.setMJBasicDetails(userdata);
            if (this.platform.is('cordova')) {
              this.pushProvider.loginToWebengage(this.userProfileData.UserName);
              this.pushProvider.saveCustomerInfoToWebengage(userdata);
            }
            // }
            // })
            let toast = this.alertProvider.presentToast("Congrats! Your profile is successfully updated.");
            toast.present();
            this.navCtrl.setRoot("MyAccountPage");
          }
          else {
            console.log("error in updating")
          }
        })
      }
    })
  }



  updateProfileAttribute(attribute, id) {
    this.authProvider.validateToken().then(data => {
      if (data == true) {
        if (attribute.value != undefined) {
          let userdata = {
            "UserProfile": {
              "UserId": this.userdataProvider.getUserId(),
              "ProfileAttributes": {
                "ProfileAttribute": {
                  "ProfileAttributeId": id,
                  "ProfileAttributeValue": attribute.value
                }
              }
            }
          }
          this.authProvider.updateProfileAttribute(userdata).subscribe(attributeData => {
            console.log(attributeData, "attributeData")
            if (attributeData['Code'] = '1004') {
              // let toast = this.alertProvider.presentToast("Updated Successfully");
              // toast.present();
            }
            else {
              console.log("error in updating")
            }

          })
        }
      }
    })
  }

  // updateAge(attribute,id){

  //   this.defaultAttributes.UserProfile.ProfileAttributes = Object.assign({},this.updateAttributes(attribute,id));
  //   console.log( this.defaultAttributes,"console.log defaultAttribute");
  // }

  // updateIncome(attribute,id){
  //   this.defaultAttributes.UserProfile.ProfileAttributes = Object.assign({},this.updateAttributes(attribute,id));
  //   console.log( this.defaultAttributes,"console.log defaultAttribute");
  // }


  // updateAttributes(attribute, id){
  //   console.log(attribute.value, "attribute", id)
  //   return{
  //         "ProfileAttribute": {
  //           "ProfileAttributeId": id,
  //           "ProfileAttributeValue": attribute.value
  //         }
  //       }
  // }

  updateProfileAttributebrand(attribute, id) {
    this.authProvider.validateToken().then(data => {
      if (data == true) {
        this.all_attribute.push(attribute.value);
        uniqeElements = [];
        var uniqeElements = $.unique(this.all_attribute);
        if (uniqeElements != null) {
          var uniqueBrands = uniqeElements.filter(brand => {
            brand != undefined
            return brand
          })
        }
        if (uniqueBrands.length > 0) {
          let userdata = {
            "UserProfile": {
              "UserId": this.userdataProvider.getUserId(),
              "ProfileAttributes": {
                "ProfileAttribute": {
                  "ProfileAttributeId": id,
                  "ProfileAttributeValue": uniqeElements
                }
              }
            }
          }
          this.authProvider.updateProfileAttribute(userdata).subscribe(attributeData => {
            if (attributeData['Code'] = '1004') {
              // let toast = this.alertProvider.presentToast("Updated Successfully");
              // toast.present();
            }
            else {
              console.log("error in updating")
            }
          })
        }
      }
    })
  }

  // profileData1() {

  //   if (!this.userProfileData.mobile) {
  //     if (!this.userProfileData.mobile && this.userMobileData.countrycode.length <= 0 || this.userMobileData.countrycode.length > 4) {
  //       this.mobileErr = 'Please enter a valid country code';
  //       return;
  //     } else if (!this.userProfileData.mobile && this.userMobileData.mobile.length < 8 || this.userMobileData.mobile.length > 12) {
  //       this.mobileErr = 'Please enter a valid mobile number';
  //       return;
  //     } else if (!this.userProfileData.mobile && !(/^[0-9]+$/).test(this.userMobileData.countrycode) || !(/^[0-9]+$/).test(this.userMobileData.mobile)) {
  //       this.mobileErr = 'Country code or mobile number cannot contain any characters';
  //       return;
  //     } else {
  //       this.mobileErr = '';
  //       this.ProfileForm.patchValue({
  //         mobile: this.userProfileData.mobile
  //       })
  //       this.subscribeToChannel();
  //       this.userdataProvider.getAuthToken().then(auth_token => {
  //         this.authProvider.updateProfile(this.ProfileForm.value, this._email, auth_token, '', '', this.userMobileData).subscribe(res => {
  //           if (res[0].code == 200) {
  //             this.commonProvider.getUserData(auth_token);
  //             this.openProfileModal();
  //           } else {
  //             let toast = this.alertProvider.presentToast(res[0].message);
  //             toast.present();
  //           }
  //         }, err => this.excepProvider.excpHandler(err))
  //       }, err => this.excepProvider.excpHandler(err))
  //     }
  //   } else if (this.userProfileData.mobile) {
  //     this.ProfileForm.patchValue({
  //       mobile: this.userProfileData.mobile
  //     })
  //     this.subscribeToChannel();
  //     this.userdataProvider.getAuthToken().then(auth_token => {
  //       this.authProvider.updateProfile(this.ProfileForm.value, this._email, auth_token, '', '', this.userMobileData).subscribe(res => {

  //         if (res[0].code == 200) {
  //           this.commonProvider.getUserData(auth_token);
  //           this.openProfileModal();
  //         } else {
  //           let toast = this.alertProvider.presentToast(res[0].message);
  //           toast.present();
  //         }
  //       }, err => this.excepProvider.excpHandler(err))
  //     }, err => this.excepProvider.excpHandler(err))
  //   } else {
  //     console.log('else condition');
  //   }
  // }

  getBrands() {
    this.storesProvider.getBrands().subscribe(res => {
      this.storesList = [...res];
    });
  }

  openProfileModal() {
    this.fullProfileModal.open();
  }

  closeProfileModal() {
    this.fullProfileModal.close();
    this.navCtrl.setRoot("HomePage");
  }

  subscribeToChannel() {
    this.authProvider.postSubscribe(this._email, this.ProfileForm.value.subcribe_thirdparty ? 1 : 0, this._auth_token).subscribe(res => {
    })
  }

  gotoPage(page) {
    this.navCtrl.setRoot(page);
  }

  updateValue(field) {
    if (field == 'firstname') {
      this.ProfileForm.patchValue({
        firstname: this.userProfileData['FirstName'].trim()
      })
    }
    if (field == 'lastname') {
      this.ProfileForm.patchValue({
        lastname: this.userProfileData['LastName'].trim()
      })
    }
  }

}
