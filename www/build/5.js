webpackJsonp([5],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPageModule", function() { return MapsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ibeacon_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_stores_stores__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MapsPageModule = /** @class */ (function () {
    function MapsPageModule() {
    }
    MapsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__maps__["a" /* MapsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maps__["a" /* MapsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_ibeacon_module__["a" /* IBeaconModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_stores_stores__["a" /* StoresProvider */]]
        })
    ], MapsPageModule);
    return MapsPageModule;
}());

//# sourceMappingURL=maps.module.js.map

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

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_beacon_beacon__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_open_native_settings__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_stores_stores__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_beaconModel__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MapsPage = /** @class */ (function () {
    function MapsPage(navCtrl, navParams, userdataProvider, modalCtrl, beaconProvider, openSettings, events, zone, storesProvider, platform, analytics) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userdataProvider = userdataProvider;
        this.modalCtrl = modalCtrl;
        this.beaconProvider = beaconProvider;
        this.openSettings = openSettings;
        this.events = events;
        this.zone = zone;
        this.storesProvider = storesProvider;
        this.platform = platform;
        this.analytics = analytics;
        this.filteredList = [];
        this.locationObj = {};
        this.beaconsList = [];
        this.nearestBeaconList = [];
        this.userCurrentLocationUnitNo = null;
        this.prevMajor = null;
        this.prevMinor = null;
        this.isIntervalSet = false;
        this.state = false;
        this.hideBackButton = false;
        this.johorData = [
            { id: 9999, "name": "Food Court" },
            { id: 500, "name": "Starbucks Coffee" },
            { id: 502, "name": "Baskin-Robbins" },
            { id: 504, "name": "Royal Sporting House" },
            { id: 510, "name": "Cotton On" },
            { id: 514, "name": "Bath & Body Works" },
            { id: 516, "name": "Austin Reed" },
            { id: 518, "name": "Obermain" },
            { id: 520, "name": "New Balance Outlet" },
            { id: 522, "name": "The Body Shop Outlet" },
            { id: 526, "name": "Levi's Outlet Store" },
            { id: 532, "name": "Guess" },
            { id: 902, "name": "Adidas" },
            { id: 912, "name": "Xixili" },
            { id: 914, "name": "Swatch" },
            { id: 915, "name": "Sunglass Hut" },
            { id: 916, "name": "Rockport" },
            { id: 917, "name": "Poney Outlet" },
            { id: 918, "name": "Hush Puppies" },
            { id: 920, "name": "Anakku" },
            { id: 922, "name": "Animation World" },
            { id: 924, "name": "924" },
            { id: 926, "name": "926" },
            { id: 910, "name": "Hush Puppies Apparel" },
            { id: 908, "name": "Asics" },
            { id: 1306, "name": "Diadora" },
            { id: 1304, "name": "Voir Gallery" },
            { id: 1302, "name": "Soda" },
            { id: 825, "name": "Stride Rite" },
            { id: 824, "name": "Cotton On Kids" },
            { id: 822, "name": "Leather Avenue" },
            { id: 820, "name": "Rubi Shoes" },
            { id: 818, "name": "Sembonia" },
            { id: 816, "name": "Hang Ten" },
            { id: 814, "name": "Aldo" },
            { id: 812, "name": "Converse" },
            { id: 808, "name": "Timberland" },
            { id: 801, "name": "Ace Bags & Luggage" },
            { id: 436, "name": "Armani Exchange" },
            { id: 430, "name": "Lacoste Outlet" },
            { id: 428, "name": "Fossil" },
            { id: 426, "name": "La Senza Lingerie" },
            { id: 420, "name": "Clarks" },
            { id: 416, "name": "G2000 Outlet" },
            { id: 418, "name": "Time Lab" },
            { id: 414, "name": "Rip Curl" },
            { id: 412, "name": "City Chain" },
            { id: 410, "name": "Akemi Uchi" },
            { id: 408, "name": "Carlo Rino" },
            { id: 406, "name": "Puma" },
            { id: 402, "name": "Skechers" },
            { id: 400, "name": "Renoma Paris" },
            { id: 401, "name": "Crepe & San Churros" },
            { id: 1000, "name": "Nike Factory Store" },
            { id: 1002, "name": "Absolute Thai" },
            { id: 2000, "name": "Taang Shifu" },
            { id: 434, "name": "CK Calvin Klein" },
            { id: 432, "name": "DKNY" },
            { id: 806, "name": "Aerosoles" },
            { id: 804, "name": "Polo Ralph Lauren Children" },
            { id: 424, "name": "Esprit" },
            { id: 1208, "name": "1208" },
            { id: 724, "name": "Jim Thompson" },
            { id: 722, "name": "Chocolat 5D Studio" },
            { id: 720, "name": "La Perla" },
            { id: 718, "name": "Lululemon" },
            { id: 716, "name": "Beauty Scents" },
            { id: 714, "name": "Calvin Klein Underwear" },
            { id: 712, "name": "Calvin Klein Jeans" },
            { id: 708, "name": "Sacoor Outlet" },
            { id: 706, "name": "Swarovski" },
            { id: 704, "name": "Furla" },
            { id: 702, "name": "Jimmy Choo" },
            { id: 700, "name": "700" },
            { id: 338, "name": "Armani Outlet" },
            { id: 334, "name": "Blackbarrett" },
            { id: 332, "name": "Salvatore Ferragamo Company Store" },
            { id: 328, "name": "Tory Burch" },
            { id: 326, "name": "Swiss Watch Gallery" },
            { id: 322, "name": "Tumi" },
            { id: 320, "name": "Wear & When" },
            { id: 318, "name": "Royal Selangor" },
            { id: 316, "name": "Geox" },
            { id: 314, "name": "Oroton Factory" },
            { id: 312, "name": "Bonia" },
            { id: 310, "name": "Samsonite Factory Outlet" },
            { id: 308, "name": "Universal Traveller" },
            { id: 306, "name": "Tomei" },
            { id: 304, "name": "Pedro Outlet" },
            { id: 302, "name": "Cosmetics & Designer Fragrances" },
            { id: 300, "name": "Vincci" },
            { id: 100, "name": "Padini Outlet Store" },
            { id: 104, "name": "Suria Muhabat Money Changer" },
            { id: 1106, "name": "World of Outdoors" },
            { id: 1104, "name": "Columbia" },
            { id: 1102, "name": "The Flexx" },
            { id: 633, "name": "Dome Café" },
            { id: 632, "name": "Aigner" },
            { id: 630, "name": "Hackett London" },
            { id: 628, "name": "Seen" },
            { id: 626, "name": "Optical 88" },
            { id: 624, "name": "Watch Station International" },
            { id: 622, "name": "Diane von Furstenberg" },
            { id: 620, "name": "The Make Up Outlet" },
            { id: 616, "name": "Kate Spade New York" },
            { id: 612, "name": "Hugo Boss" },
            { id: 602, "name": "Maybank" },
            { id: 600, "name": "Police Base" },
            { id: 610, "name": "Coach Men's" },
            { id: 604, "name": "Polo Ralph Lauren" },
            { id: 606, "name": "Ermenegildo Zegna Outlet Store" },
            { id: 232, "name": "Michael Kors" },
            { id: 238, "name": "Gucci" },
            { id: 230, "name": "Coach" },
            { id: 236, "name": "236" },
            { id: 701, "name": "Versace" },
            { id: 222, "name": "Bally" },
            { id: 220, "name": "Brooks Brothers Factory Store" },
            { id: 218, "name": "Tommy Hilfiger" },
            { id: 214, "name": "Kipling" },
            { id: 212, "name": "Victoria's Secret" },
            { id: 210, "name": "The Cosmetics Company Store" },
            { id: 208, "name": "Braun Buffel" },
            { id: 206, "name": "Fidani Chocolate" },
            { id: 204, "name": "George & Dragon Café" },
            { id: 200, "name": "The Coffee Bean & Tea Leaf" },
            { id: 528, "name": "Dockers" },
        ];
        this.gphoData = [
            { id: 9999, "name": "Food Court" },
            { id: 100, name: "Adidas" },
            { id: 524, name: "Aigner" },
            { id: 526, name: "Tommy Hilfiger" },
            { id: 1404, name: "Animation World" },
            { id: 214, name: "Asics" },
            { id: 602, name: "BOSS Womenswear" },
            { id: 610, name: "Brooks Brothers Factory Store" },
            { id: 614, name: "Calvin Klein" },
            { id: 120, name: "Charles & Keith" },
            { id: 904, name: "Cheetah" },
            { id: 800, name: "Coach" },
            { id: 222, name: "Converse" },
            { id: 304, name: "Cotton On" },
            { id: 210, name: "Cotton On Body" },
            { id: 632, name: "Cotton On Kids" },
            { id: 528, name: "Furla" },
            { id: 414, name: "G2000 Outlet" },
            { id: "kiosk2", name: "Hypergear" },
            { id: "kiosk1", name: "Elle" },
            { id: 404, name: "Guess" },
            { id: 604, name: "Hugo Boss" },
            { id: 112, name: "Hush Puppies Apparel" },
            { id: 618, name: "Jim Thompson" },
            { id: 534, name: "Kate Spade New York" },
            { id: 132, name: "Kenneth Cole" },
            { id: 518, name: "Kipling" },
            { id: 316, name: "Lacoste Outlet" },
            { id: 408, name: "Levi's Outlet Store" },
            { id: 536, name: "Max Mara" },
            { id: 538, name: "Melium Designer Outlet" },
            { id: 712, name: "Michael Kors" },
            { id: 710, name: "Michael Kors Mens" },
            { id: 804, name: "Moschino" },
            { id: 216, name: "New Balance Outlet" },
            { id: 508, name: "Nike" },
            { id: 810, name: "Oroton Factory" },
            { id: 608, name: "Outlet by Club 21" },
            { id: 624, name: "Padini Outlet Store" },
            { id: 634, name: "Poney Enfants" },
            { id: 631, name: "Poney Outlet" },
            { id: 418, name: "Puma" },
            { id: 300, name: "Reebok" },
            { id: 221, name: "Renoma Paris" },
            { id: 110, name: "Rip Curl" },
            { id: 302, name: "Royal Sporting House" },
            { id: 126, name: "Sacoor Outlet" },
            { id: 220, name: "Santa Barbara Polo & Racquet Club" },
            { id: 416, name: "Soda" },
            { id: 400, name: "Superdry" },
            { id: 806, name: "Ted Baker" },
            { id: 506, name: "The North Face" },
            { id: 122, name: "Timberland" },
            { id: 621, name: "Triumph" },
            { id: 108, name: "Under Armour" },
            { id: 502, name: "Universal Traveller" },
            { id: 900, name: "Valentino Rudy" },
            { id: 706, name: "Victoria's Secret" },
            { id: 212, name: "Wacoal" },
            { id: 308, name: "Xixili" },
            { id: 530, name: "Polo Ralph Lauren" },
            { id: 208, name: "Camel Active" },
            { id: 124, name: "Clarks" },
            { id: 612, name: "Geox" },
            { id: 412, name: "Hush Puppies" },
            { id: 310, name: "Obermain" },
            { id: 312, name: "Onitsuka Tiger" },
            { id: 703, name: "Pedro Outlet" },
            { id: 1408, name: "Shoopen" },
            { id: 106, name: "Skechers" },
            { id: 628, name: "Vincci" },
            { id: 908, name: "Ace Bags & Luggage + Zero Halliburton" },
            { id: 1400, name: "Austin Reed" },
            { id: 500, name: "Bonia" },
            { id: 702, name: "Braun Buffel" },
            { id: 218, name: "Carlo Rino" },
            { id: 314, name: "Fossil" },
            { id: 701, name: "LeSportsac" },
            { id: 700, name: "Radley London" },
            { id: 816, name: "Samsonite" },
            { id: 906, name: "Sembonia" },
            { id: 704, name: "Tumi" },
            { id: 522, name: "Citizen" },
            { id: 116, name: "City Chain" },
            { id: 630, name: "Focus Point" },
            { id: 128, name: "Frederique Constant" },
            { id: 130, name: "Toni Pons" },
            { id: 318, name: "Seen" },
            { id: 206, name: "Sunglass Hut" },
            { id: 118, name: "Swatch" },
            { id: 402, name: "Time Lab" },
            { id: 820, name: "Tomei" },
            { id: 601, name: "Watch & See" },
            { id: 812, name: "Watch Station International" },
            { id: 902, name: "Akemi Uchi Factory Outlet" },
            { id: 620, name: "Tefal" },
            { id: 818, name: "Beauty Scents" },
            { id: 808, name: "Cosmetics & Designer Fragrances" },
            { id: 600, name: "Davidoff of Geneva" },
            { id: 622, name: "Fidani Chocolatier" },
            { id: 708, name: "Godiva" },
            { id: 520, name: "Hamleys" },
            { id: 202, name: "Point Convenience Store" },
            { id: 814, name: "Royal Selangor" },
            { id: 114, name: "Sasa" },
            { id: 200, name: "Suria Muhabat Money Changer" },
            { id: 226, name: "TANGS Outlet" },
            { id: 616, name: "The Cosmetics Company Store" },
            { id: 1402, name: "Toy World" },
            { id: 504, name: "Typo" },
            { id: 1406, name: "Woaco" },
            { id: 1100, name: "Absolute Thai Highlands" },
            { id: 1110, name: "Baba Nyonya By Sambal Chilli" },
            { id: 1516, name: "Baskin - Robbins" },
            { id: 1514, name: "Crepe & San Churros" },
            { id: 1508, name: "Dapur Santai Yamch’a" },
            { id: 1118, name: "Dome Café" },
            { id: 1108, name: "DubuYo" },
            { id: 1112, name: "1112" },
            { id: 1300, name: "Golden Bites" },
            { id: 1518, name: "Juan Valdez Café" },
            { id: 1116, name: "Krispy Kreme Doughnuts" },
            { id: 1114, name: "Crocs Outlet Shop (Opening Soon)" },
            { id: 1506, name: "New Rainbow River Fish Restaurant" },
            { id: 1502, name: "OldTown White Coffee" },
            { id: 422, name: "Starbucks Coffee" },
            { id: 1510, name: "The Chicken Rice Shop" },
            { id: 638, name: "The Coffee Bean & Tea Leaf" },
            { id: 204, name: "The Grove" },
            { id: 1104, name: "Wendy's" },
            { id: 1000, name: "Wincaa" }
        ];
        var uid = this.navParams.get('unitnumber');
        console.log(uid, "unit number888888");
        this.hideBackButton = navParams.get('hidebackbutton');
        console.log(this.hideBackButton, "hideBackButton888888");
        if (uid != undefined) {
            if (uid == "kiosk2") {
                var id = uid;
                setTimeout(function () {
                    var map = $('#mallmap');
                    var self = map.data('spur');
                    self.showLocation(id, 600, true);
                }, 500);
            }
            else if (uid == "kiosk1") {
                var id = uid;
                setTimeout(function () {
                    var map = $('#mallmap');
                    var self = map.data('spur');
                    self.showLocation(id, 600, true);
                }, 500);
            }
            else {
                var id = JSON.parse(uid);
                setTimeout(function () {
                    var map = $('#mallmap');
                    var self = map.data('spur');
                    self.showLocation(id, 600, true);
                }, 500);
            }
        }
        this.onBackground();
        this.onResume();
        this.userdataProvider.getSelectedMall().then(function (mall) {
            _this.mapJson = JSON.parse(mall);
            if (_this.mapJson.mallname == "JOHOR PREMIUM OUTLETS") {
                _this.mapMall("assets/js/johor.json");
                _this.searchArr = _this.johorData.slice();
            }
            else {
                _this.mapMall("assets/js/gpho.json");
                _this.searchArr = _this.gphoData.slice();
            }
        });
        this.analytics.fa.logEvent('MapsPage');
    }
    MapsPage.prototype.movetoPos = function (id) {
        var that = this;
        if (that.state == false) {
            var map = $('#mallmap');
            var self = map.data('spur');
            self.showYAH(parseInt(id));
            var spur = $("#mallmap");
            var self = spur.data("spur");
            var data = self.getLocationData(id);
            if (data.x && data.y)
                self.moveTo(data.x, data.y, 3, 300);
            self.hideLocation();
        }
    };
    MapsPage.prototype.ionViewWillEnter = function () {
        this.checkBluetoothState();
        var that = this;
        var spur = $("#mallmap");
        spur.on('locationopened', function (e, self) {
            // self grants direct access to the map object
            that.state = true;
        });
        spur.on('locationclosed', function (e, self) {
            // self grants direct access to the map object
            that.state = false;
        });
    };
    MapsPage.prototype.gotoDetailPage = function (id) {
        if (id) {
            if (id != 9999) {
                this.navCtrl.push("StoreDetailsPage", { unitnumber: id });
            }
        }
    };
    //ionViewDidLoad
    MapsPage.prototype.mapMall = function (url) {
        var that = this;
        $(document).ready(function () {
            if (url) {
                setTimeout(function () {
                    var spur = $('#mallmap').spur({
                        source: url,
                        sidebar: false,
                        minimap: false,
                        markers: false,
                        search: true,
                        deeplinking: false,
                        zoombuttons: true,
                        fillcolor: false,
                        fullscreen: true,
                        maxscale: 3 // Setting maxscale to 3 times bigger than the original file
                    });
                    spur.on('popupClicked', function (e, data) {
                        that.gotoDetailPage(data.id);
                    });
                }, 300);
            }
            ;
        }); //document
    }; //ionViewDidLoad
    MapsPage.prototype.onInput = function (ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim()) {
            this.filteredList = this.searchArr.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.filteredList = [];
        }
    };
    MapsPage.prototype.selectedLocation = function (location) {
        this.myInput = location.name;
        this.filteredList = [];
        var map = $('#mallmap');
        var self = map.data('spur');
        self.showLocation(location.id, 600, true);
    };
    MapsPage.prototype.checkBluetoothState = function () {
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
    //Initialize the Ibeacon
    MapsPage.prototype.initialize = function () {
        try {
            var isInitialised = this.beaconProvider.initialise();
            if (isInitialised) {
                this.listenToBeaconEvents();
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    MapsPage.prototype.openBluetoothModal = function () {
        this.bluetoothModal.open();
    };
    MapsPage.prototype.openBluetoothSettings = function () {
        this.bluetoothModal.close();
        this.openSettings.open('bluetooth').then(function () {
        }, function (err) {
        });
    };
    MapsPage.prototype.listenToBeaconEvents = function () {
        var _this = this;
        this.events.subscribe('didRangeBeaconsInRegion', function (data) {
            // update the UI with the beacon list
            _this.zone.run(function () {
                _this.beaconObserver$ = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"](function (observer) {
                    observer.next(data.beacons);
                    observer.complete();
                });
                //  let beaconEventList = [...data.beacons];
                _this.beaconObserver$.subscribe(function (bea) {
                    bea.map(function (beacons) {
                        // beaconEventList.map(beacons=>{
                        if (beacons.rssi != 0) {
                            var beaconObject = new __WEBPACK_IMPORTED_MODULE_6__models_beaconModel__["a" /* BeaconModel */](beacons);
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
                // Loop through all beacons and remove the ones > 5 seconds
                var filterByArrivalTime = _this.beaconsList.filter(function (beacon) {
                    return __WEBPACK_IMPORTED_MODULE_7_moment___default.a.duration(__WEBPACK_IMPORTED_MODULE_7_moment___default()().diff(beacon.arrivalTime)).asSeconds() <= 5;
                });
                // Replace original list with the new filtered list
                _this.beaconsList = filterByArrivalTime.slice();
                // sort by arrival time and distance. That is new sorted array will be your nearest beacon
                _this.nearestBeaconList = _this.beaconProvider.sortBeaconsByAccuracy(_this.beaconsList);
                if (!_this.userCurrentLocationUnitNo && _this.beaconsList.length > 0 && _this.nearestBeaconList.length > 0) {
                    //   this.getBeaconStore();
                    //   this.isIntervalSet = true;
                    _this.checkNearestStore();
                    _this.startInterval();
                    //   this.checkNearestStore();  
                }
            });
        });
    };
    //add beacon to the list
    MapsPage.prototype.addBeacon = function (beaconList, beacon) {
        beaconList.push(beacon);
    };
    //replace the beacon if it is already exist
    MapsPage.prototype.replaceBeacon = function (beaconList, beacon) {
        var len = beaconList.length;
        for (var i = 0; i < len; i++) {
            if (beaconList[i].minor === beacon.minor) {
                beaconList[i] = beacon;
            }
        }
    };
    MapsPage.prototype.checkNearestStore = function () {
        if (!this.prevMajor || !this.prevMinor) {
            this.prevMajor = this.nearestBeaconList[0].major;
            this.prevMinor = this.nearestBeaconList[0].minor;
            this.getBeaconStore(this.nearestBeaconList[0].major, this.nearestBeaconList[0].minor);
        }
        else {
            if (this.prevMajor != this.nearestBeaconList[0].major || this.prevMinor != this.nearestBeaconList[0].minor) {
                this.prevMajor = this.nearestBeaconList[0].major;
                this.prevMinor = this.nearestBeaconList[0].minor;
                this.getBeaconStore(this.nearestBeaconList[0].major, this.nearestBeaconList[0].minor);
            }
        }
    };
    // Get the stores of connected beacon
    //If store is not available yet (empty response), then remove the beacon from beacon list;
    MapsPage.prototype.getBeaconStore = function (major, minor) {
        // this.isIntervalSet = true;
        var _this = this;
        this.storesProvider.getBeaconStores(major, minor).then(function (storedata) {
            if (storedata) {
                _this.userCurrentLocationUnitNo = storedata['associatedstore'][0].unitnumber;
                _this.movetoPos(_this.userCurrentLocationUnitNo);
            }
        });
    };
    MapsPage.prototype.ionViewDidLeave = function () {
        this.beaconProvider.stopRangingBeacons();
        this.events.unsubscribe('didRangeBeaconsInRegion');
        // clearInterval(this.interval);
        // if(this.beaconObserver$)
        // this.beaconObserver$.unsubscribe();
    };
    MapsPage.prototype.ionViewWillLeave = function () {
        this.beaconProvider.stopRangingBeacons();
        this.events.unsubscribe('didRangeBeaconsInRegion');
        clearInterval(this.interval);
        // if(this.beaconObserver$)
        // this.beaconObserver$.unsubscribe();
    };
    // on app goes to background
    MapsPage.prototype.onBackground = function () {
        var _this = this;
        this.platform.pause.subscribe(function () {
            _this.beaconProvider.stopRangingBeacons();
            _this.events.unsubscribe('didRangeBeaconsInRegion');
            // if(this.beaconObserver$)
            // this.beaconObserver$.unsubscribe();  
            clearInterval(_this.interval);
        });
    };
    //on app come from background to foreground
    MapsPage.prototype.onResume = function () {
        var _this = this;
        this.platform.resume.subscribe(function () {
            _this.checkBluetoothState();
        });
    };
    MapsPage.prototype.startInterval = function () {
        var _this = this;
        if (!this.interval) {
            this.interval = setInterval(function () {
                if (_this.beaconsList.length > 0 && _this.nearestBeaconList.length > 0)
                    _this.checkNearestStore();
                else {
                    clearInterval(_this.interval);
                }
            }, 5000);
        }
    };
    MapsPage.prototype.onCancel = function (ev) {
        // if (ev.target.value == '') {
        //     this.state = false;
        // }
    };
    MapsPage.prototype.ngOnDestroy = function () {
        if (this.beaconObserver$ != undefined)
            this.beaconObserver$.takeUntil(this.beaconObserver$);
    };
    MapsPage.prototype.gotoPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bluetooth'),
        __metadata("design:type", Object)
    ], MapsPage.prototype, "bluetoothModal", void 0);
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-maps',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/maps/maps.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n                <ion-col col-2>\n                        <ion-icon *ngIf="!hideBackButton" name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n                    </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="{{userdataProvider?.selectMallLogo}}" (click)="gotoPage(\'HomePage\')">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n<!-- <header [canShowMenu]=true [showBackButton]=true></header> -->\n\n\n\n<ion-content class="main">\n    <div class="searchbar">\n        <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)" (ionClear)="onCancel($event)">\n        </ion-searchbar>\n        <ion-list *ngIf="filteredList.length > 0">\n            <ion-item *ngFor="let f of filteredList" (click)="selectedLocation(f)">{{f.name}}</ion-item>\n        </ion-list>\n    </div>\n    <div id="mallmap" class="spur-fullscreen"></div>\n</ion-content>\n\n\n<mymodal #bluetooth title="Turn on Bluetooth" (closeClicked)="closeBluetoothModal()">\n    <ion-grid>\n        <div>\n            <p text-center>{{ "MODALS.STATIC_TEXT.BLUETOOTH_1" | translate }}\n                <ion-icon ios="ios-bluetooth" md="md-bluetooth"></ion-icon> {{ "MODALS.STATIC_TEXT.BLUETOOTH_2" | translate }}”</p>\n        </div>\n        <ion-row>\n            <ion-col col-12>\n                <button ion-button color="dark" (click)="openBluetoothSettings()">{{ "MODALS.BUTTONS.SETTINGS" | translate }}</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</mymodal>'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/maps/maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__["a" /* UserdataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_beacon_beacon__["a" /* BeaconProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_open_native_settings__["a" /* OpenNativeSettings */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_5__providers_stores_stores__["a" /* StoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ })

});
//# sourceMappingURL=5.js.map