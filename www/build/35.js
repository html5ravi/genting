webpackJsonp([35],{

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutPageModule", function() { return CheckOutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_out__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_martjack_shared_module__ = __webpack_require__(942);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckOutPageModule = /** @class */ (function () {
    function CheckOutPageModule() {
    }
    CheckOutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_out__["a" /* CheckOutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_out__["a" /* CheckOutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_martjack_shared_module__["a" /* MartJackSharedModule */]
            ],
        })
    ], CheckOutPageModule);
    return CheckOutPageModule;
}());

//# sourceMappingURL=check-out.module.js.map

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

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutPage; });
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


var CheckOutPage = /** @class */ (function () {
    function CheckOutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthPerson = [
            {
                "name": "AUTHORISED PICK-UP PERSON",
            }
        ];
        this.PaymentDetail = [
            {
                "name": "ONLINE PAYMENT",
            }
        ];
        this.PaymentDetail1 = [
            {
                "name": "E-WALLET",
            }
        ];
        this.descriptionData = this.AuthPerson;
        this.payment = this.PaymentDetail;
        this.payment1 = this.PaymentDetail1;
    }
    CheckOutPage.prototype.ionViewDidLoad = function () {
        this.checkout = 'Pickup';
    };
    CheckOutPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group))
            this.shownGroup = group;
        else
            this.shownGroup = group;
    };
    CheckOutPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    CheckOutPage.prototype.gotoPage = function (page) {
        this.navCtrl.push(page);
    };
    CheckOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-check-out',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/check-out/check-out.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-row>\n        <ion-col col-2>\n            <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n        </ion-col>\n        <ion-col col-8>\n            <figure no-margin>\n                <strong>Check out</strong>\n            </figure>\n        </ion-col>\n    <!-- <ion-col col-2>\n        <button ion-button icon-only menuToggle>\n        <ion-icon tappable name="menu"></ion-icon>\n      </button>\n    </ion-col> -->\n      </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-card padding>\n      <h6>Choose pickup center and date</h6>\n      <ion-segment [(ngModel)]="checkout">\n          <ion-segment-button value="Pickup">\n            <strong> </strong> \n          </ion-segment-button>\n          <ion-segment-button value="Payment">\n            <strong>  </strong> \n          </ion-segment-button>\n          <ion-segment-button value="Done">\n                <strong>  </strong> \n          </ion-segment-button>\n        </ion-segment>\n        <hr class="line1" />\n        <hr class="line2" />\n        <ion-grid no-padding class="textApply">\n            <ion-row>\n                <ion-col text-center>\n                    <span>Pick Up</span>\n                </ion-col>\n                <ion-col text-center>\n                    <span>Payment</span>\n                </ion-col>\n                <ion-col text-center>\n                    <span>Done</span>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n        <section [ngSwitch]="checkout" style="position: relative;">\n            <ion-list *ngSwitchCase="\'Pickup\'">\n                <ion-item>\n                    <ion-card padding>\n                        <h5>Pick Up at Center</h5>\n                        <button ion-button block color="secondary">Genting Highlands Premium Outlets</button>\n                        <h5>Pick Up date</h5>\n                        <article class="date">\n                            <ion-icon name="calendar"></ion-icon>\n                        </article>\n                        <small>Please pickup your items within operating houres.</small>\n                        <small class="bold">All centers open from 10 AM to 10 PM from Monday to Sunday</small>\n                    </ion-card>\n                    <section class="userDetail">\n                        <section class="Profiledetail">\n                            <ion-row>\n                                <ion-col>\n                                    <strong>my details</strong>\n                                </ion-col>\n                                <ion-col text-right>\n                                    <ion-icon name="create"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ul>\n                                <li>manjunath</li>\n                                <li>+90 00000000</li>\n                                <li>manju@manju.com</li>\n                            </ul>\n                        </section>\n                        <section class="Profiledetail">\n                            <ion-row>\n                                <ion-col>\n                                    <strong>Authorised pickup person</strong>\n                                </ion-col>\n                                <ion-col text-right>\n                                    <ion-icon name="create"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ul>\n                                <li>manjunath</li>\n                                <li>+90 00000000</li>\n                                <li>manju@manju.com</li>\n                            </ul>\n                        </section>\n                        <ion-list>\n                            <ion-item *ngFor="let desc of descriptionData; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n                                <h3>\n                                    <span>{{desc.name}}</span>\n                                    <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'remove-circle\' : \'add-circle\'"></ion-icon>\n                                </h3>\n                                <article class="insideData" *ngIf="isGroupShown(i)">\n                                    <form>\n                                        <ion-list>\n                                            <ion-item>\n                                                <ion-input type="text" placeholder="Name"></ion-input>\n                                            </ion-item>\n                                            <ion-item>\n                                                <ion-input type="number" placeholder="IC / Passport Number"></ion-input>\n                                            </ion-item>\n                                            <ion-item>\n                                                <ion-input type="number" placeholder="Contact Number"></ion-input>\n                                            </ion-item>\n                                            <ion-item>\n                                                <ion-input type="email" placeholder="Email"></ion-input>\n                                            </ion-item>\n                                        </ion-list>\n                                        <small>\n                                            You and authorised pickup person will receive notification email and SMS when your item is available for pickup\n                                        </small>\n                                        <button ion-button color="dark" outline>add</button>\n                                    </form>\n                                </article>\n                                </ion-item>\n                        </ion-list>\n                    </section>\n                    <ion-row>\n                        <ion-col text-center>\n                            <input type="checkbox">\n                            <label>\n                                    I agreed to the\n                                <a href="javascript:;">Terms & Conditions</a>\n                                , and\n                                <a href="javascript:;">Privacy Policy</a>\n                            </label>\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n                <ion-card padding>\n                    <article class="bottomButton">\n                        <button ion-button margin-bottom outline block color="dark">back to my bag</button>\n                        <button ion-button block color="dark">continue to payment mode</button>\n                    </article>\n                </ion-card>\n            </ion-list>\n            <ion-list *ngSwitchCase="\'Payment\'">\n                <ion-item>\n                    <article class="total">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col>\n                                    <span>total</span>\n                                </ion-col>\n                                <ion-col text-right>\n                                    <h4>RM 389.00</h4>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </article>\n                    <section class="userDetail">\n                        <h2>\n                            <ion-icon name="card"></ion-icon>\n                            <strong> CREDIT / DEBIT CARD</strong>\n                        </h2>\n                        <ion-list>\n                            <ion-item *ngFor="let pay of payment; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n                                <h3>\n                                    <span>{{pay.name}}</span>\n                                    <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'ios-arrow-down\' : \'ios-arrow-up\'"></ion-icon>\n                                </h3>\n                                <article class="insideData" *ngIf="isGroupShown(i)">\n                                    <form>\n                                        <ion-item style="border: 1px solid #000 !important;">\n                                            <label style="padding-left: 5px;">Select your Bank</label>\n                                            <ion-select [(ngModel)]="toppings1" name="toppings1" >\n                                                <ion-option>Bacon</ion-option>\n                                                <ion-option>Black Olives</ion-option>\n                                                <ion-option>Extra Cheese</ion-option>\n                                                <ion-option>Mushrooms</ion-option>\n                                                <ion-option>Pepperoni</ion-option>\n                                                <ion-option>Sausage</ion-option>\n                                            </ion-select>\n                                        </ion-item>\n                                        <button ion-button block color="dark" style="width:100% !important;">Pay now</button>\n                                        <p>\n                                            After order confirmation you will be redirect to a secure payment system. Login with your credentials to make payment\n                                        </p>\n                                        \n                                    </form>\n                                </article>\n                            </ion-item>\n                        </ion-list>\n                        <ion-list>\n                            <ion-item *ngFor="let pay1 of payment1; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n                                <h3>\n                                    <span>{{pay1.name}}</span>\n                                    <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'ios-arrow-down\' : \'ios-arrow-up\'"></ion-icon>\n                                </h3>\n                                <article class="insideData" *ngIf="isGroupShown(i)">\n                                    <form>\n                                        <ion-list>\n                                            <ion-item style="border: 1px solid #000 !important;">\n                                                <ion-label style="padding-left: 5px;">Select your Bank</ion-label>\n                                                <ion-select [(ngModel)]="toppings" name="toppings">\n                                                    <ion-option>Bacon</ion-option>\n                                                    <ion-option>Black Olives</ion-option>\n                                                    <ion-option>Extra Cheese</ion-option>\n                                                    <ion-option>Mushrooms</ion-option>\n                                                    <ion-option>Pepperoni</ion-option>\n                                                    <ion-option>Sausage</ion-option>\n                                                </ion-select>\n                                            </ion-item>\n                                        </ion-list>\n                                        <button ion-button block color="dark" style="width:100% !important;">Pay now</button>\n                                        <p>\n                                            After order confirmation you will be redirect to a secure payment system. Login with your credentials to make payment\n                                        </p>\n                                        \n                                    </form>\n                                </article>\n                            </ion-item>\n                        </ion-list>\n                    </section>\n                </ion-item>\n            </ion-list>\n            <ion-list *ngSwitchCase="\'Done\'">\n                <ion-item>\n                    <section padding class="orderConfirm">\n                        <article>\n                            <h3>Congrajulations Manju,</h3>\n                            <p>Thank you for shopping with us. <br/>\n                            Your order is confirmed</p>\n                            <h4>order number\n                                <strong>1234567</strong>\n                            </h4>\n                            <small>Please collect your purchased item at our center</small>\n                            <h2>Genting Highlands Premium Outlets <br />\n                                11 may 2018 </h2>\n                        </article>\n                    </section>\n                    <section class="userDetail">\n                        <section class="Profiledetail">\n                            <ion-row>\n                                <ion-col>\n                                    <strong>my details</strong>\n                                </ion-col>\n                                <ion-col text-right>\n                                    <ion-icon name="create"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ul>\n                                <li>manjunath</li>\n                                <li>+90 00000000</li>\n                                <li>manju@manju.com</li>\n                            </ul>\n                        </section>\n                        <section class="Profiledetail">\n                            <ion-row>\n                                <ion-col>\n                                    <strong>Authorised pickup person</strong>\n                                </ion-col>\n                                <ion-col text-right>\n                                    <ion-icon name="create"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ul>\n                                <li>manjunath</li>\n                                <li>+90 00000000</li>\n                                <li>manju@manju.com</li>\n                            </ul>\n                        </section>\n                    </section>\n                    <ion-card padding>\n                        <article class="bottomButton">\n                            <button ion-button margin-bottom outline block color="dark">View Invoice</button>\n                            <button ion-button block color="dark" (click)="gotoPage(\'PurchasedItemsPage\')">View purchased items</button>\n                        </article>\n                    </ion-card>\n                </ion-item>\n            </ion-list>\n        </section>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/check-out/check-out.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object])
    ], CheckOutPage);
    return CheckOutPage;
    var _a, _b;
}());

//# sourceMappingURL=check-out.js.map

/***/ })

});
//# sourceMappingURL=35.js.map