webpackJsonp([59],{

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.showModal = function () {
        this.verifyemail.open();
    };
    ForgotPasswordPage.prototype.closeModal = function () {
        this.verifyemail.close();
    };
    ForgotPasswordPage.prototype.gotoPage = function (page) {
        this.navCtrl.push(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emailVerify'),
        __metadata("design:type", Object)
    ], ForgotPasswordPage.prototype, "verifyemail", void 0);
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/forgot-password/forgot-password.html"*/'<ion-header>\n    <ion-navbar>\n      <figure no-margin>\n        <img src="assets/images/outerlogo.svg" />\n      </figure>\n    </ion-navbar>\n  </ion-header>\n  <!-- <header [canShowMenu]=false [showBackButton]=false></header> -->\n<ion-content padding>\n    <ion-card-header padding>\n        <h2>Forgot Password?</h2>\n        <p>Enter your email address below and we we\'ll sendyou a link to resetyour password.</p>\n        <form>\n            <ion-item no-padding>\n                <ion-input type="email" placeholder="EMAIL ADDRESS"></ion-input>\n            </ion-item>\n            <button ion-button block color="dark" (click)="showModal()" type="submit">reset password</button>\n    </form>\n    </ion-card-header>\n</ion-content>\n\n<mymodal #emailVerify>\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col col-12>\n                <p>We have sent an email to <strong>manju@manju.com</strong> to veryfy your address</p>\n                <ul>\n                    <li (click)="closeModal()">\n                        <span>close</span>\n                    </li>\n                    <li (click)="gotoPage(\'ResetPasswordPage\')">\n                        <span>check now</span>\n                    </li>\n                </ul>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</mymodal>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
    var _a, _b;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ })

});
//# sourceMappingURL=59.js.map