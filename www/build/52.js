webpackJsonp([52],{

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDetailsPageModule", function() { return AppDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_details__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(885);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppDetailsPageModule = /** @class */ (function () {
    function AppDetailsPageModule() {
    }
    AppDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_details__["a" /* AppDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__app_details__["a" /* AppDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */]]
        })
    ], AppDetailsPageModule);
    return AppDetailsPageModule;
}());

//# sourceMappingURL=app-details.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppVersion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name App Version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```typescript
 * import { AppVersion } from '@ionic-native/app-version';
 *
 * constructor(private appVersion: AppVersion) { }
 *
 * ...
 *
 *
 * this.appVersion.getAppName();
 * this.appVersion.getPackageName();
 * this.appVersion.getVersionCode();
 * this.appVersion.getVersionNumber();
 *
 * ```
 */
var AppVersion = (function (_super) {
    __extends(AppVersion, _super);
    function AppVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the name of the app
     * @returns {Promise<string>}
     */
    AppVersion.prototype.getAppName = function () { return; };
    /**
     * Returns the package name of the app
     * @returns {Promise<string>}
     */
    AppVersion.prototype.getPackageName = function () { return; };
    /**
     * Returns the build identifier of the app
     * @returns {Promise<string>}
     */
    AppVersion.prototype.getVersionCode = function () { return; };
    /**
     * Returns the version of the app
     * @returns {Promise<string>}
     */
    AppVersion.prototype.getVersionNumber = function () { return; };
    AppVersion.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    AppVersion.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppVersion.prototype, "getAppName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppVersion.prototype, "getPackageName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppVersion.prototype, "getVersionCode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppVersion.prototype, "getVersionNumber", null);
    AppVersion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'AppVersion',
            plugin: 'cordova-plugin-app-version',
            pluginRef: 'cordova.getAppVersion',
            repo: 'https://github.com/whiteoctober/cordova-plugin-app-version',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], AppVersion);
    return AppVersion;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppDetailsPage = /** @class */ (function () {
    function AppDetailsPage(navCtrl, appVersion, commonProvider, platform, analytics, excepProvider, translate, userdataProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appVersion = appVersion;
        this.commonProvider = commonProvider;
        this.platform = platform;
        this.analytics = analytics;
        this.excepProvider = excepProvider;
        this.translate = translate;
        this.userdataProvider = userdataProvider;
        if (this.platform.is('cordova'))
            this.appVersion.getVersionNumber().then(function (versionNo) {
                _this._appVersion = versionNo;
            });
        this.analytics.fa.logEvent('AppDetailsPage');
    }
    AppDetailsPage.prototype.ionViewWillEnter = function () {
        this.getAppDetails();
    };
    AppDetailsPage.prototype.navTo = function (page) {
        this.navCtrl.push(page, { hidebackbutton: true });
    };
    AppDetailsPage.prototype.getAppDetails = function () {
        var _this = this;
        this.commonProvider.getTermsAndConditions().subscribe(function (res) {
            _this._appDetails = res;
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    AppDetailsPage.prototype.gotoPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    AppDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-app-details',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/app-details/app-details.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-row>\n                <ion-col col-2>\n                        <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n                    </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="{{userdataProvider?.selectMallLogo}}" (click)="gotoPage(\'HomePage\')">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding no-bounce>\n  <figure no-margin class="fixedHeight">\n    <img src="assets/images/appDetails.jpg" />\n    <figcaption>\n        <h3><strong>{{"APP_DETAILS_PAGE.STATIC_TEXT.APP" | translate }}</strong> {{"APP_DETAILS_PAGE.STATIC_TEXT.DETAILS" | translate }}.</h3>\n      </figcaption>\n  </figure>\n  <ion-card-content>\n    <p>{{"APP_DETAILS_PAGE.STATIC_TEXT.VERSION" | translate }}: {{_appVersion}}</p>\n    <section *ngFor="let detail of _appDetails">\n      <article *ngIf="detail?.key==\'aboutapp\'">\n        <p [innerHtml]="detail?.datavalue | safehtml" ></p>\n      </article>\n    </section>\n    \n    <button ion-button block color="dark" margin-bottom (click)="navTo(\'AboutGentingSimonPage\')">{{"COMMON.STATIC_TEXT.ABOUT" | translate }} {{"GENTING" | translate }}</button>\n    <button ion-button block color="dark" margin-bottom (click)="navTo(\'TermsofUsePage\')">{{"COMMON.STATIC_TEXT.TERMS" | translate }}</button>\n    <button ion-button block color="dark" margin-bottom (click)="navTo(\'PrivacyPolicyPage\')">{{"COMMON.STATIC_TEXT.PRIVACY" | translate }}</button>\n\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/app-details/app-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_userdata_userdata__["a" /* UserdataProvider */]])
    ], AppDetailsPage);
    return AppDetailsPage;
}());

//# sourceMappingURL=app-details.js.map

/***/ })

});
//# sourceMappingURL=52.js.map