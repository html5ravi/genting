webpackJsonp([10],{

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDetailsPageModule", function() { return StoreDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_details__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stores_stores__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StoreDetailsPageModule = /** @class */ (function () {
    function StoreDetailsPageModule() {
    }
    StoreDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__store_details__["a" /* StoreDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__store_details__["a" /* StoreDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_stores_stores__["a" /* StoresProvider */]]
        })
    ], StoreDetailsPageModule);
    return StoreDetailsPageModule;
}());

//# sourceMappingURL=store-details.module.js.map

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

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StoreDetailsPage = /** @class */ (function () {
    function StoreDetailsPage(navCtrl, navParams, storesProvider, userdataProvider, commonProvider, analytics, excepProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storesProvider = storesProvider;
        this.userdataProvider = userdataProvider;
        this.commonProvider = commonProvider;
        this.analytics = analytics;
        this.excepProvider = excepProvider;
        this.storesPromotionList = [];
        this.currentdate = __WEBPACK_IMPORTED_MODULE_7_moment___default()().format('YYYY-MM-DD');
        this.storedata = this.navParams.get("storedata");
        if (this.storedata)
            this.getStorePromotionDetails();
        this.unitnumber = this.navParams.get('unitnumber');
        if (this.unitnumber)
            this.getStoreDetails();
        this.userdataProvider.getAuthToken().then(function (authToken) {
            _this._auth = authToken;
        });
        this.analytics.fa.logEvent('StoreDetailedInfoPage');
    }
    StoreDetailsPage.prototype.getStorePromotionDetails = function () {
        var _this = this;
        this.storesProvider.getAllPromotions(false).subscribe(function (res) {
            _this.storesPromotionList = res.data.filter(function (promo) {
                if (promo.associatedstore[0].storename == _this.storedata.storename) {
                    if (promo.displaystartdate && promo.displayenddate) {
                        if (__WEBPACK_IMPORTED_MODULE_7_moment___default()(promo.displaystartdate).isSameOrBefore(_this.currentdate, 'day') && __WEBPACK_IMPORTED_MODULE_7_moment___default()(promo.displayenddate).isSameOrAfter(_this.currentdate, 'day') && promo.isactive)
                            return promo;
                    }
                    else {
                        if (promo.isactive)
                            return promo;
                    }
                }
            });
        }, function (err) { return _this.excepProvider.excpHandler(err); });
    };
    StoreDetailsPage.prototype.gotoPromotion = function (promotion) {
        this.navCtrl.push('PromotionBannerPage', { promotion: promotion });
    };
    StoreDetailsPage.prototype.gotoMapPage = function (uid) {
        this.navCtrl.setRoot("MapsPage", { unitnumber: uid });
    };
    StoreDetailsPage.prototype.shareSocial = function (url) {
        var _this = this;
        this.userdataProvider.getSelectedMall().then(function (malldata) {
            _this.mall = JSON.parse(malldata);
            _this.websiteUrl = _this.mall.websiteurl;
            var message = "I am at " + _this.storedata.storename + ", " + _this.userdataProvider.selectedMall + "," + _this.websiteUrl + ".";
            _this.commonProvider.shareViaSocailMedia(message);
        });
    };
    StoreDetailsPage.prototype.getStoreDetails = function () {
        var _this = this;
        this.storesProvider.getAllStores().subscribe(function (data) {
            _this.storedata = data.find(function (s) { return s.unitnumber == _this.unitnumber; });
            if (_this.storedata)
                _this.getStorePromotionDetails();
        });
    };
    StoreDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-store-details',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/store-details/store-details.html"*/'\n\n<header [canShowMenu]=true [showBackButton]=true></header>\n\n\n<ion-content no-padding no-bounce #container>\n  <figure no-margin>\n    <img *ngIf="storedata && storedata?.brandimage" class="storeImg" [defaultImage]="\'assets/images/default-Img.png\'" [lazyLoad]="storedata?.brandimage"/>\n    <img *ngIf="storedata && !storedata?.brandimage" src="assets/images/defaultimg.png" class="storeImg" />\n    <img  *ngIf="!storedata" src="assets/images/defaultimg.png" class="storeImg"/>\n  </figure>\n  <ion-card-content *ngIf="storedata">\n\n    <h4>{{storedata?.storename}}</h4>\n    <p [innerHtml]="storedata?.description | safehtml"> </p>\n    <h6 *ngIf="storedata?.storehours">{{ "STORE_DETAILS_PAGE.STATIC_TEXT.STORE_HOURS" | translate }}:</h6>\n    <p no-margin [innerHtml]="storedata?.storehours | safehtml"></p>\n    <h6 *ngIf="storedata?.bestentrance">{{ "STORE_DETAILS_PAGE.STATIC_TEXT.ENTRANCE" | translate }}:</h6>\n    <p no-margin >{{storedata?.bestentrance}}</p>\n    <h6 *ngIf="storedata?.locationincenter">{{ "STORE_DETAILS_PAGE.STATIC_TEXT.CENTER" | translate }}:</h6>\n    <p no-margin>{{storedata?.locationincenter}}</p>\n  </ion-card-content>\n  <ion-card-content  *ngIf="!storedata">\n      <h4>{{ "STORE_DETAILS_PAGE.STATIC_TEXT.SOON" | translate }}</h4>\n  </ion-card-content>\n<strong *ngIf="storedata" class="divider"></strong>\n<ion-card-content *ngIf="storedata">\n  <button ion-button block color="dark" margin-bottom padding (click)="gotoMapPage(storedata?.unitnumber)">{{ "STORE_DETAILS_PAGE.BUTTONS.VISIT_STORE" | translate }}</button>\n  <button ion-button block color="dark" margin-bottom  *ngIf="storedata?.phone"><a href="tel:{{storedata?.phone}}">{{ "STORE_DETAILS_PAGE.BUTTONS.CALL" | translate }} {{storedata?.phone}}</a></button>\n  <button ion-button block color="dark" margin-bottom padding (click)="shareSocial(storedata?.websiteurl)">\n    {{ "STORE_DETAILS_PAGE.BUTTONS.SHARE" | translate }}</button>\n  <h3 text-uppercase *ngIf="storesPromotionList.length > 0 ">{{storedata?.storename}} offers</h3>\n    \n  <ul class="sliderWrap">\n      <li *ngFor="let promo of storesPromotionList" (click)="gotoPromotion(promo)">\n          <figure>\n            <img *ngIf="promo?.bannerimage"  [defaultImage]="\'assets/images/default-Img.png\'" [lazyLoad]="promo?.bannerimage" [scrollObservable]="container.ionScroll"/>\n            <img *ngIf="!promo?.bannerimage && promo?.associatedstore[0]?.brandlogo" [defaultImage]="\'assets/images/default-Img.png\'" [lazyLoad]="promo?.associatedstore[0]?.brandlogo" [scrollObservable]="container.ionScroll" >\n            <img *ngIf="!promo?.bannerimage && !promo?.associatedstore[0]?.brandlogo && promo?.associatedstore[0]?.brandimage" [defaultImage]="\'assets/images/default-Img.png\'" [lazyLoad]="promo?.associatedstore[0]?.brandimage" [scrollObservable]="container.ionScroll">\n            <img *ngIf="!promo?.bannerimage && !promo?.associatedstore[0]?.brandlogo && !promo?.associatedstore[0]?.brandimage" src="assets/images/defaultimg.png">\n          </figure>\n          <figcaption>{{promo?.promotiontitle}}</figcaption>\n      </li>\n    </ul>\n\n</ion-card-content>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/store-details/store-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stores_stores__["a" /* StoresProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userdata_userdata__["a" /* UserdataProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */]])
    ], StoreDetailsPage);
    return StoreDetailsPage;
}());

//# sourceMappingURL=store-details.js.map

/***/ })

});
//# sourceMappingURL=10.js.map