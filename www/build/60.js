webpackJsonp([60],{

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
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


var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.showModal = function () {
        this.verifypassword.open();
    };
    ChangePasswordPage.prototype.closeModal = function () {
        this.verifypassword.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passwordVerify'),
        __metadata("design:type", Object)
    ], ChangePasswordPage.prototype, "verifypassword", void 0);
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/change-password/change-password.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n          <ion-col col-2>\n              <!-- <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon> -->\n          </ion-col>\n          <ion-col col-8>\n              <figure no-margin>\n                  <strong>My Account</strong>\n              </figure>\n          </ion-col>\n          <ion-col col-2>\n              <button ion-button icon-only menuToggle>\n              <ion-icon tappable name="menu"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content no-padding>\n    <ion-card>\n      <ion-card-header padding>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-8>\n              <!-- <ion-icon name="arrow-back"></ion-icon> -->\n              <strong>change password</strong>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n      <ion-card-content padding>\n          <form>\n            <ion-list margin-bottom>\n              <ion-item>\n                <ion-input type="password" placeholder="CURRENT PASSWORD"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-input type="password" placeholder="NEW PASSWORD"></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button block color="dark" (click)="showModal()" margin-top>reset password</button>\n          </form>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n\n<mymodal #passwordVerify>\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col col-12>\n                <p>Your password has been  updated successfully</p>\n                <ul>\n                    <li (click)="closeModal()">\n                        <span>ok</span>\n                    </li>\n                </ul>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</mymodal>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object])
    ], ChangePasswordPage);
    return ChangePasswordPage;
    var _a, _b;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=60.js.map