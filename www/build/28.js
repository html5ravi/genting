webpackJsonp([28],{

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

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stores_stores__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_martjack_shared_module__ = __webpack_require__(942);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_4__app_martjack_shared_module__["a" /* MartJackSharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_stores_stores__["a" /* StoresProvider */]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MartJackSharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_martjack_top_header_top_header__ = __webpack_require__(943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_martjack_bottom_menu_bottom_menu__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_martjack_brand_filter_brand_filter__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_martjack_brand_list_brand_list__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_martjack_item_list_item_list__ = __webpack_require__(947);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MartJackSharedModule = /** @class */ (function () {
    function MartJackSharedModule() {
    }
    MartJackSharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_martjack_top_header_top_header__["a" /* TopHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_martjack_bottom_menu_bottom_menu__["a" /* BottomMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_martjack_brand_filter_brand_filter__["a" /* BrandFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_martjack_brand_list_brand_list__["a" /* BrandListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_martjack_item_list_item_list__["a" /* ItemListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__components_martjack_top_header_top_header__["a" /* TopHeaderComponent */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__components_martjack_bottom_menu_bottom_menu__["a" /* BottomMenuComponent */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__components_martjack_brand_filter_brand_filter__["a" /* BrandFilterComponent */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__components_martjack_brand_list_brand_list__["a" /* BrandListComponent */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__components_martjack_item_list_item_list__["a" /* ItemListComponent */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__components_martjack_top_header_top_header__["a" /* TopHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_martjack_bottom_menu_bottom_menu__["a" /* BottomMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_martjack_brand_list_brand_list__["a" /* BrandListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_martjack_brand_filter_brand_filter__["a" /* BrandFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_martjack_item_list_item_list__["a" /* ItemListComponent */]
            ]
        })
    ], MartJackSharedModule);
    return MartJackSharedModule;
}());

//# sourceMappingURL=martjack-shared.module.js.map

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopHeaderComponent = /** @class */ (function () {
    function TopHeaderComponent() {
        console.log('Hello TopHeaderComponent Component');
        this.text = 'Hello World';
    }
    TopHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'top-header',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/top-header/top-header.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n            <ion-col col-2>\n                    \n            </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="assets/images/martjack/logo.png">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/top-header/top-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TopHeaderComponent);
    return TopHeaderComponent;
}());

//# sourceMappingURL=top-header.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomMenuComponent; });
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


var BottomMenuComponent = /** @class */ (function () {
    function BottomMenuComponent(navCtrl, navParams, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
    }
    BottomMenuComponent.prototype.goto = function (page) {
        this.navCtrl.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('pagename'),
        __metadata("design:type", String)
    ], BottomMenuComponent.prototype, "pageName", void 0);
    BottomMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bottom-menu',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/bottom-menu/bottom-menu.html"*/'<section class="bottomMenu">\n      <ul>\n            <li [ngClass]="{\'active\':pageName == \'HomePage\'}" (click)="goto(\'HomePage\')">\n                  <ion-icon name="home"></ion-icon>\n                  <span>home</span>\n            </li>\n            <li [ngClass]="{\'active\': pageName == \'ShopPage\'}" (click)="goto(\'ShopPage\')">\n                  <ion-icon name="pricetag"></ion-icon>\n                  <span>shop</span>\n            </li>\n            <li [ngClass]="{\'active\': pageName == \'SearchPage\'}" (click)="goto(\'SearchPage\')">\n                  <ion-icon name="search"></ion-icon>\n                  <span>search</span>\n            </li>\n            <li [ngClass]="{\'active\': pageName == \'MyBagPage\'}" (click)="goto(\'MyBagPage\')">\n                  <ion-icon name="cart"></ion-icon>\n                  <span>my bag</span>\n            </li>\n            <li [ngClass]="{\'active\': pageName == \'MyAccountPage\'}" (click)="goto(\'MyAccountPage\')">\n                  <ion-icon name="person"></ion-icon>\n                  <span>account</span>\n            </li>\n      </ul>\n</section>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/bottom-menu/bottom-menu.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
    ], BottomMenuComponent);
    return BottomMenuComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=bottom-menu.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the BrandFilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BrandFilterComponent = /** @class */ (function () {
    function BrandFilterComponent() {
        console.log('Hello BrandFilterComponent Component');
        this.text = 'Hello World';
    }
    BrandFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'brand-filter',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/brand-filter/brand-filter.html"*/'<ion-card no-margin padding>\n  <ion-grid no-padding>\n    <ion-row>\n      <!-- <ion-col col-1>\n        <ion-icon name="arrow-back"></ion-icon>\n      </ion-col> -->\n      <ion-col col-11>\n        <p>Adidas</p>\n      </ion-col>\n      <ion-col col-1>\n       <img src="assets/images/martjack/filter-ico.png" />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/brand-filter/brand-filter.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BrandFilterComponent);
    return BrandFilterComponent;
}());

//# sourceMappingURL=brand-filter.js.map

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrandListComponent = /** @class */ (function () {
    function BrandListComponent() {
        var _this = this;
        console.log("hello BrandListComponent");
        setTimeout(function () {
            console.log(_this.productDisplay, "+++++++++++++++++++++++++");
        }, 3000);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BrandListComponent.prototype, "productDisplay", void 0);
    BrandListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'brand-list',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/brand-list/brand-list.html"*/'\n<ion-card no-margin no-padding>\n  <figure>\n    <img src="http:{{ productDisplay?.MultipleImages[0].LargeImage }}" />\n    <!-- <article>\n        <input class="star" type="checkbox">\n    </article> -->\n  </figure>\n  <ion-card-content>\n    <h6>{{ productDisplay?.Brand }}</h6>\n    <p>{{ productDisplay?.Title }}</p>\n    <ion-row>\n      <ion-col col-12>\n        <del *ngIf="productDisplay?.MRP > productDisplay?.WebPrice">RM {{ productDisplay?.MRP }}</del> \n        <strong *ngIf="productDisplay?.MRP <= productDisplay?.WebPrice">RM {{ productDisplay?.MRP }}</strong>\n        <strong *ngIf="productDisplay?.MRP > productDisplay?.WebPrice">RM {{ productDisplay?.WebPrice }}</strong>\n        <b style="display: inline-block !important;margin-left: 5px;width: auto;" *ngIf="productDisplay?.MRP > productDisplay?.WebPrice">save {{ productDisplay?.Discount }}%</b>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/brand-list/brand-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BrandListComponent);
    return BrandListComponent;
}());

//# sourceMappingURL=brand-list.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemListComponent = /** @class */ (function () {
    function ItemListComponent() {
        console.log('Hello ItemListComponent Component');
    }
    ItemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'item-list',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/item-list/item-list.html"*/'<ion-grid class="bb">\n    <ion-row>\n      <ion-col col-4>\n        <figure no-margin>\n          <img src="assets/images/martjack/prd3.png" />\n        </figure>\n      </ion-col>\n      <ion-col col-8>\n        <h6>Brand</h6>\n        <h6>Product Name</h6>\n        <ion-grid no-padding>\n          <ion-row class="listData">\n            <ion-col col-10>\n              <ion-row>\n                <ion-col col-6>\n                  <span>Color:</span>\n                </ion-col>\n                <ion-col col-6>\n                  <strong>white</strong>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-6>\n                  <span>Size:</span>\n                </ion-col>\n                <ion-col col-6>\n                  <strong>xs</strong>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-6>\n                  <span>Quantity:</span>\n                </ion-col>\n                <ion-col col-6>\n                  <strong>1</strong>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-6>\n                  <span>Price:</span>\n                </ion-col>\n                <ion-col col-6>\n                  <strong>RM 185.00</strong>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid no-padding>\n          <ion-row class="listData">\n            <ion-col col-10>\n              <ion-row>\n                <ion-col col-6>\n                  <span>Product No:</span>\n                </ion-col>\n                <ion-col col-6>\n                  <strong>1184990</strong>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-6>\n                  <span>Murchant ID:</span>\n                </ion-col>\n                <ion-col col-6>\n                  <strong>123454</strong>\n                </ion-col>\n              </ion-row>\n              <button ion-button block color="dark" margin-top margin-bottom>find store</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/item-list/item-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ItemListComponent);
    return ItemListComponent;
}());

