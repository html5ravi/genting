webpackJsonp([54],{

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOutletPageModule", function() { return SelectOutletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_outlet__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SelectOutletPageModule = /** @class */ (function () {
    function SelectOutletPageModule() {
    }
    SelectOutletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_outlet__["a" /* SelectOutletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_outlet__["a" /* SelectOutletPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]]
        })
    ], SelectOutletPageModule);
    return SelectOutletPageModule;
}());

//# sourceMappingURL=select-outlet.module.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectOutletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SelectOutletPage = /** @class */ (function () {
    function SelectOutletPage(navCtrl, commonProvider, userdataProvider, AuthProvider, menuController, events, analytics, translate, alertProvider) {
        this.navCtrl = navCtrl;
        this.commonProvider = commonProvider;
        this.userdataProvider = userdataProvider;
        this.AuthProvider = AuthProvider;
        this.menuController = menuController;
        this.events = events;
        this.analytics = analytics;
        this.translate = translate;
        this.alertProvider = alertProvider;
        this.events.publish('choosemall', true);
        this.analytics.fa.logEvent('SelectOutletPage');
    }
    SelectOutletPage.prototype.ionViewWillEnter = function () {
        this.chooseMall();
        this.menuController.swipeEnable(false);
        if (this.menuController.isOpen())
            this.menuController.close();
    };
    // chooseMall() {
    //   this._chooseMall = this.commonProvider._chooseMall;
    // }
    SelectOutletPage.prototype.selectMall = function (mallData) {
        var _this = this;
        this.commonProvider.selectMall(mallData);
        setTimeout(function () {
            _this.navCtrl.setRoot('HomePage');
        }, 500);
    };
    SelectOutletPage.prototype.chooseMall = function () {
        var _this = this;
        this.commonProvider.chooseMalls().subscribe(function (res) {
            _this._chooseMall = res['data'].filter(function (mall) { return mall.ismallactive == true; });
        }, function (err) {
            var toast = _this.alertProvider.presentToast('something went wrong');
            toast.present();
        });
    };
    SelectOutletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-outlet',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/select-outlet/select-outlet.html"*/'<ion-header>\n    <ion-navbar>\n      <figure no-margin>\n        <img src="assets/images/outerlogo.svg" />\n      </figure>\n    </ion-navbar>\n  </ion-header>\n  <!-- <header [canShowMenu]=false [showBackButton]=false></header> -->\n\n\n\n<ion-content no-padding no-bounce>\n  <article padding class="head">\n    <h2>{{ "SELECT_OUTLET_PAGE.STATIC_TEXT.CHOOSE" | translate }} <span>{{ "SELECT_OUTLET_PAGE.STATIC_TEXT.CENTER" | translate }}</span></h2>\n  </article>\n  <ion-card-content no-padding margin-bottom *ngFor="let mall of _chooseMall; let i=index;" (click)="selectMall(mall)" >\n    <img  [src]="mall?.featureimage" />\n    <article>\n      <h3>{{mall?.mallname}}</h3>\n    </article>\n  </ion-card-content>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/select-outlet/select-outlet.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_common_common__["a" /* CommonProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__["a" /* UserdataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__["a" /* UserdataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__["a" /* AnalyticsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__["a" /* AnalyticsProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _j || Object])
    ], SelectOutletPage);
    return SelectOutletPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=select-outlet.js.map

/***/ })

});
//# sourceMappingURL=54.js.map