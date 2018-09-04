webpackJsonp([43],{

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDirectoryPageModule", function() { return StoreDirectoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_directory__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stores_stores__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StoreDirectoryPageModule = /** @class */ (function () {
    function StoreDirectoryPageModule() {
    }
    StoreDirectoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__store_directory__["a" /* StoreDirectoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__store_directory__["a" /* StoreDirectoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_stores_stores__["a" /* StoresProvider */]]
        })
    ], StoreDirectoryPageModule);
    return StoreDirectoryPageModule;
}());

//# sourceMappingURL=store-directory.module.js.map

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

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDirectoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_exception_handler_exception_handler__ = __webpack_require__(175);
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








var StoreDirectoryPage = /** @class */ (function () {
    function StoreDirectoryPage(navCtrl, storesProvider, userdataProvider, analytics, excepProvider, translate) {
        this.navCtrl = navCtrl;
        this.storesProvider = storesProvider;
        this.userdataProvider = userdataProvider;
        this.analytics = analytics;
        this.excepProvider = excepProvider;
        this.translate = translate;
        this.pattern = /@"^[0-9*#+?.]+$"/;
        this.storeslist = [];
        this.newStoreList = [];
        this.latestStoreList = [];
        this.storeCategoryList = [];
        this.myInput = null;
        this.category = null;
        this.segment = "all";
        this.analytics.fa.logEvent('StoreDirectoryPage');
    }
    StoreDirectoryPage.prototype.gotoStoreDetail = function (store) {
        this.navCtrl.push("StoreDetailsPage", { storedata: store });
    };
    StoreDirectoryPage.prototype.ionViewWillEnter = function () {
        this.getStoreList();
        this.getStoreCatagoryList();
        this.sortStoreByCategory();
    };
    StoreDirectoryPage.prototype.onInput = function (ev) {
        this.segment = "all";
        if (!this.myInput) {
            this.category = null;
            this.sortStoreByCategory();
        }
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
    StoreDirectoryPage.prototype.getStoreList = function () {
        var _this = this;
        this.storesProvider.getAllStores().subscribe(function (res) {
            _this.storeslist = res;
            _this.latestStoreList = _this.storeslist;
        });
    };
    StoreDirectoryPage.prototype.getStoreCatagoryList = function () {
        var _this = this;
        this.storesProvider.getStoreCatagoryList().subscribe(function (result) {
            _this.storeCategoryList = result;
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    StoreDirectoryPage.prototype.selectStore = function (store) {
        this.myInput = store.storename;
        this.sortStoreByStoreName(this.myInput);
        this.newStoreList = [];
    };
    StoreDirectoryPage.prototype.headerByStartingLetter = function (store) {
        var index = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["findIndex"])(this.latestStoreList, store);
        if (index == 0)
            return store.storename.charAt(0);
        return this.latestStoreList[index - 1].storename.charAt(0) != this.latestStoreList[index].storename.charAt(0) ? store.storename.charAt(0) : '';
    };
    StoreDirectoryPage.prototype.gotoMapPage = function (unitno) {
        this.navCtrl.push("MapsPage", { unitnumber: unitno, hidebackbutton: true });
    };
    StoreDirectoryPage.prototype.getStoreLetter = function (store) {
        return Object.keys(store);
    };
    StoreDirectoryPage.prototype.getUpperCase = function (storeName) {
        return storeName.charAt(0).toUpperCase();
    };
    StoreDirectoryPage.prototype.sortStoreByCategory = function () {
        this.segment = 'all';
        this.myInput = null;
        var queryselector = this.category;
        if (queryselector) {
            this.latestStoreList = this.storeslist.filter(function (stores) {
                if (queryselector.length == 0)
                    return stores;
                else {
                    return queryselector.find(function (categoryname) { return stores.storecategory[0].categoryname === categoryname; });
                }
            });
        }
        else if (queryselector == null) {
            this.latestStoreList = this.storeslist;
        }
        else {
        }
    };
    StoreDirectoryPage.prototype.sortStoreByStoreName = function (storename) {
        this.latestStoreList = this.storeslist.filter(function (data) { return data.storename === storename; });
    };
    StoreDirectoryPage.prototype.segmentChanged = function ($event) {
        var _this = this;
        if ($event.value == 'all') {
            this.myInput = null;
            this.category = null;
            this.sortStoreByCategory();
            return;
        }
        if ($event.value == 'others') {
            this.myInput = null;
            this.category = null;
            this.latestStoreList = this.storeslist.filter(function (data) {
                return _this.pattern.test(data.storename.charAt(0));
            });
        }
        else {
            this.myInput = null;
            this.category = null;
            var value_1 = $event.value.split('-');
            this.latestStoreList = this.storeslist.filter(function (data) {
                return data.storename.charAt(0).toLowerCase().charCodeAt(0) >= value_1[0].charCodeAt(0) && data.storename.charAt(0).toLowerCase().charCodeAt(0) <= value_1[1].charCodeAt(0);
            });
        }
    };
    StoreDirectoryPage.prototype.gotoPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    StoreDirectoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-store-directory',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/store-directory/store-directory.html"*/'\n  <!-- <header [canShowMenu]=true [showBackButton]=true></header> -->\n\n  <ion-header>\n    <ion-navbar>\n        <ion-row>\n                <ion-col col-2>\n                        <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n                    </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="{{userdataProvider?.selectMallLogo}}" (click)="gotoPage(\'HomePage\')">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content no-padding no-bounce>\n  <ion-card-content padding>\n  <h3 no-margin>{{ "STORE_DIRECTORY_PAGE.STATIC_TEXT.STORE" | translate }}</h3>\n  <ion-searchbar no-padding\n  placeholder="Search by store name"\n  animated:true\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n<ion-list *ngIf="newStoreList.length > 0" class="searchAutoComplete border">\n    <ion-item *ngFor="let store of newStoreList">\n      <p (click)="selectStore(store)">{{ store.storename }}</p>\n    </ion-item>\n  </ion-list> \n\n    <h6>{{ "STORE_DIRECTORY_PAGE.STATIC_TEXT.FILTER" | translate }}</h6>\n    <ion-item no-padding class="itemCustom">\n        <ion-label>{{ "COMMON.STATIC_TEXT.CATEGORIES" | translate }}</ion-label>\n        <ion-select [(ngModel)]="category" (ngModelChange)="sortStoreByCategory()" name="brandone" multiple="true">\n          <ion-option *ngFor="let storecat of storeCategoryList" value="{{storecat?.categoryname}}">{{storecat?.categoryname}}</ion-option>\n        </ion-select>\n    </ion-item>\n    <h6>{{ "STORE_DIRECTORY_PAGE.STATIC_TEXT.SORT" | translate }}</h6>\n    <ion-segment [(ngModel)]="segment" color="dark" (ionChange)="segmentChanged($event)">\n        <ion-segment-button active value="all">\n          ALL\n        </ion-segment-button>\n        <ion-segment-button value="a-l">\n         A-L \n        </ion-segment-button>\n        <ion-segment-button value="m-z">\n         M-Z\n        </ion-segment-button>\n        <ion-segment-button value="others">\n            OTHERS\n        </ion-segment-button>\n      </ion-segment>\n    </ion-card-content>\n    <section class="scrollItem">\n     <section *ngFor="let store of latestStoreList" >\n      <ion-list class="autoComplete">\n         <ion-list-header no-margin *ngIf="headerByStartingLetter(store)">\n           {{getUpperCase(store?.storename)}}</ion-list-header> \n        <ion-item >\n            <ion-row class="tbl">\n              <ion-col col-2 class="tbl-cell">\n                  <ion-avatar item-start>\n                      <img *ngIf="store?.brandimage" src="{{store?.brandimage}}" >\n                      <img *ngIf="!store?.brandimage" src="assets/images/defaultimg.png">\n                    </ion-avatar>\n              </ion-col>\n              <ion-col tappable col-8 (click)="gotoStoreDetail(store)" class="tbl-cell">\n                  <span>{{store?.storename}}</span>\n              </ion-col>\n              <ion-col col-2 class="tbl-cell">\n                  <ion-icon tappable name="ios-navigate" (click)="gotoMapPage(store?.unitnumber)"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n      </ion-list>\n    </section>\n\n    </section>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/store-directory/store-directory.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__["a" /* StoresProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__["a" /* UserdataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_analytics_analytics__["a" /* AnalyticsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], StoreDirectoryPage);
    return StoreDirectoryPage;
}());

//# sourceMappingURL=store-directory.js.map

/***/ })

});
//# sourceMappingURL=43.js.map