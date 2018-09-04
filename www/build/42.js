webpackJsonp([42],{

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionBannerPageModule", function() { return PromotionBannerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotion_banner__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_vouchers_vouchers__ = __webpack_require__(880);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PromotionBannerPageModule = /** @class */ (function () {
    function PromotionBannerPageModule() {
    }
    PromotionBannerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__promotion_banner__["a" /* PromotionBannerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promotion_banner__["a" /* PromotionBannerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_5__providers_vouchers_vouchers__["a" /* VouchersProvider */]],
        })
    ], PromotionBannerPageModule);
    return PromotionBannerPageModule;
}());

//# sourceMappingURL=promotion-banner.module.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VouchersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VouchersProvider = /** @class */ (function () {
    function VouchersProvider(userdataProvider, loaderProvider, httpClient) {
        this.userdataProvider = userdataProvider;
        this.loaderProvider = loaderProvider;
        this.httpClient = httpClient;
        console.log('Hello VouchersProvider Provider');
        this.headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]();
    }
    //Issue Voucher
    VouchersProvider.prototype.issueVouchers = function (userEmail, expId, authKey) {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        var userData = new FormData();
        userData.append('brand_identifier', __WEBPACK_IMPORTED_MODULE_1__config__["d" /* BRAND_ID */]);
        userData.append('identifier_key', 'email');
        userData.append('identifier_value', userEmail);
        userData.append('email', userEmail);
        userData.append('experience_id', expId);
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* BASE_URL */] + __WEBPACK_IMPORTED_MODULE_2__url__["k" /* ISSUE_VOUCHER */], userData, { headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', authKey) })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //Redeem Experience Vouchers //
    VouchersProvider.prototype.redeemVouchers = function (userEmail, couponCode, authKey) {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        var userData = new FormData();
        userData.append('brand_identifier', __WEBPACK_IMPORTED_MODULE_1__config__["d" /* BRAND_ID */]);
        userData.append('identifier_key', 'email');
        userData.append('identifier_value', userEmail);
        userData.append('voucher_code', couponCode);
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* BASE_URL */] + __WEBPACK_IMPORTED_MODULE_2__url__["t" /* REDEEM_EXPERIENCES */], userData, { headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', authKey) })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //returns users redeemed vouchers
    VouchersProvider.prototype.getRedeemedVouchers = function (userEmail, authKey) {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* BASE_URL */] + __WEBPACK_IMPORTED_MODULE_2__url__["s" /* REDEEMED_VOUCHERS */] + userEmail + '&identifier_key=email' + '&brand_identifier=' + __WEBPACK_IMPORTED_MODULE_1__config__["d" /* BRAND_ID */], { headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', authKey) })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    VouchersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__userdata_userdata__["a" /* UserdataProvider */], __WEBPACK_IMPORTED_MODULE_4__loader_loader__["a" /* LoaderProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], VouchersProvider);
    return VouchersProvider;
}());

//# sourceMappingURL=vouchers.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeScanner; });
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
 * @name Barcode Scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 * ```typescript
 * import { BarcodeScanner } from '@ionic-native/barcode-scanner';
 *
 * constructor(private barcodeScanner: BarcodeScanner) { }
 *
 * ...
 *
 *
 * this.barcodeScanner.scan().then(barcodeData => {
 *  console.log('Barcode data', barcodeData);
 * }).catch(err => {
 * 	console.log('Error', err);
 * });
 * ```
 * @interfaces
 * BarcodeScannerOptions
 * BarcodeScanResult
 */
var BarcodeScanner = (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE'
        };
        return _this;
    }
    /**
     * Open the barcode scanner.
     * @param {BarcodeScannerOptions} [options] Optional options to pass to the scanner
     * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
     */
    BarcodeScanner.prototype.scan = function (options) {
        return;
    };
    /**
     * Encodes data into a barcode.
     * NOTE: not well supported on Android
     * @param {string} type Type of encoding
     * @param {any} data Data to encode
     * @returns {Promise<any>}
     */
    BarcodeScanner.prototype.encode = function (type, data) {
        return;
    };
    BarcodeScanner.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BarcodeScanner.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BarcodeScanner.prototype, "scan", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], BarcodeScanner.prototype, "encode", null);
    BarcodeScanner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'BarcodeScanner',
            plugin: 'phonegap-plugin-barcodescanner',
            pluginRef: 'cordova.plugins.barcodeScanner',
            repo: 'https://github.com/phonegap/phonegap-plugin-barcodescanner',
            platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'Windows']
        })
    ], BarcodeScanner);
    return BarcodeScanner;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionBannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vouchers_vouchers__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(881);
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









