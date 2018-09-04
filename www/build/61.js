webpackJsonp([61],{

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutGentingSimonPageModule", function() { return AboutGentingSimonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_genting_simon__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutGentingSimonPageModule = /** @class */ (function () {
    function AboutGentingSimonPageModule() {
    }
    AboutGentingSimonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_genting_simon__["a" /* AboutGentingSimonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_genting_simon__["a" /* AboutGentingSimonPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
        })
    ], AboutGentingSimonPageModule);
    return AboutGentingSimonPageModule;
}());

//# sourceMappingURL=about-genting-simon.module.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutGentingSimonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutGentingSimonPage = /** @class */ (function () {
    function AboutGentingSimonPage(navCtrl, userdataProvider, commonProvider, analytics, excepProvider, translate, navParams) {
        this.navCtrl = navCtrl;
        this.userdataProvider = userdataProvider;
        this.commonProvider = commonProvider;
        this.analytics = analytics;
        this.excepProvider = excepProvider;
        this.translate = translate;
        this.navParams = navParams;
        this.faqs = [];
        this.hideBackButton = false;
        this.analytics.fa.logEvent('AboutGentingSimonPage');
        this.hideBackButton = this.navParams.get('hidebackbutton');
    }
    AboutGentingSimonPage.prototype.ionViewDidEnter = function () {
        this.termsAndCondition();
    };
    //function for calling terms and conditions Api //
    AboutGentingSimonPage.prototype.termsAndCondition = function () {
        var _this = this;
        this.commonProvider.getTermsAndConditions().subscribe(function (res) {
            _this.faqs = res.slice();
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    AboutGentingSimonPage.prototype.gotoPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    AboutGentingSimonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-genting-simon',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/about-genting-simon/about-genting-simon.html"*/'\n  <!-- <header [canShowMenu]=true [showBackButton]=true></header> -->\n  <ion-header>\n    <ion-navbar>\n        <ion-row>\n                <ion-col col-2>\n                        <ion-icon *ngIf="!hideBackButton" name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n                    </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="{{userdataProvider?.selectMallLogo}}" (click)="gotoPage(\'HomePage\')">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n  <ion-content no-padding no-bounce>\n      <figure no-margin class="fixedHeight">\n        <img src="assets/images/aboutGentingsimon.jpg" />\n        <figcaption>\n            <h3><strong>{{ "COMMON.STATIC_TEXT.ABOUT" | translate }}</strong>{{ "GENTING" | translate }}.</h3>\n          </figcaption>\n      </figure>\n      \n      <ion-card-content>\n        <article *ngFor="let faq of faqs">\n          <section *ngIf="faq?.key==\'aboutsimon\'">\n              <p [innerHtml]="faq?.datavalue | safehtml"></p>\n          </section>\n        </article>\n    </ion-card-content>\n    </ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/about-genting-simon/about-genting-simon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__["a" /* UserdataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AboutGentingSimonPage);
    return AboutGentingSimonPage;
}());

//# sourceMappingURL=about-genting-simon.js.map

/***/ })

});
//# sourceMappingURL=61.js.map