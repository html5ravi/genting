webpackJsonp([14],{

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFullInfoPageModule", function() { return LoginFullInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_full_info__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginFullInfoPageModule = /** @class */ (function () {
    function LoginFullInfoPageModule() {
    }
    LoginFullInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_full_info__["a" /* LoginFullInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_full_info__["a" /* LoginFullInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
        })
    ], LoginFullInfoPageModule);
    return LoginFullInfoPageModule;
}());

//# sourceMappingURL=login-full-info.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateName */
/* harmony export (immutable) */ __webpack_exports__["a"] = noWhitespaceValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = onlyNumbers;
function validateName(c) {
    var name_pattern = "[a-zA-Z][a-zA-Z ]+";
    return name_pattern.concat(c.value) ? null : {
        validateName: {
            valid: false
        }
    };
}
function noWhitespaceValidator(control) {
    if (control.value) {
        var isWhitespace = (control.value || '').trim().length === 0;
        // console.log((control.value || '').trim().length);
        // console.log(isWhitespace, "is white space");
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    }
    else {
        return { 'whitespace': false };
    }
}
function onlyNumbers(control) {
    if (control.value) {
        var isValid = (/^[0-9]+$/).test(control.value);
        return isValid ? null : { 'onlynumber': true };
    }
    else {
        return { 'onlynumber': false };
    }
}
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFullInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__validator_profile__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LoginFullInfoPage = /** @class */ (function () {
    function LoginFullInfoPage(navCtrl, navParams, formBuilder, authProvider, alertProvider, commonProvider, userdataProvider, menuCtrl, excepProvider, http, analytics, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.alertProvider = alertProvider;
        this.commonProvider = commonProvider;
        this.userdataProvider = userdataProvider;
        this.menuCtrl = menuCtrl;
        this.excepProvider = excepProvider;
        this.http = http;
        this.analytics = analytics;
        this.translate = translate;
        this._tempAuthToken = '';
        this.isTermsSelected = false;
        this.isPrivacySelected = false;
        this.subscribe = false;
        this.userData = {};
        this.countryList = this.commonProvider.getCountryList();
        this.stateList = this.commonProvider.getStateList();
        this.ageList = this.commonProvider.getAgeList();
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
            firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
            address_city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(0)],
            address_postalcode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(5)])],
            address_country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            age_group: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address_state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address_line: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(0)],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(12), __WEBPACK_IMPORTED_MODULE_9__validator_profile__["b" /* onlyNumbers */]])],
            countrycode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_9__validator_profile__["b" /* onlyNumbers */]])]
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
        if (localStorage.getItem('regdata')) {
            var value = JSON.parse(localStorage.getItem('regdata'));
            console.log(value, "dddddd");
            this.getExistingCustomerDetailsFromLocal(value);
        }
    }
    LoginFullInfoPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.swipeEnable(false);
        if (this.menuCtrl.isOpen())
            this.menuCtrl.close();
    };
    LoginFullInfoPage.prototype.register = function () {
        //register with social login insta/fb
        var _this = this;
        if (this._social_channel && this._social_user_id) {
            this.authProvider.userRegistration(this.formgroup.value, this._email, this._tempAuthToken, this._social_channel, this._social_user_id).subscribe(function (res) {
                if (res[0].code == 200) {
                    _this.subscription();
                    _this.authProvider.verifyEmail({ email: _this._email }).subscribe(function (custdata) {
                        if (custdata[0].code == 200) {
                            _this.commonProvider.setUserData(_this._tempAuthToken, custdata);
                            if (_this.commonProvider._noOfMalls == 1)
                                _this.navCtrl.setRoot('HomePage');
                            else if (_this.commonProvider._noOfMalls > 1)
                                _this.navCtrl.setRoot('SelectOutletPage');
                            else {
                            }
                            setTimeout(function () {
                                localStorage.removeItem('regdata');
                                console.log("removed reqdata");
                            }, 3000);
                        }
                        else {
                            var toast = _this.alertProvider.presentToast(custdata[0].message);
                            toast.present();
                        }
                    }, function (err) { return _this.excepProvider.excpHandler(err); });
                }
                else {
                    var toast = _this.alertProvider.presentToast(res[0].message);
                    toast.present();
                }
            }, function (err) { return _this.excepProvider.excpHandler(err); });
        }
        else {
            // Register with email //
            this.authProvider.userRegistration(this.formgroup.value, this._email, this._tempAuthToken, '', '').subscribe(function (res) {
                if (res[0].code == 200) {
                    _this.subscription();
                    _this.authProvider.verifyEmail({ email: _this._email }).subscribe(function (custdata) {
                        if (custdata[0].code == 200) {
                            _this.commonProvider.setUserData(_this._tempAuthToken, custdata);
                            if (_this.commonProvider._noOfMalls == 1)
                                _this.navCtrl.setRoot('HomePage');
                            else if (_this.commonProvider._noOfMalls > 1)
                                _this.navCtrl.setRoot('SelectOutletPage');
                            else {
                            }
                            setTimeout(function () {
                                localStorage.removeItem('regdata');
                                console.log("removed reqdata");
                            }, 3000);
                        }
                        else {
                            var toast = _this.alertProvider.presentToast(custdata[0].message);
                            toast.present();
                        }
                    }, function (err) { return _this.excepProvider.excpHandler(err); });
                }
                else {
                    var toast = _this.alertProvider.presentToast(res[0].message);
                    toast.present();
                }
            }, function (err) { return _this.excepProvider.excpHandler(err); });
        }
    };
    LoginFullInfoPage.prototype.getExistingCustomerDetails = function () {
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
        };
    };
    LoginFullInfoPage.prototype.getExistingCustomerDetailsFromLocal = function (data) {
        // this.formgroup.patchValue({
        //   firstname: data.firstname,
        //   lastname: data.lastname,
        //   city: data.city,
        //   mobile: data.mobile,
        //   zipcode:data.zipcode,
        //   age:data.age,
        //   gender:data.gender,
        //   country:data.country,
        //   state:data.state,
        //   address:data.address
        // })
        this.userData = {
            firstname: data.firstname,
            lastname: data.lastname,
            city: data.address_city,
            countrycode: data.countrycode,
            mobile: data.mobile,
            zipcode: data.address_postalcode,
            age: data.age_group,
            gender: data.gender,
            country: data.address_country,
            state: data.address_state,
            address: data.address_line,
        };
    };
    LoginFullInfoPage.prototype.declineModal = function () {
        this.termsModal.close();
        var toast = this.alertProvider.presentToast('Sorry cannot register without accepting terms and conditions');
        toast.present();
    };
    LoginFullInfoPage.prototype.acceptTerms = function () {
        this.termsModal.close();
        this.register();
    };
    LoginFullInfoPage.prototype.openTermsModal = function () {
        this.termsModal.open();
    };
    LoginFullInfoPage.prototype.getTermsAndCondition = function () {
        var _this = this;
        this.commonProvider.getTermsAndConditions().subscribe(function (res) {
            _this._termsList = res;
        });
    };
    LoginFullInfoPage.prototype.gotoPage = function (page) {
        this.navCtrl.push(page);
    };
    LoginFullInfoPage.prototype.subscription = function () {
        if (this.subscribe == false)
            this.authProvider.postSubscribe(this._email, 0, this._tempAuthToken).subscribe(function (res) {
            }, function (err) {
            });
    };
    LoginFullInfoPage.prototype.updateValue = function (field) {
        if (field == 'firstname') {
            this.formgroup.patchValue({
                firstname: this.userData['firstname'].trim()
            });
        }
        if (field == 'lastname') {
            this.formgroup.patchValue({
                lastname: this.userData['lastname'].trim()
            });
        }
    };
    LoginFullInfoPage.prototype.setCountry = function () {
        // console.log("set Counrty on blur");
        if (this.formgroup.value.countrycode) {
            var countryCode_1 = this.formgroup.value.countrycode;
            // console.log(countryCode,"tetxz");
            var countryData = this.commonProvider._countryList.find(function (country) { return country.countrycode == countryCode_1; });
            // console.log(countryData,"got country data");
            this.formgroup.patchValue({
                address_country: countryData.name
            });
        }
        // console.log(this.formgroup.value);
    };
    LoginFullInfoPage.prototype.setCity = function () {
        var _this = this;
        if (this.formgroup.value.address_postalcode) {
            var zipCode = this.formgroup.value.address_postalcode;
            var dataa_1;
            this.userdataProvider.getCity(zipCode).subscribe(function (data) {
                console.log(data, "data from google api------------");
                dataa_1 = data;
                //   console.log(dataa.filter(function(item){
                //     return item.results[0].address_components[1].types === "administrative_area_level_1";
                // }),"DATAAAAAAAAAAAAAAAA");
                if (dataa_1.status == "ZERO_RESULTS") {
                    console.log("No results found for the zipcode entered.");
                }
                else {
                    for (var a = 0; a < dataa_1.results[0].address_components.length; a++) {
                        for (var b = 0; b < dataa_1.results[0].address_components[a].types.length; b++) {
                            if (dataa_1.results[0].address_components[a].types[b] == "administrative_area_level_1") {
                                _this.formgroup.patchValue({
                                    address_city: dataa_1.results[0].address_components[a].long_name
                                });
                            }
                        }
                    }
                }
            });
        }
    };
    LoginFullInfoPage.prototype.ionViewWillLeave = function () {
        console.log("will leave", this.formgroup.value);
        var value = this.formgroup.value;
        localStorage.setItem('regdata', JSON.stringify(value));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('terms'),
        __metadata("design:type", Object)
    ], LoginFullInfoPage.prototype, "termsModal", void 0);
    LoginFullInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: 'page-login-full-info',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/login-full-info/login-full-info.html"*/'<!-- <ion-header>\n    <ion-navbar>\n      <figure no-margin>\n        <img src="assets/images/outerlogo.svg" />\n      </figure>\n    </ion-navbar>\n  </ion-header> -->\n  <header [canShowMenu]=false [showBackButton]=true></header>\n\n<ion-content padding no-bounce>\n    <figure no-margin class="marginAdj">\n        <img src="assets/images/VIP-Lounge-1-Page.jpg" />\n      </figure>\n    <ion-card-content no-padding padding-left padding-right>\n      <form  [formGroup]= "formgroup" no-padding margin-top (ngSubmit)="openTermsModal()">\n        <ion-list>\n          <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.FIRST_NAME" | translate }}</h6>\n          <ion-item no-padding>\n            <ion-input  type="text" [(ngModel)]="userData.firstname" name="firstname" formControlName="firstname" (ionBlur)="updateValue(\'firstname\')"></ion-input>\n          </ion-item>\n            <ion-item *ngIf="firstname.hasError(\'required\') && firstname.touched">\n              <p>*{{ "COMMON.STATIC_TEXT.FIRST_NAME_REQ" | translate }}</p>\n            </ion-item>\n            <!-- <ion-item *ngIf="firstname.hasError(\'minlength\') || firstname.hasError(\'whitespace\') || firstname.hasError(\'pattern\')">\n              <p>Please enter a valid name</p>\n            </ion-item> -->\n          <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.LAST_NAME" | translate }}</h6>\n          <ion-item no-padding>\n            <ion-input type="text"  [(ngModel)]="userData.lastname" name="lastname" formControlName="lastname" (ionBlur)="updateValue(\'lastname\')"></ion-input>\n          </ion-item>\n            <ion-item *ngIf="lastname.hasError(\'required\') && lastname.touched">\n              <p >*{{ "COMMON.STATIC_TEXT.LAST_NAME_REQ" | translate }}</p>\n            </ion-item>\n            <!-- <ion-item *ngIf="lastname.hasError(\'minlength\') || lastname.hasError(\'whitespace\') || lastname.hasError(\'pattern\')">\n              <p>Please enter a valid name</p>\n            </ion-item> -->\n            <ion-row>\n              <ion-col col-5>\n                  <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.COUNTRY_CODE" | translate }}</h6>\n              </ion-col>\n              <ion-col col-7>\n                  <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.MOBILE_NO" | translate }}</h6>\n              </ion-col>\n            </ion-row>\n              <ion-row class="mobile">\n                <ion-col col-1 no-padding style="margin-top:10px;">\n                  <span> + </span>\n                </ion-col>\n                <ion-col col-4>\n                  <ion-item style="padding: 0">\n                  <ion-input type="tel"  [(ngModel)]="userData.countrycode" (ionBlur)="setCountry()" name="ccode" formControlName="countrycode"></ion-input>\n                </ion-item>\n                </ion-col>\n                <ion-col col-7>\n                    <ion-item>\n                  <ion-input type="tel" [(ngModel)]="userData.mobile" name="mobile" formControlName="mobile" ></ion-input>\n                </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-item *ngIf="countrycode.hasError(\'required\') && countrycode.touched">\n                <p>*{{ "LOGIN_FULLINFO_PAGE.STATIC_TEXT.COUNRTY_CODE_REQ_1" | translate }}</p>\n              </ion-item>\n              <ion-item *ngIf="countrycode.hasError(\'onlynumber\') && countrycode.touched">\n                <p>{{ "LOGIN_FULLINFO_PAGE.STATIC_TEXT.COUNRTY_CODE_REQ_2" | translate }}</p>\n              </ion-item>\n              <ion-item *ngIf="countrycode.hasError(\'maxlength\') || countrycode.hasError(\'minlength\')">\n                <p>{{ "LOGIN_FULLINFO_PAGE.STATIC_TEXT.COUNRTY_CODE_REQ_3" | translate }}</p>\n              </ion-item>\n              <ion-item *ngIf="mobile.hasError(\'required\') && mobile.touched">\n                <p>*{{ "LOGIN_FULLINFO_PAGE.STATIC_TEXT.MOBILE_NO_REQ" | translate }}</p>\n              </ion-item>\n              <ion-item *ngIf="mobile.hasError(\'maxlength\') || mobile.hasError(\'minlength\')">\n                <p>{{ "LOGIN_FULLINFO_PAGE.STATIC_TEXT.MOBILE_NO_REQ_1" | translate }}</p>\n              </ion-item>\n              <ion-item *ngIf="mobile.touched && mobile.hasError(\'onlynumber\')">\n                <p>{{ "LOGIN_FULLINFO_PAGE.STATIC_TEXT.MOBILE_NO_REQ_2" | translate }}</p>\n              </ion-item>\n        \n\n          <h6 no-margin margin-top>{{ "COMMON.STATIC_TEXT.ADDRESS" | translate }}</h6>\n          <ion-item no-padding>\n            <ion-input type="text" [(ngModel)]="userData.address" name="address" formControlName="address_line"></ion-input>\n          </ion-item>\n          <h6 no-margin margin-top>{{ "COMMON.STATIC_TEXT.CITY" | translate }}</h6>\n          <ion-item no-padding>\n            <ion-input type="text" [(ngModel)]="userData.city" name="city" formControlName="address_city" ></ion-input>\n          </ion-item>\n          <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.STATE" | translate }}</h6>\n          <ion-item no-padding class="itemCustom" style="margin-bottom:0 !important">\n            <ion-label>{{ "COMMON.STATIC_TEXT.SELECT_STATE" | translate }}</ion-label>\n              <ion-select  formControlName="address_state" [(ngModel)]="userData.state" name="state" >\n                <ion-option *ngFor="let states1 of stateList; " value="{{states1.value}}">{{states1.name}}</ion-option>\n              </ion-select>\n            </ion-item>\n            <small>{{ "COMMON.STATIC_TEXT.NOT_FROM_MALAYSIA" | translate }}</small>\n              \n              <ion-item *ngIf="address_state.hasError(\'required\') && address_state.touched">\n                  <p>{{ "COMMON.STATIC_TEXT.STATE_REQ" | translate }}</p>\n                </ion-item>\n            \n            <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.ZIP" | translate }}</h6>\n            <ion-item no-padding>\n                <ion-input type="number"  [(ngModel)]="userData.zipcode" name="zipcode"  formControlName="address_postalcode"></ion-input>\n              </ion-item>\n                <small>{{ "COMMON.STATIC_TEXT.ENTER_00000" | translate }}</small>\n                <ion-item *ngIf="address_postalcode.hasError(\'required\') && address_postalcode.touched">\n                  <p>*{{ "COMMON.STATIC_TEXT.ZIP_REQ" | translate }}</p>\n                </ion-item>\n              <ion-item *ngIf="address_postalcode.hasError(\'maxlength\') || address_postalcode.hasError(\'minlength\')">\n                    <p>*{{ "COMMON.STATIC_TEXT.ZIP_REQ_1" | translate }}</p>\n                  </ion-item>\n            <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.COUNTRY" | translate }}</h6>\n            <ion-item no-padding class="itemCustom">\n              <ion-label>{{ "COMMON.STATIC_TEXT.SELECT_COUNTRY" | translate }}</ion-label>\n                <ion-select  formControlName="address_country" [(ngModel)]="userData.country" name="country" >\n                  <ion-option *ngFor="let country1 of countryList" value="{{country1.value}}">{{country1.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item *ngIf="address_country.hasError(\'required\') && address_country.touched">\n                <p >*{{ "COMMON.STATIC_TEXT.SELECT_COUNTRY" | translate }}</p>\n              </ion-item>\n              <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.AGE" | translate }}</h6>\n            <ion-item no-padding class="itemCustom">\n              <ion-label>{{ "COMMON.STATIC_TEXT.SELECT_AGE" | translate }}</ion-label>\n                <ion-select  formControlName="age_group" [(ngModel)]="userData.age" name="age" >\n                    <ion-option *ngFor="let age1 of ageList" value="{{age1.value}}">{{age1.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item *ngIf="age_group.hasError(\'required\') && age_group.touched">\n                <p >*{{ "LOGIN_FULLINFO_PAGE.STATIC_TEXT.CONFIRM_AGE" | translate }}</p>\n              </ion-item>\n            \n            <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.GENDER" | translate }}</h6>\n            <ion-list radio-group  formControlName="gender" [(ngModel)]="userData.gender" name="gender" > \n              <ion-item>\n                  <ion-label>{{ "COMMON.STATIC_TEXT.MALE" | translate }}</ion-label>\n                  <ion-radio checked="false"  name="male" value="male"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>{{ "COMMON.STATIC_TEXT.FEMALE" | translate }}</ion-label>\n                    <ion-radio checked="false" name="female" value="female"></ion-radio>\n                </ion-item>\n                <ion-item *ngIf="gender.hasError(\'required\') && gender.touched">\n                    <p >*{{ "COMMON.STATIC_TEXT.GENDER_REQ" | translate }}</p>\n                  </ion-item>\n            </ion-list>\n        </ion-list>\n        <button ion-button block color="dark" [disabled]="!formgroup.valid">{{ "LOGIN_FULLINFO_PAGE.BUTTONS.NEXT" | translate }}</button>\n      </form>\n    </ion-card-content>\n  </ion-content>\n\n  <mymodal #terms title="Terms of VIP Shoppers Club" (closeClicked)="declineModal()">\n    <ion-grid>\n      <div *ngFor="let term of _termsList">\n        <article class="terms" *ngIf="term?.key == \'signupterms\'">\n            <p [innerHtml]="term?.datavalue | safehtml" padding-left padding-right no-margin></p>\n        </article>\n      </div>\n<section class="subCnt">\n      <ion-row margin-top>\n          <ion-col col-10>\n            <ion-label style="white-space:pre-line" style="text-transform:none !important;white-space: pre-line;"> {{ "LOGIN_FULLINFO_PAGE.STATIC_TEXT.THIRD_PARTIES" | translate }}</ion-label>\n          </ion-col>\n         <ion-col col-2 text-center>\n            <ion-checkbox item-right [(ngModel)]="subscribe" style="margin-top: 10px !important;"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n\n            <p style="margin-bottom:5px !important"> {{ "LOGIN_FULLINFO_PAGE.STATIC_TEXT.READ_UNDERSTOOD" | translate }} </p>\n\n          <ion-row>\n            <ion-col col-10>\n              <ion-label style="white-space:pre-line" (click)="gotoPage(\'TermsofUsePage\')"><u>{{ "COMMON.STATIC_TEXT.TERMS" | translate }}</u></ion-label>\n            </ion-col>\n           <ion-col col-2 text-center>\n              <ion-checkbox [(ngModel)]="isTermsSelected"  style="margin-top: 4px !important;" item-right></ion-checkbox>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-10>\n              <ion-label style="white-space:pre-line" (click)="gotoPage(\'PrivacyPolicyPage\')"><u>{{ "COMMON.STATIC_TEXT.PRIVACY" | translate }}</u></ion-label>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <ion-checkbox [(ngModel)]="isPrivacySelected" style="margin-top: 4px !important;" item-right></ion-checkbox>\n            </ion-col>\n          </ion-row>\n        </section>\n        <ion-row>\n            <ion-col col-6>\n                <button ion-button color="default;" (click)="declineModal()" clear>{{ "LOGIN_FULLINFO_PAGE.BUTTONS.DECLINE" | translate }}</button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button color="dark" [disabled]="!isTermsSelected || !isPrivacySelected" (click)="acceptTerms()">{{ "LOGIN_FULLINFO_PAGE.BUTTONS.ACCEPT" | translate }}</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</mymodal>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/login-full-info/login-full-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_userdata_userdata__["a" /* UserdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_10__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginFullInfoPage);
    return LoginFullInfoPage;
}());

//# sourceMappingURL=login-full-info.js.map

/***/ })

});
//# sourceMappingURL=14.js.map