webpackJsonp([16],{

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());

//# sourceMappingURL=contact-us.module.js.map

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

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validator_profile__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl, formBuilder, userdataProvider, authProvider, alertProvider, excepProvider, analytics, translate) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.userdataProvider = userdataProvider;
        this.authProvider = authProvider;
        this.alertProvider = alertProvider;
        this.excepProvider = excepProvider;
        this.analytics = analytics;
        this.translate = translate;
        this.userProfileData = {};
        this.contactForm = this.formBuilder.group({
            inquiry_type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__validator_profile__["a" /* noWhitespaceValidator */]])],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__validator_profile__["a" /* noWhitespaceValidator */]])],
        });
        this.inquiry_type = this.contactForm.controls['inquiry_type'];
        this.message = this.contactForm.controls['message'];
        this.analytics.fa.logEvent('ContactUsPage');
    }
    ContactUsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userdataProvider.getAuthToken().then(function (data) {
            _this._auth_token = data;
            if (data)
                _this.getProfileInfo();
        });
    };
    ContactUsPage.prototype.getProfileInfo = function () {
        this.userProfileData = {
            Name: this.userdataProvider.getFullName(),
            Email: this.userdataProvider.getUserEmailId(),
            Phone: this.userdataProvider.getUserMobileNo()
        };
    };
    ContactUsPage.prototype.contactusForm = function () {
        var _this = this;
        this.authProvider.ContactForm(this.userProfileData.Email, this.userProfileData.Phone || '', this.contactForm.value)
            .subscribe(function (res) {
            if (res[0].code == 200)
                _this.ticketOpenModal();
            else {
                var toast = _this.alertProvider.presentToast(res[0].message);
                toast.present();
            }
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    ContactUsPage.prototype.ticketOpenModal = function () {
        this.ContactModal.open();
    };
    ContactUsPage.prototype.closeTicketModal = function () {
        this.ContactModal.close();
        this.navCtrl.setRoot("HomePage");
    };
    ContactUsPage.prototype.goto = function (page) {
        this.navCtrl.setRoot(page);
    };
    ContactUsPage.prototype.gotoPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("contactsuccess"),
        __metadata("design:type", Object)
    ], ContactUsPage.prototype, "ContactModal", void 0);
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/contact-us/contact-us.html"*/'\n  <!-- <header [canShowMenu]=true [showBackButton]=true></header> -->\n\n  <ion-header>\n    <ion-navbar>\n        <ion-row>\n                <ion-col col-2>\n                        <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n                    </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="{{userdataProvider?.selectMallLogo}}" (click)="gotoPage(\'HomePage\')">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding no-bounce>\n  <figure no-margin class="fixedHeight">\n    <img src="assets/images/contactUs.jpg" />\n    <figcaption>\n        <h3><strong>{{ "CONTACT_US_PAGE.STATIC_TEXT.CONTACT" | translate }}</strong> {{ "CONTACT_US_PAGE.STATIC_TEXT.US" | translate }}.</h3>\n      </figcaption>\n  </figure>\n \n  <ion-card-content>\n    \n      <ion-list *ngIf="_auth_token">\n        <h6>*{{ "COMMON.STATIC_TEXT.NAME" | translate }}</h6>\n        <p>{{userProfileData?.Name}}</p>\n        <h6>*{{ "COMMON.STATIC_TEXT.EMAIL" | translate }}</h6>\n        <p>{{userProfileData?.Email}}</p>\n      <h6 *ngIf="userProfileData?.Phone">*{{ "COMMON.STATIC_TEXT.MOBILE_NO" | translate }}</h6>\n      <p *ngIf="userProfileData?.Phone">{{userProfileData?.Phone}}</p>\n      </ion-list>\n      \n      <form [formGroup]="contactForm" *ngIf="_auth_token" (ngSubmit)="contactusForm()">\n      <h6>*{{ "CONTACT_US_PAGE.STATIC_TEXT.HOW_HELP" | translate }}</h6>\n      <ion-item no-padding>\n        <ion-textarea style="height:100px;" formControlName="inquiry_type" name="inquiry_type" ></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf="inquiry_type.hasError(\'required\') && inquiry_type.touched">\n          <p>{{ "CONTACT_US_PAGE.STATIC_TEXT.POST_COMMENT" | translate }}</p>\n        </ion-item>\n        <ion-item *ngIf="inquiry_type.hasError(\'whitespace\')">\n          <p>{{ "CONTACT_US_PAGE.STATIC_TEXT.COMMENT_REQ" | translate }}</p>\n        </ion-item>\n      <h6>*{{ "CONTACT_US_PAGE.STATIC_TEXT.MESSAGE" | translate }}</h6>\n      <ion-item no-padding>\n        <ion-textarea style="height:100px;" formControlName="message" name="message"></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf="message.hasError(\'required\') && message.touched">\n          <p>{{ "CONTACT_US_PAGE.STATIC_TEXT.MESSAGE_REQ1" | translate }}</p>\n        </ion-item>\n        <ion-item *ngIf="message.hasError(\'whitespace\')">\n          <p>{{ "CONTACT_US_PAGE.STATIC_TEXT.MESSAGE_REQ2" | translate }}</p>\n        </ion-item>\n      <button ion-button block color="dark" [disabled]="!contactForm.valid" type="submit" margin-bottom margin-top>{{ "CONTACT_US_PAGE.STATIC_TEXT.SEND_MESSAGE" | translate }}</button>\n    </form>\n    <section *ngIf="!_auth_token">\n      <article>\n        <p>{{ "CONTACT_US_PAGE.STATIC_TEXT.LOGIN_MESSAGE" | translate }}</p>\n      </article>\n      <button class="ionBtn" ion-button block color="dark" (click)="goto(\'LoginPage\')">{{ "COMMON.BUTTONS.LOGIN" | translate }}</button>\n    </section>\n\n  </ion-card-content>\n</ion-content>\n\n<!-- Modal for Showing User Successfully Raising Ticket  -->\n\n<mymodal #contactsuccess>\n  <p text-center> {{ "MODALS.STATIC_TEXT.RECIEVED_REQUEST" | translate }}</p>\n  <ion-grid>\n      <ion-row>\n          <ion-col col-12>\n              <button ion-button  (click)="closeTicketModal()">{{ "MODALS.BUTTONS.OK" | translate }}</button>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</mymodal>'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/contact-us/contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__["a" /* UserdataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ })

});
//# sourceMappingURL=16.js.map