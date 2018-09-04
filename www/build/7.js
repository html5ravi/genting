webpackJsonp([7],{

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutOutletPageModule", function() { return AboutOutletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_outlet__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_stores_stores__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AboutOutletPageModule = /** @class */ (function () {
    function AboutOutletPageModule() {
    }
    AboutOutletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_outlet__["a" /* AboutOutletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_outlet__["a" /* AboutOutletPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_5__providers_stores_stores__["a" /* StoresProvider */]]
        })
    ], AboutOutletPageModule);
    return AboutOutletPageModule;
}());

//# sourceMappingURL=about-outlet.module.js.map

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
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["j" /* HOME_BANNERS */] + this.userdataProvider.selectedMall)
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
            return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["A" /* STORES */] + __WEBPACK_IMPORTED_MODULE_3__config__["d" /* EN */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
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
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["r" /* PROMOTIONS */] + __WEBPACK_IMPORTED_MODULE_3__config__["d" /* EN */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //Get Stores Promotions API call
    StoresProvider.prototype.getStorePromotions = function (storename) {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["r" /* PROMOTIONS */] + __WEBPACK_IMPORTED_MODULE_4__url__["B" /* STORE_PROMOTIONS */] + storename + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //returns all special promotions
    StoresProvider.prototype.getAllSpecialPromotions = function () {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["b" /* ALL_SPECIAL_PROMOTIONS */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    //returns special promotions
    StoresProvider.prototype.getSpecialPromotions = function (promoId) {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["x" /* SPECIAL_PROMOTIONS */] + promoId + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
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
            return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["y" /* STORECATAGORIES */] + __WEBPACK_IMPORTED_MODULE_3__config__["d" /* EN */])
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
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["z" /* STORENEWS */])
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    StoresProvider.prototype.getEventsDetails = function () {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["g" /* EVENTS */])
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
        var url = "" + __WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["d" /* BEACON_CONFIG */] + __WEBPACK_IMPORTED_MODULE_3__config__["d" /* EN */] + "&uuid=$eq:" + __WEBPACK_IMPORTED_MODULE_3__config__["b" /* BEACON_UUID */] + "&major=$eq:" + major + "&minor=$eq:" + minorModified + "&associatedmall=$eq:" + this.userdataProvider.selectMallId;
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
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["r" /* PROMOTIONS */] + __WEBPACK_IMPORTED_MODULE_3__config__["d" /* EN */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall + '&hasvipoffer=$eq:' + vipoffer)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
            .finally(function () { return _this.loaderProvider.dismissLoader(loader); });
    };
    // getting About the Outlet Details //
    StoresProvider.prototype.getOutletDetails = function () {
        var _this = this;
        var loader = this.loaderProvider.presentLoadingCustom();
        loader.present();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["a" /* ABOUTOUTLET */])
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
            return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["c" /* AMENITES */] + __WEBPACK_IMPORTED_MODULE_3__config__["d" /* EN */] + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
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
            return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* STTARTER_BASE_URL */] + __WEBPACK_IMPORTED_MODULE_4__url__["e" /* BRANDS */])
                .do(function (res) { return _this.brandsList = res['data']; })
                .map(function (res) { return res['data']; })
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_12_rxjs_Observable__["Observable"].throw(err); })
                .finally(function () { return _this.loaderProvider.dismissLoader(loader_4); });
        }
    };
    StoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__userdata_userdata__["a" /* UserdataProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_loader_loader__["a" /* LoaderProvider */], __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */]])
    ], StoresProvider);
    return StoresProvider;
}());

//# sourceMappingURL=stores.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchNavigator; });
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
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```typescript
 * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
 *
 * constructor(private launchNavigator: LaunchNavigator) { }
 *
 * ...
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * };
 *
 * this.launchNavigator.navigate('Toronto, ON', options)
 *   .then(
 *     success => console.log('Launched navigator'),
 *     error => console.log('Error launching navigator', error)
 *   );
 * ```
 * @interfaces
 * LaunchNavigatorOptions
 * PromptsOptions
 * RememberChoiceOptions
 * AppSelectionOptions
 * UserChoice
 * UserPrompted
 * AppSelection
 */
