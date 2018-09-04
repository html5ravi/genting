webpackJsonp([36],{

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialPromoPageModule", function() { return SpecialPromoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__special_promo__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stores_stores__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_vouchers_vouchers__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(881);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SpecialPromoPageModule = /** @class */ (function () {
    function SpecialPromoPageModule() {
    }
    SpecialPromoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__special_promo__["a" /* SpecialPromoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__special_promo__["a" /* SpecialPromoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_stores_stores__["a" /* StoresProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_vouchers_vouchers__["a" /* VouchersProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]]
        })
    ], SpecialPromoPageModule);
    return SpecialPromoPageModule;
}());

//# sourceMappingURL=special-promo.module.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loader_loader__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var StoresProvider = /** @class */ (function () {
    function StoresProvider(http, userdataProvider, events, platform, loaderProvider, httpClient) {
        var _this = this;
        this.http = http;
        this.userdataProvider = userdataProvider;
        this.events = events;
        this.platform = platform;
        this.loaderProvider = loaderProvider;
        this.httpClient = httpClient;
        this.storeList = null;
        this.beaconStoreList = [];
        this.storeCategoryList = null;
        this.aminitiesList = null;
        this.brandsList = null;
        this.events.subscribe('changedOutlet', function (isOutLetChanged) {
            if (isOutLetChanged) {
                _this.storeList = null;
                _this.storeCategoryList = null;
                _this.aminitiesList = null;
                _this.beaconStoreList = [];
            }
        });
        this.platform.pause.subscribe(function () {
            _this.beaconStoreList = [];
        });
    }
    //return home banners
    StoresProvider.prototype.getHomeBanners = function () {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        console.log(this.userdataProvider.selectedMall);
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["j" /* HOME_BANNERS */] + this.userdataProvider.selectedMall)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //return All stores  
    StoresProvider.prototype.getAllStores = function () {
        var _this = this;
        if (this.storeList != null) {
            return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].of(this.storeList);
        }
        else {
            var loader_1 = this.loaderProvider.presentLoadingCustom();
            loader_1.present();
            return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["A" /* STORES */] + __WEBPACK_IMPORTED_MODULE_3__config__["f" /* EN */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
                .do(function (res) { _this.storeList = res['data']; })
                .map(function (storeList) { return storeList['data']; })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
                .finally(function () { return _this.loaderProvider.dismissLoader(loader_1); });
        }
    };
    //returns generic Promotions  
    StoresProvider.prototype.getGenericPromotions = function () {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["r" /* PROMOTIONS */] + __WEBPACK_IMPORTED_MODULE_3__config__["f" /* EN */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //Get Stores Promotions API call
    StoresProvider.prototype.getStorePromotions = function (storename) {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["r" /* PROMOTIONS */] + __WEBPACK_IMPORTED_MODULE_4__url__["B" /* STORE_PROMOTIONS */] + storename + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //returns all special promotions
    StoresProvider.prototype.getAllSpecialPromotions = function () {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["b" /* ALL_SPECIAL_PROMOTIONS */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //returns special promotions
    StoresProvider.prototype.getSpecialPromotions = function (promoId) {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["x" /* SPECIAL_PROMOTIONS */] + promoId + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //returns store category list  
    StoresProvider.prototype.getStoreCatagoryList = function () {
        var _this = this;
        if (this.storeCategoryList != null) {
            return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].of(this.storeCategoryList);
        }
        else {
            var loader_2 = this.loaderProvider.presentLoadingCustom();
            loader_2.present();
            return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["y" /* STORECATAGORIES */] + __WEBPACK_IMPORTED_MODULE_3__config__["f" /* EN */])
                .do(function (result) { _this.storeCategoryList = result['data']; })
                .map(function (result) { return result['data']; })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
                .finally(function () { return _this.loaderProvider.dismissLoader(loader_2); });
        }
    };
    StoresProvider.prototype.getStoreNews = function () {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["z" /* STORENEWS */])
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    StoresProvider.prototype.getEventsDetails = function () {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["g" /* EVENTS */])
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //returns stores near to the beacon  
    StoresProvider.prototype.getBeaconStores = function (major, minor) {
        var _this = this;
        var attachToMinor = '0'; //In some case minor is 3 digits.If so add 0 at the begining;
        var minorModified;
        if (minor.toString().length == 3) {
            minorModified = attachToMinor.concat(minor.toString());
        }
        else
            minorModified = minor;
        var url = "" + __WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["d" /* BEACON_CONFIG */] + __WEBPACK_IMPORTED_MODULE_3__config__["f" /* EN */] + "&uuid=$eq:" + __WEBPACK_IMPORTED_MODULE_3__config__["c" /* BEACON_UUID */] + "&major=$eq:" + major + "&minor=$eq:" + minorModified + "&associatedmall=$eq:" + this.userdataProvider.selectMallId;
        return new Promise(function (resolve, reject) {
            if (_this.beaconStoreList.length >= 1) {
                var store = _this.beaconStoreList.find(function (beaconstore) { return beaconstore.major == major && beaconstore.minor == minorModified; });
                if (store) {
                    resolve(store);
                }
                else {
                    _this.httpClient.get(url).subscribe(function (res) {
                        if (res['data'].length >= 1) {
                            _this.beaconStoreList.push(res['data'][0]);
                            resolve(res['data'][0]);
                        }
                        else {
                            reject('null');
                        }
                    }, function (err) {
                        reject(err);
                    });
                }
            }
            else {
                _this.httpClient.get(url).subscribe(function (res) {
                    if (res['data'].length >= 1) {
                        _this.beaconStoreList.push(res['data'][0]);
                        resolve(res['data'][0]);
                    }
                    else {
                        reject('null');
                    }
                }, function (err) {
                    reject(err);
                });
            }
        });
    };
    //Returns a stores Promotions
    StoresProvider.prototype.getAllPromotions = function (vipoffer) {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["r" /* PROMOTIONS */] + __WEBPACK_IMPORTED_MODULE_3__config__["f" /* EN */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall + '&hasvipoffer=$eq:' + vipoffer)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    // getting About the Outlet Details //
    StoresProvider.prototype.getOutletDetails = function () {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["a" /* ABOUTOUTLET */])
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    StoresProvider.prototype.getAmenites = function () {
        var _this = this;
        if (this.aminitiesList != null) {
            return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].of(this.aminitiesList);
        }
        else {
            var loader_3 = this.loaderProvider.presentLoadingCustom();
            loader_3.present();
            return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["c" /* AMENITES */] + __WEBPACK_IMPORTED_MODULE_3__config__["f" /* EN */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
                .do(function (res) { return _this.aminitiesList = res['data']; })
                .map(function (res) { return res['data']; })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
                .finally(function () { return _this.loaderProvider.dismissLoader(loader_3); });
        }
    };
    StoresProvider.prototype.getBrands = function () {
        var _this = this;
        if (this.brandsList != null) {
            return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].of(this.brandsList);
        }
        else {
            var loader_4 = this.loaderProvider.presentLoadingCustom();
            loader_4.present();
            return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["k" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["e" /* BRANDS */])
                .do(function (res) { return _this.brandsList = res['data']; })
                .map(function (res) { return res['data']; })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
                .finally(function () { return _this.loaderProvider.dismissLoader(loader_4); });
        }
    };
    StoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__userdata_userdata__["a" /* UserdataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__userdata_userdata__["a" /* UserdataProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_loader_loader__["a" /* LoaderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_loader_loader__["a" /* LoaderProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object])
    ], StoresProvider);
    return StoresProvider;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=stores.js.map

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

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialPromoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vouchers_vouchers__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_exception_handler_exception_handler__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SpecialPromoPage = /** @class */ (function () {
    // private promotion:any = []
    function SpecialPromoPage(navCtrl, navParams, storesProvider, vouchersProvider, events, userdataProvider, barcodeScanner, alertProvider, excepProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storesProvider = storesProvider;
        this.vouchersProvider = vouchersProvider;
        this.events = events;
        this.userdataProvider = userdataProvider;
        this.barcodeScanner = barcodeScanner;
        this.alertProvider = alertProvider;
        this.excepProvider = excepProvider;
        this.promotion = [];
        this._redeemedVoucherList = [];
        this.isAlreadyRedeemed = false;
        this._redeemedText = "redeem offer";
        this.promoId = this.navParams.get('promoId');
        this.promotion = this.navParams.get('promotion');
        if (this.promoId)
            this.getSpecialPromo(this.promoId);
        this.events.subscribe('redeemlist', function (isDataAvailable) {
            if (isDataAvailable) {
                if (_this.promotion && _this.promotion.experiencesidforvipoffersonly)
                    _this.isVoucherRedeemed(_this.promotion.experiencesidforvipoffersonly);
            }
        });
    }
    SpecialPromoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userdataProvider.getAuthToken().then(function (data) {
            _this.auth_key = data;
            if (_this.auth_key) {
                _this._userEmail = _this.userdataProvider.getUserEmailId();
                _this.getRedeemedVouchers(_this._userEmail, _this.auth_key);
            }
        });
    };
    SpecialPromoPage.prototype.getSpecialPromo = function (promoId) {
        var _this = this;
        this.storesProvider.getSpecialPromotions(promoId).subscribe(function (promotion) {
            _this.promotion = promotion.data[0];
        });
    };
    SpecialPromoPage.prototype.goToLoginPage = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    SpecialPromoPage.prototype.isVoucherRedeemed = function (expId) {
        this.redeemedVoucher = this._redeemedVoucherList.filter(function (voucher) { return voucher.ExperienceId == expId; });
        if (this.redeemedVoucher.length > 0) {
            this.isAlreadyRedeemed = true;
            this._redeemedText = "View Redemption Summary";
        }
        else {
            this.isAlreadyRedeemed = false;
        }
    };
    SpecialPromoPage.prototype.getRedeemedVouchers = function (useremail, authKey) {
        var _this = this;
        this.vouchersProvider.getRedeemedVouchers(useremail, authKey).subscribe(function (res) {
            _this._redeemedVoucherList = res[0].customer_vouchers;
            _this.events.publish('redeemlist', true);
        });
    };
    // Issue Voucher using expId. success will call scanQrCode function  
    SpecialPromoPage.prototype.issueVoucher = function (expId) {
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
    SpecialPromoPage.prototype.redeemVoucher = function (couponcode) {
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
    //Scan QrCode to check whether customer redeeming voucher in the right store . if success then call redeemVoucher
    SpecialPromoPage.prototype.scanQrCode = function (expId) {
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
                if (barcodeData.text == _this.promotion.qrcodeidentifier)
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
    SpecialPromoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-special-promo',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/special-promo/special-promo.html"*/'\n  <header [canShowMenu]=true [showBackButton]=true></header>\n\n\n  <ion-content no-padding no-bounce>\n    <figure no-margin>\n        <img *ngIf="promotion?.bannerimage" [defaultImage]="\'assets/images/default-Img.png\'" [lazyLoad]="promotion?.bannerimage" />\n        <!-- <img *ngIf="!promotion?.bannerimage && promotion?.associatedstore[0]?.brandlogo" [src] ="promotion?.associatedstore[0]?.brandlogo"/>\n      <img *ngIf="!promotion?.bannerimage && !promotion?.associatedstore[0]?.brandlogo && promotion?.associatedstore[0]?.brandimage" [src] ="promotion?.associatedstore[0]?.brandimage"  />\n      <img *ngIf="!promotion?.bannerimage && !promotion?.associatedstore[0]?.brandlogo && !promotion?.associatedstore[0]?.brandimage" src="assets/images/defaultimg.png"  />-->\n       <p *ngIf="isAlreadyRedeemed">{{ "PROMOTION_BANNER_PAGE.STATIC_TEXT.REDEEMED" | translate }}</p>  \n    </figure>\n    <ion-card-content>\n      <h3 no-margin>{{promotion?.promotiontitle}}</h3>\n     <p no-margin [innerHTML]="promotion?.promotiondescription | safehtml"></p>\n      \n        <section *ngIf="promotion?.hasvipoffer">\n          <section *ngIf="auth_key">\n            <button margin-top margin-bottom ion-button block color="dark" (click)="scanQrCode(promotion?.experiencesidforvipoffersonly)">{{_redeemedText}}</button>\n          </section>\n          <section *ngIf="!auth_key">\n            <button margin-top margin-bottom ion-button block color="dark" (click)="goToLoginPage()">{{ "PROMOTION_BANNER_PAGE.BUTTONS.LOGIN_REDEEM" | translate }}</button>\n            <article>\n              <p no-margin>{{ "PROMOTION_BANNER_PAGE.STATIC_TEXT.VIP_MEMBER" | translate }}.</p>\n            </article>\n          </section>\n        </section>\n        <!-- <ng-template #nonVipOffer>\n            <section>\n                <article>\n                  <p no-margin>{{ "PROMOTION_BANNER_PAGE.STATIC_TEXT.REDEEM_OFFER" | translate }}.</p>\n                </article>\n              </section>\n        </ng-template> -->\n       <!-- <button ion-button block color="dark" margin-bottom margin-top><a href ="tel:{{promotion?.associatedstore[0]?.phone}}">Call the store  {{promotion?.associatedstore[0]?.phone}}</a></button> -->\n    </ion-card-content>\n  </ion-content>\n  \n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/special-promo/special-promo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__["a" /* StoresProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_vouchers_vouchers__["a" /* VouchersProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_userdata_userdata__["a" /* UserdataProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */]])
    ], SpecialPromoPage);
    return SpecialPromoPage;
}());

//# sourceMappingURL=special-promo.js.map

/***/ })

});
//# sourceMappingURL=36.js.map