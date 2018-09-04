webpackJsonp([3],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailLoginPageModule", function() { return EmailLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_login__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmailLoginPageModule = /** @class */ (function () {
    function EmailLoginPageModule() {
    }
    EmailLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_login__["a" /* EmailLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_login__["a" /* EmailLoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
        })
    ], EmailLoginPageModule);
    return EmailLoginPageModule;
}());

//# sourceMappingURL=email-login.module.js.map

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

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validator_emailValid__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator_profile__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EmailLoginPage = /** @class */ (function () {
    function EmailLoginPage(navParams, navCtrl, formBuilder, authProvider, menuController, excepProvider, analytics, translate) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.menuController = menuController;
        this.excepProvider = excepProvider;
        this.analytics = analytics;
        this.translate = translate;
        this._useremail = null;
        this.emailLoginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator_emailValid__["a" /* EMAIL_REGEXP */]), __WEBPACK_IMPORTED_MODULE_6__validator_profile__["a" /* noWhitespaceValidator */]])]
        });
        this.email = this.emailLoginForm.controls['email'];
        //get email from facebook
        this._useremail = this.navParams.get('useremail');
        this._social_user_id = this.navParams.get('social_user_id');
        this._social_channel = this.navParams.get('social_channel');
        this._isSocialChannelPresent = this.navParams.get('isSocialChannelPresent');
        this.analytics.fa.logEvent('EmailLoginPage');
    }
    EmailLoginPage.prototype.ionViewWillEnter = function () {
        this.menuController.swipeEnable(false);
        if (this.menuController.isOpen())
            this.menuController.close();
    };
    // verifying email function: on success call send Otp and redirect to otp page
    EmailLoginPage.prototype.verifyEmail = function () {
        var _this = this;
        this.authProvider.verifyEmail(this.emailLoginForm.value).subscribe(function (res) {
            console.log(res, "ressss");
            _this.authProvider.sendOTP(_this.emailLoginForm.value).subscribe(function (result) {
                if (result[0].code == 200) {
                    if (_this._social_user_id && _this._social_channel && _this._isSocialChannelPresent === false) {
                        _this.navCtrl.push("OtpPage", { email: _this.emailLoginForm.value.email, isregistered: res[0].code == 200 ? true : false, social_user_id: _this._social_user_id, social_channel: _this._social_channel, isSocialChannelPresent: _this._isSocialChannelPresent });
                    }
                    else
                        _this.navCtrl.push("OtpPage", { email: _this.emailLoginForm.value.email, isregistered: res[0].code == 200 ? true : false });
                }
            }, function (err) { return _this.excepProvider.excpHandler(err); });
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    EmailLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-email-login',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/email-login/email-login.html"*/'\n\n  <header [canShowMenu]=false [showBackButton]=true></header>\n\n<ion-content padding no-bounce has-bouncing="false">\n  <figure no-margin class="marginAdj">\n      <img src="assets/images/VIP-Lounge-1-Page.jpg" />\n    </figure>\n    <form [formGroup]="emailLoginForm" (ngSubmit)="verifyEmail()">\n      <ion-card-header no-padding padding-left padding-right>\n        <h3 no-margin class="bb">{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.VERIFY_EMAIL_ADD" | translate}}</h3>\n          <h6 no-margin margin-top>{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.EMAIL_ADD" | translate}}</h6>\n          <ion-item no-padding>\n            <ion-input type="email" [(ngModel)]="_useremail" name="_useremail" formControlName="email"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="email.hasError(\'required\') && email.touched" item-left>\n            <p text-left>{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.ENTER_EMAIL" | translate }}</p>\n          </ion-item>\n          <ion-item *ngIf="email.hasError(\'pattern\')" item-left>\n              <p>{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.ENTER_VALID_EMAIL" | translate }}</p>\n            </ion-item>\n      </ion-card-header>\n      <ion-card-content margin padding>\n          <p no-margin>{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.NEW_EXISTING_USER" | translate }}</p>\n      </ion-card-content>\n\n      <button ion-button block color="dark" [disabled]="!emailLoginForm.valid" type="submit">verify</button>\n    </form>\n  </ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/email-login/email-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], EmailLoginPage);
    return EmailLoginPage;
}());

//# sourceMappingURL=email-login.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMAIL_REGEXP; });
/* unused harmony export equalto */
//import { Validator } from '@angular/forms/src/directives/validators';
// export function validateEmail(c: FormControl) {
// export const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/;
var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// export const MOBILE_REGEXP = '^\d{4}-\d{3}-\d{4}$';
// return EMAIL_REGEXP.test(c.value) ? null : {
// validateEmail: {
// valid: false
// }
// };
// }
function equalto(field_name) {
    return function (control) {
        var input = control.value;
        var isValid = control.root.value[field_name] == input;
        if (!isValid)
            return { 'equalTo': { isValid: isValid } };
        else
            return null;
    };
}
//# sourceMappingURL=emailValid.js.map

/***/ })

});
//# sourceMappingURL=3.js.map