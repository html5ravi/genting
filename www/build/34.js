webpackJsonp([34],{

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_account__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_martjack_shared_module__ = __webpack_require__(942);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyAccountPageModule = /** @class */ (function () {
    function MyAccountPageModule() {
    }
    MyAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_martjack_shared_module__["a" /* MartJackSharedModule */]
            ],
        })
    ], MyAccountPageModule);
    return MyAccountPageModule;
}());

//# sourceMappingURL=my-account.module.js.map

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

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
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


/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAccountPage = /** @class */ (function () {
    function MyAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAccountPage');
    };
    MyAccountPage.prototype.gotoPage = function (page) {
        this.navCtrl.push(page);
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-account',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/my-account/my-account.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n          <ion-col col-2>\n              <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n          </ion-col>\n          <ion-col col-8>\n              <figure no-margin>\n                  <strong>Item Details</strong>\n              </figure>\n          </ion-col>\n          <ion-col col-2>\n              <button ion-button icon-only menuToggle>\n              <ion-icon tappable name="menu"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content no-padding>\n  <ion-card>\n    <ion-card-header padding>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-8>\n            <ion-icon name="ios-contact"></ion-icon>\n            <strong>My details</strong>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button no-margin block color="dark" style="padding: 0 !important" (click)="gotoPage(\'FullProfilePage\')">edit</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    <ion-card-content padding >\n      <p> <strong>Name :</strong> <span> Manju </span></p>\n      <p> <strong>Email :</strong> <span> manju@manju.com </span></p>\n      <p> <strong>Mobile Number :</strong> <span> 123456789 </span></p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n      <ion-card-header padding>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-8>\n              <ion-icon name="person"></ion-icon>\n              <strong>Accounnt information</strong>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n      <ion-card-content padding >\n        <ion-grid no-padding>\n            <ion-row>\n              <ion-col col-8>\n                <p> <span> Genting Rewards </span></p>\n              </ion-col>\n              <ion-col col-4>\n                  <p> <span> 1,408 points </span></p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <p (click)="gotoPage(\'OrderHistoryPage\')"> <span> My Order History</span></p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="mb40">\n        <ion-card-header padding>\n          <ion-grid no-padding>\n            <ion-row (click)="gotoPage(\'ChangePasswordPage\')">\n              <ion-col col-8>\n                <ion-icon name="ios-lock-outline"></ion-icon>\n                <strong>Change Password</strong>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-header>\n      </ion-card>\n    <bottom-menu [pagename]="\'MyAccountPage\'"></bottom-menu>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/my-account/my-account.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object])
    ], MyAccountPage);
    return MyAccountPage;
    var _a, _b;
}());

//# sourceMappingURL=my-account.js.map

/***/ })

});
//# sourceMappingURL=34.js.map