var PromotionBannerPage = /** @class */ (function () {
    function PromotionBannerPage(navCtrl, navParams, userdataProvider, vouchersProvider, alertProvider, excepProvider, barcodeScanner, events, analytics, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userdataProvider = userdataProvider;
        this.vouchersProvider = vouchersProvider;
        this.alertProvider = alertProvider;
        this.excepProvider = excepProvider;
        this.barcodeScanner = barcodeScanner;
        this.events = events;
        this.analytics = analytics;
        this.translate = translate;
        this._redeemedVoucherList = [];
        this.isAlreadyRedeemed = false;
        this._redeemedText = "redeem offer";
        this.promotion = this.navParams.get("promotion");
        this.events.subscribe('redeemlist', function (isDataAvailable) {
            if (isDataAvailable) {
                if (_this.promotion && _this.promotion.experiencesidforvipoffersonly)
                    _this.isVoucherRedeemed(_this.promotion.experiencesidforvipoffersonly);
            }
        });
        this.analytics.fa.logEvent('PromotionDetailsPage');
    }
    //get User auth_key//
    PromotionBannerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userdataProvider.getAuthToken().then(function (data) {
            _this.auth_key = data;
            if (_this.auth_key) {
                _this._userEmail = _this.userdataProvider.getUserEmailId();
                _this.getRedeemedVouchers(_this._userEmail, _this.auth_key);
            }
        });
    };
    //If user not logged In
    PromotionBannerPage.prototype.goToLoginPage = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    // Issue Voucher using expId. success will call scanQrCode function  
    PromotionBannerPage.prototype.issueVoucher = function (expId) {
        var _this = this;
        this.vouchersProvider.issueVouchers(this._userEmail, expId, this.auth_key).subscribe(function (res) {
            if (res[0].code == 200)
                _this.redeemVoucher(res[0].coupon_code);
            else {
                var toast = _this.alertProvider.presentToast(res[0].message);
                toast.present();
            }
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    PromotionBannerPage.prototype.isVoucherRedeemed = function (expId) {
        this.redeemedVoucher = this._redeemedVoucherList.filter(function (voucher) { return voucher.ExperienceId == expId; });
        if (this.redeemedVoucher.length > 0) {
            this.isAlreadyRedeemed = true;
            this._redeemedText = "View Redemption Summary";
        }
        else {
            this.isAlreadyRedeemed = false;
        }
    };
    //Scan QrCode to check whether customer redeeming voucher in the right store . if success then call redeemVoucher
    PromotionBannerPage.prototype.scanQrCode = function (expId) {
        var _this = this;
        if (this.isAlreadyRedeemed) {
            this.navCtrl.push('PromotionReedemPage', { voucherdata: this.redeemedVoucher[0], storedata: this.promotion, isalreadyredeemed: true });
        }
        else {
            var barcodeOptions = {
                resultDisplayDuration: 0,
                prompt: 'Please scan the QR Code of the store. Place the QR Code within the viewfinder.'
            };
            this.barcodeScanner.scan(barcodeOptions).then(function (barcodeData) {
                if (barcodeData.text == _this.promotion.associatedstore[0].qrcodeidentifier)
                    _this.issueVoucher(expId);
                else {
                    var toast = _this.alertProvider.presentToast('Sorry, you are at a wrong store');
                    toast.present();
                }
            }, function (err) {
                var toast = _this.alertProvider.presentToast('error in scanning qrcode');
                toast.present();
            });
        }
    };
    // redeem a issued voucher 
    PromotionBannerPage.prototype.redeemVoucher = function (couponcode) {
        var _this = this;
        this.vouchersProvider.redeemVouchers(this._userEmail, couponcode, this.auth_key).subscribe(function (redeemVoucher) {
            if (redeemVoucher[0].code == 200)
                _this.navCtrl.push('PromotionReedemPage', { voucherdata: redeemVoucher[0].voucher_info, storedata: _this.promotion, isalreadyredeemed: false });
            else {
                var toast = _this.alertProvider.presentToast(redeemVoucher[0].message);
                toast.present();
            }
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    PromotionBannerPage.prototype.getRedeemedVouchers = function (useremail, authKey) {
        var _this = this;
        this.vouchersProvider.getRedeemedVouchers(useremail, authKey).subscribe(function (res) {
            _this._redeemedVoucherList = res[0].customer_vouchers;
            _this.events.publish('redeemlist', true);
        });
    };
    PromotionBannerPage.prototype.viewReedem = function (code) {
        this._viewCode == this.promotion.associatedstore[0].qrcodeidentifier;
        this.issueVoucher(code);
    };
    PromotionBannerPage.prototype.gotoPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    PromotionBannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-promotion-banner',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/promotion-banner/promotion-banner.html"*/'\n  <!-- <header [canShowMenu]=true [showBackButton]=true></header> -->\n  <ion-header>\n    <ion-navbar>\n        <ion-row>\n                <ion-col col-2>\n                        <!-- <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon> -->\n                    </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="{{userdataProvider?.selectMallLogo}}" (click)="gotoPage(\'HomePage\')">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding no-bounce>\n  <figure no-margin>\n      <img *ngIf="promotion?.bannerimage" [defaultImage]="\'assets/images/default-Img.png\'" [lazyLoad]="promotion?.bannerimage" />\n      <img *ngIf="!promotion?.bannerimage && promotion?.associatedstore[0]?.brandlogo" [defaultImage]="\'assets/images/default-Img.png\'" [lazyLoad]="promotion?.associatedstore[0]?.brandlogo"/>\n    <img *ngIf="!promotion?.bannerimage && !promotion?.associatedstore[0]?.brandlogo && promotion?.associatedstore[0]?.brandimage" [defaultImage]="\'assets/images/default-Img.png\'" [lazyLoad]="promotion?.associatedstore[0]?.brandimage"/>\n    <img *ngIf="!promotion?.bannerimage && !promotion?.associatedstore[0]?.brandlogo && !promotion?.associatedstore[0]?.brandimage" src="assets/images/defaultimg.png"  />\n    <p *ngIf="isAlreadyRedeemed">{{ "PROMOTION_BANNER_PAGE.STATIC_TEXT.REDEEMED" | translate }}</p>\n  </figure>\n  <ion-card-content>\n    <h3 no-margin>{{promotion?.promotiontitle}}</h3>\n    <p no-margin [innerHTML]="promotion?.promotiondescription | safehtml"></p>\n    \n    <section *ngIf="promotion?.hasvipoffer; else nonVipOffer">\n        <section *ngIf="auth_key">\n          <button margin-top margin-bottom ion-button block color="dark" (click)="scanQrCode(promotion?.experiencesidforvipoffersonly)">{{_redeemedText}}</button>\n        </section>\n        <section *ngIf="!auth_key">\n          <button margin-top margin-bottom ion-button block color="dark" (click)="goToLoginPage()">{{ "PROMOTION_BANNER_PAGE.BUTTONS.LOGIN_REDEEM" | translate }}</button>\n          <article>\n            <p no-margin>{{ "PROMOTION_BANNER_PAGE.STATIC_TEXT.VIP_MEMBER" | translate }}.</p>\n          </article>\n        </section>\n      </section>\n      <ng-template #nonVipOffer>\n          <section>\n              <article>\n                <p no-margin>{{ "PROMOTION_BANNER_PAGE.STATIC_TEXT.REDEEM_OFFER" | translate }}.</p>\n              </article>\n            </section>\n      </ng-template>\n      <button ion-button block color="dark" margin-bottom margin-top><a href ="tel:{{promotion?.associatedstore[0]?.phone}}">Call the store  {{promotion?.associatedstore[0]?.phone}}</a></button>\n  </ion-card-content>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/promotion-banner/promotion-banner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__["a" /* UserdataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_vouchers_vouchers__["a" /* VouchersProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], PromotionBannerPage);
    return PromotionBannerPage;
}());

//# sourceMappingURL=promotion-banner.js.map

/***/ })

});
//# sourceMappingURL=42.js.map