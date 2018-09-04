webpackJsonp([47],{

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OtpPageModule = /** @class */ (function () {
    function OtpPageModule() {
    }
    OtpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__otp__["a" /* OtpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__otp__["a" /* OtpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
        })
    ], OtpPageModule);
    return OtpPageModule;
}());

//# sourceMappingURL=otp.module.js.map

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

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validator_profile__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams, alertProvider, authProvider, commonProvider, excepProvider, userdataProvider, menuController, formBuilder, analytics, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertProvider = alertProvider;
        this.authProvider = authProvider;
        this.commonProvider = commonProvider;
        this.excepProvider = excepProvider;
        this.userdataProvider = userdataProvider;
        this.menuController = menuController;
        this.formBuilder = formBuilder;
        this.analytics = analytics;
        this.translate = translate;
        this._OTPForm = formBuilder.group({
            _otp: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_8__validator_profile__["a" /* noWhitespaceValidator */]])]
        });
        this._otp = this._OTPForm.controls['_otp'];
        this._email = this.navParams.get('email');
        this._isRegistered = this.navParams.get('isregistered');
        this._social_user_id = this.navParams.get('social_user_id');
        this._social_channel = this.navParams.get('social_channel');
        this._isSocialChannelPresent = this.navParams.get('isSocialChannelPresent');
        this._loginButton = this._isRegistered ? 'Login' : 'Join Now';
        this.analytics.fa.logEvent('OtpPage');
    }
    OtpPage.prototype.ionViewWillEnter = function () {
        this.menuController.swipeEnable(false);
        if (this.menuController.isOpen())
            this.menuController.close();
    };
    //validate the otp and then check whether the user is registered or not
    OtpPage.prototype.validateOtp = function () {
        var _this = this;
        this.authProvider.verifyOtp(this._email, this._OTPForm.value).subscribe(function (res) {
            if (res[0].code == 200) {
                if (_this._isRegistered && res[0].customer_data && !_this._social_user_id && !_this._social_channel && !_this._isSocialChannelPresent) {
                    _this.commonProvider.setUserData(res[0].auth_key, res);
                    if (_this.commonProvider._noOfMalls == 1) {
                        setTimeout(function () {
                            _this.navCtrl.setRoot('Homepage');
                        }, 500);
                    }
                    else if (_this.commonProvider._noOfMalls > 1) {
                        setTimeout(function () {
                            _this.navCtrl.setRoot('SelectOutletPage');
                        }, 500);
                    }
                }
                else if (!_this._isRegistered && !_this._social_user_id && !_this._social_channel && !_this._isSocialChannelPresent) {
                    _this.navCtrl.push('LoginFullInfoPage', { email: _this._email, tempAuthToken: res[0].auth_key });
                }
                else if (_this._isRegistered && res[0].customer_data && _this._social_user_id && _this._social_channel && _this._isSocialChannelPresent === false) {
                    _this.userdataProvider.setUser(res[0].customer_data);
                    _this.navCtrl.push('LoginFullInfoPage', { email: _this._email, tempAuthToken: res[0].auth_key, social_user_id: _this._social_user_id, social_channel: _this._social_channel, isSocialChannelPresent: _this._isSocialChannelPresent, customerdata: res[0].customer_data.customer[0], isRegistered: _this._isRegistered });
                }
                else if (!_this._isRegistered && _this._social_user_id && _this._social_channel && _this._isSocialChannelPresent === false) {
                    _this.navCtrl.push('LoginFullInfoPage', { email: _this._email, tempAuthToken: res[0].auth_key, social_user_id: _this._social_user_id, social_channel: _this._social_channel, isSocialChannelPresent: _this._isSocialChannelPresent });
                }
            }
            else {
                var toast = _this.alertProvider.presentToast(res[0].message);
                toast.present();
            }
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    OtpPage.prototype.close = function () {
        this.modalTerm.close();
    };
    OtpPage.prototype.resendOtp = function () {
        var _this = this;
        this.authProvider.sendOTP({ email: this._email }).subscribe(function (result) {
            if (result[0].code == 200) {
                var toast = _this.alertProvider.presentToast(result[0].message);
                toast.present();
            }
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('terms'),
        __metadata("design:type", Object)
    ], OtpPage.prototype, "modalTerm", void 0);
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-otp',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/otp/otp.html"*/'\n<!-- <ion-header>\n    <ion-navbar>\n      <figure no-margin>\n        <img src="assets/images/outerlogo.svg" />\n      </figure>\n    </ion-navbar>\n  </ion-header> -->\n  <header [canShowMenu]=false [showBackButton]=true></header>\n\n\n\n<ion-content padding no-bounce>\n    <figure no-margin class="marginAdj">\n        <img src="assets/images/VIP-Lounge-1-Page.jpg" />\n      </figure>\n    <ion-card-content no-padding padding-left padding-right>\n        <form [formGroup]= "_OTPForm" (ngSubmit)="validateOtp()">\n      <h3 no-margin class="bb">{{ "OTP_PAGE.STATIC_TEXT.EMAIL_CONFIRM" | translate }}</h3>\n      <p>{{ "OTP_PAGE.STATIC_TEXT.EMAIL_SENT_1" | translate }}<strong> {{_email}} </strong> {{ "OTP_PAGE.STATIC_TEXT.EMAIL_SENT_2" | translate }}</p>\n         \n          <h6 margin-top>{{ "OTP_PAGE.STATIC_TEXT.OTP" | translate }}</h6>\n            <ion-item no-padding>\n                <ion-input type="number" formControlName="_otp" ></ion-input>\n            </ion-item>\n            <p text-uppercase text-center (click)="resendOtp()" >{{ "OTP_PAGE.STATIC_TEXT.OTP_RECEIVED" | translate }}<a href="javascript:;" style="color:#007aff;text-decoration:none;"> {{ "OTP_PAGE.STATIC_TEXT.RESEND" | translate }}</a></p>\n            <ion-item *ngIf="_otp.hasError(\'required\') && _otp.touched">\n                <p>{{ "OTP_PAGE.STATIC_TEXT.OTP_REQ" | translate }}</p>\n            </ion-item>\n            <ion-item *ngIf="_otp.hasError(\'maxlength\') || _otp.hasError(\'minlength\')">\n                <p>{{ "OTP_PAGE.STATIC_TEXT.OTP_VALID" | translate }}</p>\n            </ion-item>\n            <ion-item *ngIf="_otp.hasError(\'whitespace\') && _otp.touched">\n                    <p>{{ "OTP_PAGE.STATIC_TEXT.OTP_VALID" | translate }}</p>\n            </ion-item>\n          <button ion-button color="dark" [disabled]=!_OTPForm.valid type="submit" class="joinBtn">{{_loginButton}}</button>\n        </form>\n    </ion-card-content>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__["a" /* UserdataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ })

});
//# sourceMappingURL=47.js.map