var LaunchNavigator = (function (_super) {
    __extends(LaunchNavigator, _super);
    function LaunchNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.APP = {
            USER_SELECT: 'user_select',
            APPLE_MAPS: 'apple_maps',
            GOOGLE_MAPS: 'google_maps',
            WAZE: 'waze',
            CITYMAPPER: 'citymapper',
            NAVIGON: 'navigon',
            TRANSIT_APP: 'transit_app',
            YANDEX: 'yandex',
            UBER: 'uber',
            TOMTOM: 'tomtom',
            BING_MAPS: 'bing_maps',
            SYGIC: 'sygic',
            HERE_MAPS: 'here_maps',
            MOOVIT: 'moovit'
        };
        _this.TRANSPORT_MODE = {
            DRIVING: 'driving',
            WALKING: 'walking',
            BICYCLING: 'bicycling',
            TRANSIT: 'transit'
        };
        return _this;
    }
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    LaunchNavigator.prototype.navigate = function (destination, options) { return; };
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     * @returns {Promise<any>}
     */
    LaunchNavigator.prototype.isAppAvailable = function (app) { return; };
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     * @returns {Promise<string[]>}
     */
    LaunchNavigator.prototype.availableApps = function () { return; };
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     * @returns {string}
     */
    LaunchNavigator.prototype.getAppDisplayName = function (app) { return; };
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     * @returns {string[]}
     */
    LaunchNavigator.prototype.getAppsForPlatform = function (platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsTransportMode = function (app, platform) { return; };
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     * @returns {string[]}
     */
    LaunchNavigator.prototype.getTransportModes = function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsDestName = function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsStart = function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsStartName = function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.prototype.supportsLaunchMode = function (app, platform) { return; };
    /**
     * @param destination {string | number[]}
     * @param options {LaunchNavigatorOptions}
     */
    LaunchNavigator.prototype.userSelect = function (destination, options) { };
    LaunchNavigator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    LaunchNavigator.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "navigate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "isAppAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "availableApps", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], LaunchNavigator.prototype, "getAppDisplayName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getAppsForPlatform", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsTransportMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getTransportModes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsDestName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStartName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsLaunchMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LaunchNavigator.prototype, "userSelect", null);
    LaunchNavigator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'LaunchNavigator',
            plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
            pluginRef: 'launchnavigator',
            repo: 'https://github.com/dpa99c/phonegap-launch-navigator',
            platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
        })
    ], LaunchNavigator);
    return LaunchNavigator;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutOutletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_exception_handler_exception_handler__ = __webpack_require__(175);
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









