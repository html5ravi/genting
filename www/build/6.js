webpackJsonp([6],{

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ibeacon_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_stores_stores__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_ibeacon_module__["a" /* IBeaconModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__app_ibeacon_module__["a" /* IBeaconModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_stores_stores__["a" /* StoresProvider */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var BeaconModel = /** @class */ (function () {
    function BeaconModel(beacon) {
        this.beacon = beacon;
        this.uuid = beacon.uuid;
        this.major = beacon.major;
        this.minor = beacon.minor;
        this.rssi = beacon.rssi;
        this.tx = beacon.tx;
        this.accuracy = beacon.accuracy;
        this.proximity = beacon.proximity;
        this.distance = this.getDistance(beacon);
        this.arrivalTime = __WEBPACK_IMPORTED_MODULE_0_moment___default()();
    }
    BeaconModel.prototype.getDistance = function (beacon) {
        // console.log('Math pow below');
        // console.log(Math.pow((beacon.rssi/-59),7.7095));
        // console.log("rssi and tx", beacon.rssi, beacon.tx);
        // console.log("distance from beacon Modal below");
        // console.log((0.89976) *  Math.pow((beacon.rssi/-59),7.7095) + 0.111);
        return ((0.89976) * Math.pow((beacon.rssi / -59), 7.7095) + 0.111);
    };
    return BeaconModel;
}());

//# sourceMappingURL=beaconModel.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_beacon_beacon__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_open_native_settings__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_geofence_geofence__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_do__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_beaconModel__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//import Beacon Model


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storesProvider, beaconProvider, userdataProvider, events, zone, platform, openSettings, geofenceProvider, menuController, analytics, translate, excepProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storesProvider = storesProvider;
        this.beaconProvider = beaconProvider;
        this.userdataProvider = userdataProvider;
        this.events = events;
        this.zone = zone;
        this.platform = platform;
        this.openSettings = openSettings;
        this.geofenceProvider = geofenceProvider;
        this.menuController = menuController;
        this.analytics = analytics;
        this.translate = translate;
        this.excepProvider = excepProvider;
        this.beaconsList = [];
        this.nearestBeaconList = [];
        this.displayBeaconList = [];
        this.storeList = [];
        this.homeBannerData = [{ bannerimage: 'assets/images/findStores.png', linktype: 'InAppLink', destination: '/storedirectory' }, { bannerimage: 'assets/images/findDeals.png', linktype: 'InAppLink', destination: '/deals' }, { bannerimage: 'assets/images/navigateCentermap.png', linktype: 'InAppLink', destination: '/maps' }];
        this.events.subscribe('changedOutlet', function (isOutLetChanged) {
            _this.beaconsList = [];
            _this.nearestBeaconList = [];
            _this.displayBeaconList = [];
            _this.storeList = [];
        });
        this.onBackground();
        this.onResume();
        this.analytics.fa.logEvent('HomePage');
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.getHomeBanners();
        if (this.platform.is('cordova')) {
            this.geofenceProvider.userPermissionForLocation().then(function (isReady) {
                _this.platform.ready().then(function () {
                    _this.geofenceProvider.getUserCurrentPosition().then(function (isNearToMall) {
                        _this.checkBluetoothState();
                    });
                });
            });
            this.checkBluetoothState();
        }
        this.menuController.enable(true);
        this.malllogo = this.userdataProvider.getSelectedMallLogo();
        this.userdataProvider.getAuthToken().then(function (data) {
            _this.auth_token = data;
            _this.getMallData();
            if (_this.auth_token) {
            }
        });
    };
    // go to store details page
    HomePage.prototype.fullstore = function (store) {
        this.navCtrl.push("StoreDetailsPage", { storedata: store });
    };
    HomePage.prototype.gotoPromotionBanner = function (slide) {
        this.navCtrl.push("PromotionBannerPage", { promotion: slide });
    };
    //Initialize the Ibeacon
    HomePage.prototype.initialize = function () {
        try {
            var isInitialised = this.beaconProvider.initialise();
            if (isInitialised) {
                this.listenToBeaconEvents();
            }
        }
        catch (e) {
        }
    };
    //Listen to the Ibeacon event by subscribing to didRangeBeaconsInRegion
    HomePage.prototype.listenToBeaconEvents = function () {
        var _this = this;
        this.events.subscribe('didRangeBeaconsInRegion', function (data) {
            // update the UI with the beacon list 
            _this.zone.run(function () {
                // let beaconEventList =  [...data.beacons]
                _this.beaconObserver$ = new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (observer) {
                    observer.next(data.beacons);
                    observer.complete();
                });
                // let beaconEventList = data.beacons;
                _this.beaconObserver$
                    .subscribe(function (bea) {
                    bea.map(function (beacons) {
                        console.log(beacons, "before mapping");
                        if (beacons.rssi != 0) {
                            // beacons.map(beacons => {
                            var beaconObject = new __WEBPACK_IMPORTED_MODULE_13__models_beaconModel__["a" /* BeaconModel */](beacons);
                            // All Beacons List
                            // closest 3 Beacons List
                            // Found New beacon
                            // Add to the all beacons list
                            // Sort the all beacons list by distance and find top 3 and assign to nearest beacon list
                            var isBeaconExist = _this.beaconProvider.checkBeaconList(_this.beaconsList, beaconObject);
                            if (!isBeaconExist) {
                                _this.addBeacon(_this.beaconsList, beaconObject);
                            }
                            else {
                                // remove the existing beacon object and add again - because distance would have changed
                                _this.replaceBeacon(_this.beaconsList, beaconObject);
                            }
                        }
                    });
                });
                // Loop through all beacons and remove the ones > 8 seconds
                var filterByArrivalTime = _this.beaconsList.filter(function (beacon) {
                    return __WEBPACK_IMPORTED_MODULE_5_moment___default.a.duration(__WEBPACK_IMPORTED_MODULE_5_moment___default()().diff(beacon.arrivalTime)).asSeconds() <= 8;
                });
                // Replace original list with the new filtered list
                _this.beaconsList = filterByArrivalTime.slice();
                // sort by arrival time and distance. That is new sorted array will be your nearest beacon
                _this.nearestBeaconList = _this.beaconProvider.sortBeaconsByAccuracy(_this.beaconsList);
                //If nearest beacon and the displayBeacon are different then activate refresh button
                if (_this.beaconProvider.areDifferentByMinor(_this.nearestBeaconList, _this.displayBeaconList)) {
                    _this.getDisplayBeaconList();
                }
                //If all array are empty, that means there is no ranging of beacons, 
                //Then  remove display beacon List and beaconStoresSlideList
                // if (!this.displayBeaconList.length && this.beaconsList.length > 0){
                //     this.getDisplayBeaconList();
                //     this.autoRefreshBeacons = setInterval(()=>{
                //       this.getDisplayBeaconList();
                //     },5000)
                // }
                if (_this.displayBeaconList.length > 0 && _this.nearestBeaconList.length == 0 && _this.beaconsList.length == 0) {
                    _this.displayBeaconList = [];
                    // clearInterval(this.autoRefreshBeacons);
                }
            });
        });
    };
    //beacons to display;
    HomePage.prototype.getDisplayBeaconList = function () {
        var _this = this;
        this.storeList = [];
        this.displayBeaconList = this.nearestBeaconList.slice();
        if (this.displayBeaconList.length > 0) {
            this.displayBeaconList.forEach(function (beacon) {
                _this.getBeaconStore(beacon.major, beacon.minor);
            });
        }
    };
    //add beacon to the list
    HomePage.prototype.addBeacon = function (beaconList, beacon) {
        beaconList.push(beacon);
    };
    //replace the beacon if it is already exist
    HomePage.prototype.replaceBeacon = function (beaconList, beacon) {
        var len = beaconList.length;
        for (var i = 0; i < len; i++) {
            if (beaconList[i].minor === beacon.minor) {
                beaconList[i] = beacon;
            }
        }
    };
    // Get the stores of connected beacon 
    //If store is not available yet (empty response), then remove the beacon from beacon list;
    HomePage.prototype.getBeaconStore = function (major, minor) {
        var _this = this;
        this.storesProvider.getBeaconStores(major, minor).then(function (storedata) {
            if (storedata) {
                _this.storeList.push(storedata);
            }
        }, function (err) {
        });
    };
    HomePage.prototype.getMallData = function () {
        var _this = this;
        this.userdataProvider.getSelectedMall().then(function (malldata) {
            _this.mall = JSON.parse(malldata);
        });
    };
    HomePage.prototype.openBluetoothModal = function () {
        this.bluetoothModal.open();
    };
    HomePage.prototype.openBluetoothSettings = function () {
        this.bluetoothModal.close();
        this.openSettings.open('bluetooth').then(function () {
        }, function (err) {
        });
    };
    HomePage.prototype.closeBluetoothModal = function () {
        this.bluetoothModal.close();
    };
    HomePage.prototype.checkBluetoothState = function () {
        var _this = this;
        this.beaconProvider.checkBluetoothState().then(function (data) {
            if (data['initialize']) {
                _this.initialize();
            }
            if (!data['initialize'] && data['bluetoothModal']) {
                _this.openBluetoothModal();
            }
        });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('didRangeBeaconsInRegion');
        this.beaconProvider.stopRangingBeacons();
        // clearInterval(this.autoRefreshBeacons);
        // if(this.beaconObserver$)
        // this.beaconObserver$.unsubscribe();
    };
    HomePage.prototype.onBackground = function () {
        var _this = this;
        this.platform.pause.subscribe(function () {
            _this.beaconProvider.stopRangingBeacons();
            _this.events.unsubscribe('didRangeBeaconsInRegion');
            // if(this.beaconObserver$)
            //   this.beaconObserver$.unsubscribe();
            // clearInterval(this.autoRefreshBeacons);
        });
    };
    HomePage.prototype.onResume = function () {
        var _this = this;
        this.platform.resume.subscribe(function () {
            _this.checkBluetoothState();
        });
    };
    HomePage.prototype.navTo = function (page) {
        // console.log(bannerdata,"banner dataaaaaa")
        this.navCtrl.setRoot(page);
    };
    HomePage.prototype.ngOnDestroy = function () {
        if (this.beaconObserver$ != undefined)
            this.beaconObserver$.takeUntil(this.beaconObserver$);
    };
    HomePage.prototype.getHomeBanners = function () {
        var _this = this;
        this.storesProvider.getHomeBanners().subscribe(function (homebanners) {
            _this.zone.runOutsideAngular(function () {
                if (homebanners.data.length > 0) {
                    _this.homeBannerData.length = 0;
                    setTimeout(function () {
                        _this.homeBannerData = homebanners.data.slice();
                    }, 100);
                }
            });
        }, function (err) {
            _this.excepProvider.excpHandler(err);
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('circle'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "myCircle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bluetooth'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "bluetoothModal", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/home/home.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-row>\n        <ion-col col-2>\n          <button *ngIf="auth_token" ion-button icon-only icon-left (click)="navTo(\'FullProfilePage\')">\n          <ion-icon class="profile-icon" name="md-person" color="yellow"></ion-icon>\n        </button>\n        </ion-col>\n        <ion-col col-8>\n            <figure no-margin>\n                <img src="{{malllogo}}"/>\n              </figure>\n        </ion-col>\n        <ion-col col-2>\n            <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n        </ion-col>\n      </ion-row>\n    </ion-navbar>\n  </ion-header>\n  <!-- <header [canShowMenu]=true [showBackButton]=false [showProfileIcon]=auth_token?true:false></header> -->\n\n<ion-content no-padding no-bounce has-bouncing="false" overflow-scroll="false">\n  <section class="fixeHeight" style="min-height: 90vw;">\n  <ion-slides *ngIf="homeBannerData.length > 0" pager="true" autoplay="5000" loop="true" speed="1000" class="static">\n  <ion-slide *ngFor="let banner of homeBannerData | sort:\'priority\'" (click)="navTo(banner)"> \n    <section>\n      <figure no-margin >\n  <a *ngIf="banner?.linktype ==\'InAppLink\'" href="#{{banner?.destination}}"><img [src]="banner?.bannerimage" /></a>\n    <a *ngIf="banner?.linktype ==\'None\'"><img [src]="banner?.bannerimage" /></a>\n    <a *ngIf="banner?.linktype ==\'WebLink\'" href="{{banner?.destination}}"><img [src]="banner?.bannerimage" /></a>\n\n          <!-- <figcaption>\n              <h3><strong>{{ "COMMON.STATIC_TEXT.FIND" | translate }} {{ "COMMON.STATIC_TEXT.A" | translate }}</strong> {{ "COMMON.STATIC_TEXT.STORE" | translate }}</h3>\n            </figcaption> -->\n        </figure>\n      </section>\n    </ion-slide>\n    <!-- <ion-slide (click)="navTo(\'DealsPage\')">\n      <section>\n        <figure no-margin >\n          <img src="assets/images/findDeals.jpg"/>\n          <figcaption>\n              <h3><strong>{{ "COMMON.STATIC_TEXT.FIND" | translate }} {{ "COMMON.STATIC_TEXT.DEALS" | translate }}</strong> {{ "COMMON.STATIC_TEXT.OFFERS" | translate }}</h3>\n            </figcaption>\n        </figure>\n      </section>\n    </ion-slide>\n    <ion-slide (click)="navTo(\'MapsPage\')">\n      <section>\n        <figure no-margin >\n          <img src="assets/images/navigateCentermap.jpg" />\n          <figcaption>\n              <h3><strong>{{ "HOMEPAGE.STATIC_TEXT.NAVIGATE" | translate }}</strong> {{ "HOMEPAGE.STATIC_TEXT.CENTER_MAP" | translate }}</h3>\n            </figcaption>\n        </figure>\n      </section>\n    </ion-slide> -->\n  </ion-slides>\n\n  </section>\n  <article>\n  <section class="timePatch">\n    <strong>{{ "HOMEPAGE.STATIC_TEXT.OPEN" | translate }}</strong>\n  </section>\n\n  <ion-card-content>\n    <h3 text-uppercase class="pr" *ngIf="storeList.length > 0">{{ "HOMEPAGE.STATIC_TEXT.STORES_AROUND" | translate }}</h3>\n    <ul class="sliderWrap">\n      <li  tappable *ngFor="let store of storeList" (click)="fullstore(store?.associatedstore[0])">\n          <figure>\n            <img [src]="store?.associatedstore[0]?.brandimage" />\n          </figure>\n          <figcaption>{{store?.associatedstore[0]?.storename}}</figcaption>\n      </li>\n    </ul>\n\n    <ul class="second" *ngIf="storeList.length <= 0">\n        <li class="dark chClr">\n          <a href="{{mall?.facebookurl}}" target="_blank">\n            <strong>\n                <p no-margin><span>{{mall?.mallname}}</span> <br /> {{ "HOMEPAGE.STATIC_TEXT.ON" | translate }} <br> {{ "HOMEPAGE.STATIC_TEXT.FACEBOOK" | translate }} <br> <a href="{{mall?.facebookurl}}" target="_blank">{{ "HOMEPAGE.STATIC_TEXT.LIKE_US" | translate }} </a></p>\n            </strong>\n          </a>\n        </li>\n        <li class="dark">\n          <a href="{{mall?.instagramurl}}" target="_blank">\n            <strong>\n                <p no-margin><span>{{mall?.mallname}}</span> <br> {{ "HOMEPAGE.STATIC_TEXT.ON" | translate }} <br> {{ "HOMEPAGE.STATIC_TEXT.INSTAGRAM" | translate }} <br> <a href="{{mall?.instagramurl}}" target="_blank">{{ "HOMEPAGE.STATIC_TEXT.LIKE_US" | translate }} </a>\n            </strong>\n          </a>\n        </li>\n      </ul>\n\n\n  </ion-card-content>\n</article>\n</ion-content>\n\n\n<mymodal #bluetooth title="Turn on Bluetooth" (closeClicked)="closeBluetoothModal()">\n  <ion-grid>\n    <div>\n        <p text-center>{{ "MODALS.STATIC_TEXT.BLUETOOTH_1" | translate }} <ion-icon ios="ios-bluetooth" md="md-bluetooth"></ion-icon> {{ "MODALS.STATIC_TEXT.BLUETOOTH_2" | translate }}”</p>\n  </div>\n      <ion-row>\n          <ion-col col-12>\n              <button ion-button color="dark" (click)="openBluetoothSettings()">\n                {{ "MODALS.BUTTONS.SETTINGS" | translate }}</button>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</mymodal>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__["a" /* StoresProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_beacon_beacon__["a" /* BeaconProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userdata_userdata__["a" /* UserdataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
            __WEBPACK_IMPORTED_MODULE_7__providers_geofence_geofence__["a" /* GeofenceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_analytics_analytics__["a" /* AnalyticsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map