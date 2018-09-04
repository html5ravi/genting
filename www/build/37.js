webpackJsonp([37],{

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullProfilePageModule", function() { return FullProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_profile__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stores_stores__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FullProfilePageModule = /** @class */ (function () {
    function FullProfilePageModule() {
    }
    FullProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__full_profile__["a" /* FullProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__full_profile__["a" /* FullProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_stores_stores__["a" /* StoresProvider */]]
        })
    ], FullProfilePageModule);
    return FullProfilePageModule;
}());

//# sourceMappingURL=full-profile.module.js.map

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

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateName */
/* harmony export (immutable) */ __webpack_exports__["a"] = noWhitespaceValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = onlyNumbers;
function validateName(c) {
    var name_pattern = "[a-zA-Z][a-zA-Z ]+";
    return name_pattern.concat(c.value) ? null : {
        validateName: {
            valid: false
        }
    };
}
function noWhitespaceValidator(control) {
    if (control.value) {
        var isWhitespace = (control.value || '').trim().length === 0;
        // console.log((control.value || '').trim().length);
        // console.log(isWhitespace, "is white space");
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    }
    else {
        return { 'whitespace': false };
    }
}
function onlyNumbers(control) {
    if (control.value) {
        var isValid = (/^[0-9]+$/).test(control.value);
        return isValid ? null : { 'onlynumber': true };
    }
    else {
        return { 'onlynumber': false };
    }
}
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_stores_stores__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__validator_profile__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var FullProfilePage = /** @class */ (function () {
    function FullProfilePage(navCtrl, formBuilder, authProvider, alertProvider, userdataProvider, storesProvider, commonProvider, events, menuCtrl, excepProvider, analytics, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.alertProvider = alertProvider;
        this.userdataProvider = userdataProvider;
        this.storesProvider = storesProvider;
        this.commonProvider = commonProvider;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.excepProvider = excepProvider;
        this.analytics = analytics;
        this.translate = translate;
        this.userProfileData = {};
        // userData = {};
        this.storesList = [];
        this.userMobileData = {
            countrycode: '',
            mobile: ''
        };
        this.mobileErr = '';
        this.countryList = this.commonProvider.getCountryList();
        this.stateList = this.commonProvider.getStateList();
        this.ageList = this.commonProvider.getAgeList();
        this.viplounge = this.commonProvider.getVipLounge();
        this.household = this.commonProvider.getHouseHold();
        this.userdataProvider.getUserEmail().then(function (useremail) {
            _this._email = useremail;
            _this.getProfileInfo();
        });
        this.userdataProvider.getAuthToken().then(function (token) {
            _this._auth_token = token;
        });
        this.ProfileForm = this.formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
            address_city: [''],
            address_postalcode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_9__validator_profile__["a" /* noWhitespaceValidator */]])],
            address_country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            age_group: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            address_state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            household_income: [''],
            referral_source: [''],
            preferred_brand_one: [''],
            preferred_brand_two: [''],
            preferred_brand_thre: [''],
            preferred_brand_four: [''],
            address_line: [''],
            otherbrands: [''],
            subcribe_thirdparty: [''],
            mobile: ['']
        });
        this.firstname = this.ProfileForm.controls['firstname'];
        this.lastname = this.ProfileForm.controls['lastname'];
        this.address_city = this.ProfileForm.controls['address_city'];
        this.address_postalcode = this.ProfileForm.controls['address_postalcode'];
        this.address_country = this.ProfileForm.controls['address_country'];
        this.age_group = this.ProfileForm.controls['age_group'];
        this.gender = this.ProfileForm.controls['gender'];
        this.address_line = this.ProfileForm.controls['address_line'];
        this.address_state = this.ProfileForm.controls['address_state'];
        this.household_income = this.ProfileForm.controls['household_income'];
        this.referral_source = this.ProfileForm.controls['referral_source'];
        this.address_line = this.ProfileForm.controls['address_line'];
        this.preferred_brand_one = this.ProfileForm.controls['preferred_brand_one'];
        this.preferred_brand_two = this.ProfileForm.controls['preferred_brand_two'];
        this.preferred_brand_thre = this.ProfileForm.controls['preferred_brand_thre'];
        this.preferred_brand_four = this.ProfileForm.controls['preferred_brand_four'];
        this.otherbrands = this.ProfileForm.controls['otherbrands'];
        this.subcribe_thirdparty = this.ProfileForm.controls['subcribe_thirdparty'];
        this.mobile = this.ProfileForm.controls['mobile'];
        this.events.subscribe('userlogin', function (data) {
            if (data)
                _this.getProfileInfo();
        });
        this.analytics.fa.logEvent('ProfilePage');
    }
    FullProfilePage.prototype.ionViewWillEnter = function () {
        this.getBrands();
        if (this.menuCtrl.isOpen())
            this.menuCtrl.close();
    };
    FullProfilePage.prototype.profileData = function () {
        var _this = this;
        if (!this.userProfileData.mobile) {
            if (!this.userProfileData.mobile && this.userMobileData.countrycode.length <= 0 || this.userMobileData.countrycode.length > 4) {
                this.mobileErr = 'Please enter a valid country code';
                return;
            }
            else if (!this.userProfileData.mobile && this.userMobileData.mobile.length < 8 || this.userMobileData.mobile.length > 12) {
                this.mobileErr = 'Please enter a valid mobile number';
                return;
            }
            else if (!this.userProfileData.mobile && !(/^[0-9]+$/).test(this.userMobileData.countrycode) || !(/^[0-9]+$/).test(this.userMobileData.mobile)) {
                this.mobileErr = 'Country code or mobile number cannot contain any characters';
                return;
            }
            else {
                this.mobileErr = '';
                this.ProfileForm.patchValue({
                    mobile: this.userProfileData.mobile
                });
                this.subscribeToChannel();
                this.userdataProvider.getAuthToken().then(function (auth_token) {
                    _this.authProvider.updateProfile(_this.ProfileForm.value, _this._email, auth_token, '', '', _this.userMobileData).subscribe(function (res) {
                        if (res[0].code == 200) {
                            _this.commonProvider.getUserData(auth_token);
                            _this.openProfileModal();
                        }
                        else {
                            var toast = _this.alertProvider.presentToast(res[0].message);
                            toast.present();
                        }
                    }, function (err) { return _this.excepProvider.excpHandler(err); });
                }, function (err) { return _this.excepProvider.excpHandler(err); });
            }
        }
        else if (this.userProfileData.mobile) {
            this.ProfileForm.patchValue({
                mobile: this.userProfileData.mobile
            });
            this.subscribeToChannel();
            this.userdataProvider.getAuthToken().then(function (auth_token) {
                _this.authProvider.updateProfile(_this.ProfileForm.value, _this._email, auth_token, '', '', _this.userMobileData).subscribe(function (res) {
                    if (res[0].code == 200) {
                        _this.commonProvider.getUserData(auth_token);
                        _this.openProfileModal();
                    }
                    else {
                        var toast = _this.alertProvider.presentToast(res[0].message);
                        toast.present();
                    }
                }, function (err) { return _this.excepProvider.excpHandler(err); });
            }, function (err) { return _this.excepProvider.excpHandler(err); });
        }
        else {
            console.log('else condition');
        }
    };
    FullProfilePage.prototype.getBrands = function () {
        var _this = this;
        this.storesProvider.getBrands().subscribe(function (res) {
            _this.storesList = res.slice();
        });
    };
    FullProfilePage.prototype.getProfileInfo = function () {
        var _this = this;
        this.userProfileData = {
            firstname: this.userdataProvider.getUserFirstName(),
            lastname: this.userdataProvider.getUserLastName(),
            city: this.userdataProvider.getUserCity(),
            zipcode: this.userdataProvider.getUserPostcode(),
            age: this.userdataProvider.getUserAgeGroup(),
            gender: this.userdataProvider.getUserGender(),
            country: this.userdataProvider.getUserCountryOfOrigin(),
            state: this.userdataProvider.getUserState(),
            brandonesec1: this.userdataProvider.getUserHouseholdIncome(),
            brandonesec2: this.userdataProvider.getUserVIPLounge(),
            address: this.userdataProvider.getUserAddress(),
            storeName1: this.userdataProvider.getUserPreferredBrandOne(),
            storeName2: this.userdataProvider.getUserPreferredBrandTwo(),
            storeName3: this.userdataProvider.getUserPreferredBrandThree(),
            storeName4: this.userdataProvider.getUserPreferredBrandFour(),
            mobile: this.userdataProvider.getUserMobileNo(),
            email: this.userdataProvider.getUserEmailId(),
            otherbrands: this.userdataProvider.getOtherBrands(),
        };
        // if(this._auth_token)
        this.userdataProvider.getAuthToken().then(function (token) {
            _this.getSubscription(token);
        });
    };
    FullProfilePage.prototype.openProfileModal = function () {
        this.fullProfileModal.open();
    };
    FullProfilePage.prototype.closeProfileModal = function () {
        this.fullProfileModal.close();
        this.navCtrl.setRoot("HomePage");
    };
    FullProfilePage.prototype.subscribeToChannel = function () {
        this.authProvider.postSubscribe(this._email, this.ProfileForm.value.subcribe_thirdparty ? 1 : 0, this._auth_token).subscribe(function (res) {
        });
    };
    FullProfilePage.prototype.getSubscription = function (auth_token) {
        var _this = this;
        this.authProvider.getSubscribe(this._email, auth_token).subscribe(function (res) {
            console.log(res, "ressss here");
            if (res[0].response['status'].code == 200) {
                var channel = res[0].response.subscriptions.subscription[0].channel;
                channel.find(function (cha) {
                    if (cha.name == "EMAIL") {
                        cha.priority.filter(function (mysub) {
                            if (mysub.name == 'BULK' && mysub.unsubscribed == 'ALL') {
                                _this.userProfileData.subcribe_thidparty = false;
                            }
                            else {
                                _this.userProfileData.subcribe_thidparty = true;
                            }
                        });
                    }
                });
            }
        });
    };
    FullProfilePage.prototype.gotoPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    FullProfilePage.prototype.updateValue = function (field) {
        if (field == 'firstname') {
            this.ProfileForm.patchValue({
                firstname: this.userProfileData['firstname'].trim()
            });
        }
        if (field == 'lastname') {
            this.ProfileForm.patchValue({
                lastname: this.userProfileData['lastname'].trim()
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("fullProfileSuccess"),
        __metadata("design:type", Object)
    ], FullProfilePage.prototype, "fullProfileModal", void 0);
    FullProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-full-profile',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/full-profile/full-profile.html"*/'\n\n  <!-- <header [canShowMenu]=true [showBackButton]=true></header> -->\n\n  <ion-header>\n    <ion-navbar>\n        <ion-row>\n                <ion-col col-2>\n                        <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n                    </ion-col>\n            <ion-col col-8>\n                <figure no-margin>\n                    <img src="{{userdataProvider?.selectMallLogo}}">\n                </figure>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button icon-only menuToggle>\n                <ion-icon tappable name="menu"></ion-icon>\n              </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n  <ion-content no-padding no-bounce>\n  <ion-card-content no-padding padding-left padding-right>\n     \n     \n\n    <form  no-padding margin-top [formGroup]= "ProfileForm" (ngSubmit)="profileData()">\n    \n        <ion-row>\n            <ion-col col-6>\n              <h4>{{ "FULL_PROFILE.STATIC_TEXT.PROFILE" | translate }}</h4>\n            </ion-col>\n            <ion-col col-6 text-right>\n                <button *ngIf="userProfileData?.mobile" ion-button clear [disabled]="!ProfileForm.valid" color="danger" type="submit">{{ "FULL_PROFILE.BUTTONS.SAVE" | translate }}</button>\n              <button *ngIf="!userProfileData?.mobile" ion-button clear [disabled]="!ProfileForm.valid || !userMobileData?.countrycode ||!userMobileData?.mobile" color="danger" type="submit">{{ "FULL_PROFILE.BUTTONS.SAVE" | translate }}</button>\n            </ion-col>\n          </ion-row>\n      <ion-list>\n          <h6 no-margin margin-top>{{ "COMMON.STATIC_TEXT.EMAIL" | translate }}:</h6>\n          <p>{{userProfileData?.email}}</p>\n          <h6 no-margin margin-top *ngIf="userProfileData?.mobile">{{ "COMMON.STATIC_TEXT.MOBILE_NO" | translate }}:</h6>\n          <p *ngIf="userProfileData?.mobile">{{userProfileData?.mobile}}</p>\n      </ion-list>\n      <ion-list  *ngIf="!userProfileData?.mobile">\n          <ion-row>\n              <ion-col col-5>\n                  <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.COUNTRY_CODE" | translate }}</h6>\n              </ion-col>\n              <ion-col col-7>\n                  <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.MOBILE_NO" | translate }}</h6>\n              </ion-col>\n            </ion-row>\n      </ion-list>\n      <ion-list *ngIf="!userProfileData?.mobile">\n        <ion-row class="mobile">\n          <ion-col col-1 no-padding style="margin-top:5px;">\n            <span> + </span>\n          </ion-col>\n          <ion-col col-4>\n          <ion-input type="tel" min="1" max="4" [(ngModel)]="userMobileData.countrycode" [ngModelOptions]="{standalone:true}"></ion-input>\n          </ion-col>\n        <ion-col col-7>\n          <ion-input type="tel" [(ngModel)]="userMobileData.mobile" name="mobile" [ngModelOptions]="{standalone:true}" min="8" max="12"></ion-input>\n        </ion-col>\n        </ion-row>\n        <ion-item *ngIf="mobileErr">\n          <p color="red">{{mobileErr}}</p></ion-item>\n    </ion-list>\n      <ion-list>\n          <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.FIRST_NAME" | translate }}:</h6>\n        <ion-item no-padding>\n          <ion-input type="text"  [(ngModel)]="userProfileData.firstname"  formControlName="firstname" name="firstname" (ionBlur)="updateValue(\'firstname\')"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="firstname.hasError(\'required\') && firstname.touched">\n            <p>*{{ "COMMON.STATIC_TEXT.FIRST_NAME_REQ" | translate }}</p>\n        </ion-item>\n        <!-- <ion-item *ngIf="firstname.touched && firstname.hasError(\'whitespace\')  || firstname.hasError(\'pattern\')">\n            <p>Please enter valid name</p>\n        </ion-item> -->\n        <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.LAST_NAME" | translate }}:</h6>\n        <ion-item no-padding>\n          <ion-input type="text" [(ngModel)]="userProfileData.lastname" formControlName="lastname" name="lastname" (ionBlur)="updateValue(\'lastname\')" ></ion-input>\n        </ion-item>\n        <ion-item *ngIf="lastname.hasError(\'required\') && lastname.touched">\n            <p>*{{ "COMMON.STATIC_TEXT.LAST_NAME_REQ" | translate }}</p>\n        </ion-item>\n        <!-- <ion-item *ngIf="lastname.touched && lastname.hasError(\'whitespace\') || lastname.hasError(\'pattern\')">\n            <p>Please enter valid name</p>\n          </ion-item> -->\n        <h6 no-margin margin-top>{{ "COMMON.STATIC_TEXT.ADDRESS" | translate }}:</h6>\n        <ion-item no-padding>\n          <ion-input type="text" name="address_line" [(ngModel)]="userProfileData.address" formControlName="address_line"></ion-input>\n        </ion-item>\n        <h6 no-margin margin-top>{{ "COMMON.STATIC_TEXT.CITY" | translate }}:</h6>\n        <ion-item no-padding>\n          <ion-input type="text"  formControlName="address_city" [(ngModel)]="userProfileData.city"  name="address_city" ></ion-input>\n        </ion-item>\n        <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.STATE" | translate }}:</h6>\n        <ion-item no-padding class="itemCustom">\n          <ion-label>{{ "COMMON.STATIC_TEXT.SELECT_STATE" | translate }}</ion-label>\n            <ion-select  name="address_state" [(ngModel)]="userProfileData.state" formControlName="address_state">\n              <ion-option *ngFor="let states of stateList; " value="{{states.value}}">{{states.name}}</ion-option>\n            </ion-select>\n            <small>{{ "COMMON.STATIC_TEXT.NOT_FROM_MALAYSIA" | translate }}</small>\n          </ion-item>\n          <ion-item *ngIf="address_state.hasError(\'required\') && address_state.touched">\n            <p>{{ "COMMON.STATIC_TEXT.STATE_REQ" | translate }}</p>\n        </ion-item>\n          <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.ZIP" | translate }}:</h6>\n          <ion-item no-padding>\n              <ion-input type="number" [(ngModel)]="userProfileData.zipcode" name="address_postalcode" formControlName="address_postalcode"></ion-input>\n              <small>{{ "COMMON.STATIC_TEXT.ENTER_00000" | translate }}</small>\n          </ion-item>\n          <ion-item *ngIf="address_postalcode.hasError(\'required\') && address_postalcode.touched">\n              <p>{{ "COMMON.STATIC_TEXT.ZIP_REQ" | translate }}</p>\n            </ion-item>\n            <ion-item *ngIf="address_postalcode.hasError(\'maxlength\') || address_postalcode.hasError(\'minlength\')">\n              <p>{{ "COMMON.STATIC_TEXT.ZIP_REQ_1" | translate }}</p>\n            </ion-item>\n          <ion-item *ngIf="address_postalcode.hasError(\'whitespace\')">\n            <p>{{ "COMMON.STATIC_TEXT.ZIP_REQ_1" | translate }}</p>\n      </ion-item>\n          <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.COUNTRY" | translate }}:</h6>\n          <ion-item no-padding class="itemCustom">\n            <ion-label>{{ "COMMON.STATIC_TEXT.SELECT_COUNTRY" | translate }}</ion-label>\n              <ion-select  [(ngModel)]="userProfileData.country" formControlName="address_country" name="address_country">\n                <ion-option *ngFor="let country of countryList" value="{{country.value}}">{{country.name}}</ion-option>\n              </ion-select>\n          </ion-item>\n          <ion-item *ngIf="address_country.hasError(\'required\') && address_country.touched">\n              <p>{{ "COMMON.STATIC_TEXT.COUNTRY_REQ" | translate }}</p>\n          </ion-item>\n          <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.AGE" | translate }}:</h6>\n          <ion-item no-padding class="itemCustom">\n            <ion-label>{{ "COMMON.STATIC_TEXT.SELECT_AGE" | translate }}</ion-label>\n              <ion-select [(ngModel)]="userProfileData.age" formControlName="age_group" name="age_group">\n                  <ion-option *ngFor="let age of ageList"  value="{{age.value}}">{{age.name}}</ion-option>\n              </ion-select>\n          </ion-item>\n          <ion-item *ngIf="age_group.hasError(\'required\') && age_group.touched">\n              <p>*{{ "COMMON.STATIC_TEXT.AGE_REQ" | translate }}</p>\n          </ion-item>\n          <h6 no-margin margin-top>*{{ "COMMON.STATIC_TEXT.GENDER" | translate }}:</h6>\n          <ion-list radio-group  name="gender" [(ngModel)]="userProfileData.gender" formControlName="gender"> \n            <ion-item>\n                <ion-label>{{ "COMMON.STATIC_TEXT.MALE" | translate }}</ion-label>\n                <ion-radio checked="false" name="male" value="male"></ion-radio>\n              </ion-item>\n              <ion-item>\n                  <ion-label>{{ "COMMON.STATIC_TEXT.FEMALE" | translate }}</ion-label>\n                  <ion-radio checked="false" name="female" value="female"></ion-radio>\n              </ion-item>\n            </ion-list>\n            <ion-item *ngIf="gender.hasError(\'required\') && gender.touched">\n                <p>{{ "COMMON.STATIC_TEXT.GENDER_REQ" | translate }}</p>\n            </ion-item>\n            <h6 no-margin margin-top>{{ "FULL_PROFILE.STATIC_TEXT.WHAT_BRAND" | translate }}</h6>\n              <ion-item no-padding class="itemCustom">\n                <ion-label>{{ "FULL_PROFILE.STATIC_TEXT.SELECT_BRANDS" | translate }}</ion-label>\n                <ion-select  name="preferred_brand_one" [(ngModel)]="userProfileData.storeName1" formControlName="preferred_brand_one">\n                  <ion-option *ngFor="let store1 of storesList" value="{{store1?.brandname}}">{{store1?.brandname}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item no-padding class="itemCustom">\n                <ion-label>{{ "FULL_PROFILE.STATIC_TEXT.SELECT_BRANDS" | translate }}</ion-label>\n                <ion-select  name="preferred_brand_two" [(ngModel)]="userProfileData.storeName2" formControlName="preferred_brand_two">\n                  <ion-option *ngFor="let store2 of storesList" value="{{store2?.brandname}}">{{store2?.brandname}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item no-padding class="itemCustom">\n                <ion-label>{{ "FULL_PROFILE.STATIC_TEXT.SELECT_BRANDS" | translate }}</ion-label>\n                <ion-select  name="preferred_brand_thre" [(ngModel)]="userProfileData.storeName3" formControlName="preferred_brand_thre">\n                  <ion-option *ngFor="let store3 of storesList" value="{{store3?.brandname}}">{{store3?.brandname}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item no-padding class="itemCustom">\n                <ion-label>{{ "FULL_PROFILE.STATIC_TEXT.SELECT_BRANDS" | translate }}</ion-label>\n                <ion-select  name="preferred_brand_four" [(ngModel)]="userProfileData.storeName4" formControlName="preferred_brand_four">\n                  <ion-option *ngFor="let store4 of storesList" value="{{store4?.brandname}}">{{store4?.brandname}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <h6 no-margin margin-top>{{ "FULL_PROFILE.STATIC_TEXT.OTHER_BRANDS" | translate }}:</h6>\n              <ion-item no-padding>\n                <ion-input type="text" name="otherbrands" [(ngModel)]="userProfileData.otherbrands" formControlName="otherbrands"></ion-input>\n              </ion-item>\n              <h6 no-margin margin-top>{{ "FULL_PROFILE.STATIC_TEXT.WHAT_HOUSEHOLD_INCOME" | translate }}</h6>\n              <ion-item no-padding class="itemCustom">\n                <ion-label>{{ "FULL_PROFILE.STATIC_TEXT.ANNUAL_INCOME" | translate }}</ion-label>\n                <ion-select  name="household_income" [(ngModel)]="userProfileData.brandonesec1" formControlName="household_income">\n                  <ion-option *ngFor="let hs of household" value="{{hs.value}}">{{hs.name}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <h6 no-margin margin-top>{{ "FULL_PROFILE.STATIC_TEXT.HOW_HEARD" | translate }}</h6>\n              <ion-item no-padding class="itemCustom">\n                  <ion-label>{{ "FULL_PROFILE.STATIC_TEXT.SELECT" | translate }}</ion-label>\n                  <ion-select  formControlName="referral_source" [(ngModel)]="userProfileData.brandonesec2" name="referral_source">\n                    <ion-option *ngFor="let vip of viplounge" value="{{vip.value}}">{{vip.name}}</ion-option>\n                  </ion-select>\n                </ion-item>\n            <ion-item no-padding>\n                <ion-label style="text-transform:none !important;">{{ "FULL_PROFILE.STATIC_TEXT.THIRD_PARTY" | translate }}</ion-label>\n                <ion-checkbox  name="subcribe_thirdparty" [(ngModel)]="userProfileData.subcribe_thidparty" formControlName="subcribe_thirdparty" color="dark" checked="false"></ion-checkbox>\n              </ion-item>\n      </ion-list>\n    </form>\n  </ion-card-content>\n</ion-content>\n\n\n<!-- Modal for Saving User Profile Update Data -->\n<mymodal #fullProfileSuccess (closeClicked)="closeProfileModal()">\n  <!--<h2 class="errorInfo"></h2>-->\n  <p text-center>{{ "MODALS.STATIC_TEXT.UPDATE_PROFILE" | translate }}</p>\n  <ion-grid>\n      <ion-row>\n          <ion-col col-12>\n              <button ion-button  (click)="closeProfileModal()">{{ "MODALS.BUTTONS.OK" | translate }}</button>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</mymodal>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/full-profile/full-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_userdata_userdata__["a" /* UserdataProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_stores_stores__["a" /* StoresProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_analytics_analytics__["a" /* AnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
    ], FullProfilePage);
    return FullProfilePage;
}());

//# sourceMappingURL=full-profile.js.map

/***/ })

});
//# sourceMappingURL=37.js.map