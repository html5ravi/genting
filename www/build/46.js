webpackJsonp([46],{

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionReedemPageModule", function() { return PromotionReedemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotion_reedem__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_to_local_time_to_local_time__ = __webpack_require__(918);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PromotionReedemPageModule = /** @class */ (function () {
    function PromotionReedemPageModule() {
    }
    PromotionReedemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__promotion_reedem__["a" /* PromotionReedemPage */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_to_local_time_to_local_time__["a" /* ToLocalTimePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promotion_reedem__["a" /* PromotionReedemPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
        })
    ], PromotionReedemPageModule);
    return PromotionReedemPageModule;
}());

//# sourceMappingURL=promotion-reedem.module.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionReedemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PromotionReedemPage = /** @class */ (function () {
    function PromotionReedemPage(navCtrl, navParams, userdataProvider, analytics, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userdataProvider = userdataProvider;
        this.analytics = analytics;
        this.translate = translate;
        this.voucherData = this.navParams.get('voucherdata');
        this.storeData = this.navParams.get('storedata');
        this.isAlreadyRedeemed = this.navParams.get('isalreadyredeemed');
        if (this.voucherData.ActivatedTime)
            var voucherDate = this.voucherData.ActivatedTime;
        else
            voucherDate = this.voucherData.AddedDate;
        var currentDate = __WEBPACK_IMPORTED_MODULE_5_moment___default()().format('YYYY-MM-DD');
        var voucherMomentDate = __WEBPACK_IMPORTED_MODULE_5_moment___default()(voucherDate);
        this.isRedeemedToday = voucherMomentDate.isSame(currentDate, 'day') ? true : false;
        this.analytics.fa.logEvent('VoucherRedeemedInfoPage');
    }
    PromotionReedemPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    PromotionReedemPage.prototype.gotoPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    PromotionReedemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-promotion-reedem',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/promotion-reedem/promotion-reedem.html"*/'\n  <!-- <header [canShowMenu]=true [showBackButton]=true></header> -->\n  <ion-header>\n    <ion-navbar>\n        <ion-row>\n                <ion-col col-2>\n                        <!-- <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon> -->\n                    </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="{{userdataProvider?.selectMallLogo}}" (click)="gotoPage(\'HomePage\')">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding no-bounce>\n  <h3>{{storeData?.promotiontitle}}</h3>\n  <p [innerHtml]="storeData?.promotiondescription | safehtml"></p>\n   <strong class="bar"></strong>\n   <h3 text-center>{{"PROMOTION_REDEEM_PAGE.STATIC_TEXT.OFFER_CODE" | translate }}</h3>\n\n   <p>{{ "PROMOTION_REDEEM_PAGE.STATIC_TEXT.SHOW_OFFER_CODE" | translate }}</p>\n  <article >\n    \n    <h2 color="isAlreadyRedeemed?red:dark">{{voucherData?.VoucherCode}}</h2>\n  </article>\n  \n  <strong class="bar"></strong>\n  <h6>{{ "COMMON.STATIC_TEXT.NAME" | translate }}:</h6>\n  <span>{{userdataProvider.getFullName()}}</span>\n  <h6>{{ "COMMON.STATIC_TEXT.MOBILE_NO" | translate }}:</h6>\n  <span>{{userdataProvider.getUserMobileNo()}}</span>\n  <h6>{{ "PROMOTION_REDEEM_PAGE.STATIC_TEXT.ISSUE_DATE" | translate }}:</h6>\n  <span *ngIf="voucherData?.ActivatedTime" [ngClass]="!isRedeemedToday ? \'red\' : \'\' ">{{voucherData?.ActivatedTime | toLocalTime }}</span>\n  <span *ngIf="!voucherData?.ActivatedTime" [ngClass]="!isRedeemedToday ? \'red\' : \'\' ">{{ voucherData?.AddedDate }}</span>\n\n  <button ion-button block color="dark" class="closeBtn"(click)="close()">\n    {{ "PROMOTION_REDEEM_PAGE.BUTTONS.CLOSE" | translate }}</button>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/promotion-reedem/promotion-reedem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__["a" /* UserdataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], PromotionReedemPage);
    return PromotionReedemPage;
}());

//# sourceMappingURL=promotion-reedem.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToLocalTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ToLocalTimePipe = /** @class */ (function () {
    function ToLocalTimePipe() {
    }
    ToLocalTimePipe.prototype.transform = function (value) {
        var gmtDateTime = __WEBPACK_IMPORTED_MODULE_1_moment___default.a.utc(value, "YYYY-MM-DD HH:mm:ss");
        var local = gmtDateTime.local().format('YYYY-MM-DD h:mm:ss A');
        return local;
    };
    ToLocalTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'toLocalTime',
        })
    ], ToLocalTimePipe);
    return ToLocalTimePipe;
}());

//# sourceMappingURL=to-local-time.js.map

/***/ })

});
//# sourceMappingURL=46.js.map