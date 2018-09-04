import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { CommonProvider } from '../../providers/common/common';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { Terms } from '../../models/termsModel';
import { noWhitespaceValidator, onlyNumbers } from '../../validator/profile';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';




@IonicPage()
@Component({
  selector: 'page-login-full-info',
  templateUrl: 'login-full-info.html',
})
export class LoginFullInfoPage {

  @ViewChild('terms') termsModal;

  _termsList: Array<Terms>;
  _email: string;
  _tempAuthToken: string = '';
  _social_user_id: string;
  _social_channel: string;
  _isSocialChannelPresent: boolean;
  _isRegistered: boolean;
  _existingCustomerData: any;
  formgroup: FormGroup;
  firstname: AbstractControl;
  lastname: AbstractControl;
  address_city: AbstractControl;
  address_postalcode: AbstractControl;
  address_country: AbstractControl;
  address_state: AbstractControl;
  age_group: AbstractControl;
  gender: AbstractControl;
  address_line: AbstractControl;
  mobile: AbstractControl;
  countrycode: AbstractControl;
  isTermsSelected: boolean = false;
  isPrivacySelected: boolean = false;
  subscribe: boolean = false;
  userData = {};

  countryList = this.commonProvider.getCountryList();
  stateList = this.commonProvider.getStateList();
  ageList = this.commonProvider.getAgeList();

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private formBuilder: FormBuilder, private authProvider: AuthProvider,
    private alertProvider: AlertProvider, private commonProvider: CommonProvider,
    private userdataProvider: UserdataProvider, private menuCtrl: MenuController,
    private excepProvider: ExceptionHandlerProvider,
    private analytics: AnalyticsProvider, private translate:TranslateService) {

    this._email = this.navParams.get('email');
    this._tempAuthToken = this.navParams.get('tempAuthToken');
    console.log(this._tempAuthToken, "temp auth token");
    this._social_channel = this.navParams.get('social_channel');
    this._social_user_id = this.navParams.get('social_user_id');
    this._isSocialChannelPresent = this.navParams.get('isSocialChannelPresent');
    this._existingCustomerData = this.navParams.get('customerdata');
    this._isRegistered = this.navParams.get('isRegistered');

    if (this._isRegistered)
      this.getExistingCustomerDetails();



    this.formgroup = this.formBuilder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
      address_city: ['', Validators.minLength(0)],
      address_postalcode: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      address_country: ['', Validators.required],
      age_group: ['', Validators.required],
      gender: ['', Validators.required],
      address_state: ['', Validators.required],
      address_line: ['', Validators.minLength(0)],
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12), onlyNumbers])],
      countrycode: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(4), onlyNumbers])]
    });

    this.firstname = this.formgroup.controls['firstname'];
    this.lastname = this.formgroup.controls['lastname'];
    this.address_city = this.formgroup.controls['address_city'];
    this.address_postalcode = this.formgroup.controls['address_postalcode'];
    this.address_country = this.formgroup.controls['address_country'];
    this.age_group = this.formgroup.controls['age_group'];
    this.gender = this.formgroup.controls['gender'];
    this.address_state = this.formgroup.controls['address_state'];
    this.address_line = this.formgroup.controls['address'];
    this.mobile = this.formgroup.controls['mobile'];
    this.countrycode = this.formgroup.controls['countrycode'];

    this.getTermsAndCondition();
    this.analytics.fa.logEvent('RegistrationPage');

  }

  ionViewWillEnter() {

    this.menuCtrl.swipeEnable(false);
    if (this.menuCtrl.isOpen())
      this.menuCtrl.close();
  }

  register() {


    //register with social login insta/fb

    if (this._social_channel && this._social_user_id) {


      this.authProvider.userRegistration(this.formgroup.value, this._email, this._tempAuthToken, this._social_channel, this._social_user_id).subscribe(res => {
        if (res[0].code == 200) {
          this.subscription();
          this.authProvider.verifyEmail({ email: this._email }).subscribe(custdata => {

            if (custdata[0].code == 200) {

              this.commonProvider.setUserData(this._tempAuthToken, custdata);
              if (this.commonProvider._noOfMalls == 1)
                this.navCtrl.setRoot('HomePage');
              else if (this.commonProvider._noOfMalls > 1)
                this.navCtrl.setRoot('SelectOutletPage');
              else {

              }


            } else {

              let toast = this.alertProvider.presentToast(custdata[0].message);
              toast.present();

            }
          }, err => this.excepProvider.excpHandler(err))
        }

        else {

          let toast = this.alertProvider.presentToast(res[0].message);
          toast.present();

        }
      }, err => this.excepProvider.excpHandler(err))

    } else {

      // Register with email //


      this.authProvider.userRegistration(this.formgroup.value, this._email, this._tempAuthToken, '', '').subscribe(res => {


        if (res[0].code == 200) {
          this.subscription();
          this.authProvider.verifyEmail({ email: this._email }).subscribe(custdata => {
            if (custdata[0].code == 200) {

              this.commonProvider.setUserData(this._tempAuthToken, custdata);
              if (this.commonProvider._noOfMalls == 1)
                this.navCtrl.setRoot('HomePage');
              else if (this.commonProvider._noOfMalls > 1)
                this.navCtrl.setRoot('SelectOutletPage');
              else {

              }

            } else {

              let toast = this.alertProvider.presentToast(custdata[0].message);
              toast.present();

            }
          }, err => this.excepProvider.excpHandler(err))

        }

        else {
          let toast = this.alertProvider.presentToast(res[0].message);
          toast.present();
        }
      }, err => this.excepProvider.excpHandler(err))
    }
  }


  getExistingCustomerDetails() {
    this.userData = {

      firstname: this.userdataProvider.getUserFirstName(),
      lastname: this.userdataProvider.getUserLastName(),
      city: this.userdataProvider.getUserCity(),
      mobile: this.userdataProvider.getUserMobileNo(),
      zipcode: this.userdataProvider.getUserPostcode(),
      age: this.userdataProvider.getUserAgeGroup(),
      gender: this.userdataProvider.getUserGender(),
      country: this.userdataProvider.getUserCountryOfOrigin(),
      state: this.userdataProvider.getUserState(),
      brandonesec1: this.userdataProvider.getUserHouseholdIncome(),
      brandonesec2: this.userdataProvider.getUserVIPLounge(),
      address: this.userdataProvider.getUserAddress(),
      storeName1: this.userdataProvider.getUserPreferredBrandOne(),
      storeName2: this.userdataProvider.getUserPreferredBrandTwo(),
      storeName3: this.userdataProvider.getUserPreferredBrandThree(),
      storeName4: this.userdataProvider.getUserPreferredBrandFour()

    }

  }

  declineModal() {
    this.termsModal.close();
    let toast = this.alertProvider.presentToast('Sorry cannot register without accepting terms and conditions');
    toast.present();

  }

  acceptTerms() {
    this.termsModal.close();
    this.register();
  }

  openTermsModal() {
    this.termsModal.open();
  }


  getTermsAndCondition() {
    this.commonProvider.getTermsAndConditions().subscribe(res => {
      this._termsList = res;
    })
  }

  gotoPage(page) {
    this.navCtrl.push(page);
  }

  subscription() {
    if (this.subscribe == false)
      this.authProvider.postSubscribe(this._email, 0, this._tempAuthToken).subscribe(res => {
      }, err => {
      });
  }

  updateValue(field) {
    if (field == 'firstname') {
      this.formgroup.patchValue({
        firstname: this.userData['firstname'].trim()
      })
    }
    if (field == 'lastname') {
      this.formgroup.patchValue({
        lastname: this.userData['lastname'].trim()
      })
  }

  }

}