var AboutOutletPage = /** @class */ (function () {
    function AboutOutletPage(navCtrl, storesProvider, userdataProvider, launchNavigator, commonProvider, analytics, excepProvider, translate) {
        this.navCtrl = navCtrl;
        this.storesProvider = storesProvider;
        this.userdataProvider = userdataProvider;
        this.launchNavigator = launchNavigator;
        this.commonProvider = commonProvider;
        this.analytics = analytics;
        this.excepProvider = excepProvider;
        this.translate = translate;
        this.outletDetails = [];
        this.mallLocation = {
            x: '',
            y: ''
        };
        this.analytics.fa.logEvent('AboutOutletPage');
    }
    AboutOutletPage.prototype.ionViewWillEnter = function () {
        this.getLatLngOfOutlet();
        this.aboutTheOutlet();
    };
    // function for calling Outlet Details //
    AboutOutletPage.prototype.aboutTheOutlet = function () {
        var _this = this;
        this.storesProvider.getOutletDetails().subscribe(function (result) {
            _this.outletDetails = result.data;
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    // get details of selected mall. Then load the map.
    AboutOutletPage.prototype.getLatLngOfOutlet = function () {
        var _this = this;
        this.userdataProvider.getSelectedMall().then(function (malldata) {
            _this.mall = JSON.parse(malldata);
            _this.mallLocation.x = _this.mall.location.x;
            _this.mallLocation.y = _this.mall.location.y;
            _this.websiteUrl = _this.mall.websiteurl;
            _this.emailUrl = _this.mall.mallemail;
            _this.mapLoad();
        });
    };
    // Load map and set marker on mall location
    AboutOutletPage.prototype.mapLoad = function () {
        var latLng = new google.maps.LatLng(this.mallLocation.x, this.mallLocation.y);
        var mapOptions = {
            center: latLng,
            zoom: 18,
            label: true,
            mapTypeId: google.maps.MapTypeId.STREET
        };
        this.map = new google.maps.Map(this.myMap.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
        });
    };
    //get driving directions  
    AboutOutletPage.prototype.getDirections = function (address) {
        this.launchNavigator.navigate(address);
    };
    //share mall's details on social platforms
    AboutOutletPage.prototype.shareSocial = function () {
        var message = this.userdataProvider.mallShareText;
        // let message = msg + `,${this.websiteUrl}`;
        this.commonProvider.shareViaSocailMedia(message);
    };
    AboutOutletPage.prototype.gotoPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('MapDetail'),
        __metadata("design:type", Object)
    ], AboutOutletPage.prototype, "myMap", void 0);
    AboutOutletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-outlet',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/about-outlet/about-outlet.html"*/'\n  <!-- <header [canShowMenu]=true [showBackButton]=true></header> -->\n  <ion-header>\n    <ion-navbar>\n        <ion-row>\n                <ion-col col-2>\n                        <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n                    </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="{{userdataProvider?.selectMallLogo}}" (click)="gotoPage(\'HomePage\')">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding no-bounce>\n  <section class="mapSec">\n    <section #MapDetail id="map"></section>\n    <figcaption>\n        <h4 *ngIf="mall?.mallname">{{mall?.mallname}}</h4>\n        <p *ngIf="mall?.addressline">{{mall?.addressline}}</p>\n        <p  *ngIf="mall?.addressline2">{{mall?.addressline2}}</p>\n        <p *ngIf="mall?.city">{{mall?.city}}</p>\n      </figcaption>\n  </section>\n\n  <ion-card-content>\n    <h6 *ngIf="mall?.centerhours">{{ "ABOUT_OUTLET_PAGE.STATIC_TEXT.HOURS" | translate }}</h6>\n    <p [innerHtml]="mall?.centerhours | safehtml"></p>\n    <h6>{{ "ABOUT_OUTLET_PAGE.STATIC_TEXT.CONNECTED" | translate }}</h6>\n    <ul>\n      <li>\n        <a href="{{mall?.facebookurl}}" target="_blank">\n          <img src="assets/images/fb.png" />\n        </a>\n      </li>\n      <li>\n        <a href="{{mall?.instagramurl}}" target="_blank">\n          <img src="assets/images/instagram.png" />\n        </a>\n      </li>\n    </ul>\n  </ion-card-content>\n  <figure no-margin>\n    <img src="{{mall?.featureimage}}" />\n  </figure>\n  <ion-card-content>\n    <h3>{{ "COMMON.STATIC_TEXT.ABOUT" | translate }} {{ "COMMON.STATIC_TEXT.US" | translate }}</h3>\n    <p [innerHtml]="mall?.description"></p>\n    <button ion-button block color="dark" margin-bottom><a href ="tel:{{mall?.tel}}">{{ "ABOUT_OUTLET_PAGE.BUTTONS.CALL_CENTER" | translate }}  {{mall?.tel}}</a></button>\n    <button ion-button block color="dark" margin-bottom><a href="mailto:{{mall?.mallemail}}?subject=Contact From Simon App">{{ "ABOUT_OUTLET_PAGE.BUTTONS.EMAIL_CENTER" | translate }}</a></button>\n    <button ion-button block color="dark" margin-bottom (click)="getDirections(mall?.addressline)">{{ "ABOUT_OUTLET_PAGE.BUTTONS.DIRECTION" | translate }}</button>\n    <button ion-button block color="dark" margin-bottom (click)="shareSocial()">{{ "ABOUT_OUTLET_PAGE.BUTTONS.SHARE_CENTER" | translate }}</button>\n  </ion-card-content>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/about-outlet/about-outlet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__["a" /* StoresProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__["a" /* UserdataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], AboutOutletPage);
    return AboutOutletPage;
}());

//# sourceMappingURL=about-outlet.js.map

/***/ })

});
//# sourceMappingURL=7.js.map