//# sourceMappingURL=item-list.js.map

/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, storeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storeProvider = storeProvider;
        this.myInput = null;
        this.storeslist = [];
        this.newStoreList = [];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        this.getStoresList();
    };
    SearchPage.prototype.onInput = function (ev) {
        if (this.storeslist.length > 0) {
            var val_1 = ev.target.value;
            if (val_1 && val_1.trim()) {
                this.newStoreList = this.storeslist.filter(function (item) {
                    return (item.storename.toLowerCase().indexOf(val_1.toLowerCase()) > -1);
                });
            }
            else {
                this.newStoreList = [];
            }
        }
    };
    SearchPage.prototype.getStoresList = function () {
        var _this = this;
        this.storeProvider.getAllStores().subscribe(function (res) {
            _this.storeslist = res;
        });
    };
    SearchPage.prototype.selectStore = function (store) {
        this.myInput = store.storename;
        this.newStoreList = [];
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/search/search.html"*/'<!-- Header Component-->\n<top-header></top-header>\n<!-- Main Content Goes Here-->\n<ion-content no-padding>\n    <ion-card-content padding>\n        <ion-searchbar no-padding\n        placeholder="Search by store name"\n        animated:true\n        [(ngModel)]="myInput"\n        [showCancelButton]="shouldShowCancel"\n        (ionInput)="onInput($event)"\n        (ionCancel)="onCancel($event)">\n        </ion-searchbar>\n      <ion-list *ngIf="newStoreList.length > 0" class="searchAutoComplete border">\n          <ion-item *ngFor="let store of newStoreList">\n            <p (click)="selectStore(store)">{{ store.storename }}</p>\n          </ion-item>\n        </ion-list> \n      </ion-card-content>\n  <bottom-menu [pagename]="\'SearchPage\'"></bottom-menu>\n</ion-content>'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__["a" /* StoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__["a" /* StoresProvider */]) === "function" && _c || Object])
    ], SearchPage);
    return SearchPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=28.js.map