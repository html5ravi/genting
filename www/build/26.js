webpackJsonp([26],{

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_martjack_shared_module__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_martjack_product_slider_product_slider__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_martjack_internal_badge_internal_badge__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_martjack_color_picker_color_picker__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_martjack_size_select_size_select__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_martjack_product_description_product_description__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_unique_unique__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_shared_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_4__components_martjack_product_slider_product_slider__["a" /* ProductSliderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_martjack_internal_badge_internal_badge__["a" /* InternalBadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_martjack_color_picker_color_picker__["a" /* ColorPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_martjack_size_select_size_select__["a" /* SizeSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_martjack_product_description_product_description__["a" /* ProductDescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_unique_unique__["a" /* UniquePipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_martjack_shared_module__["a" /* MartJackSharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__components_martjack_product_slider_product_slider__["a" /* ProductSliderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_martjack_internal_badge_internal_badge__["a" /* InternalBadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_martjack_color_picker_color_picker__["a" /* ColorPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_martjack_size_select_size_select__["a" /* SizeSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_martjack_product_description_product_description__["a" /* ProductDescriptionComponent */]
            ]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());

//# sourceMappingURL=product-detail.module.js.map

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

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(926);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(navCtrl, navParams, productsProvider, userdataprovider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productsProvider = productsProvider;
        this.userdataprovider = userdataprovider;
        this.variantColor = [];
        this.variantSize = [];
        this.requiredData = {
            selectedColor: '',
            selectedSize: ''
        };
        this.variantProducts = [];
        this.itemno_increase = 0;
        this.addToCartBtn = 'add to bag';
        // this.productId = this.navParams.get("productDetails");
        // Single Product Product ID with no Variants.
        // this.productId = '13122352';
        // Single Product Product ID with Variants in Color and Size.
        // this.productId = `13122338`;
        // Multiple Color Multiple Size.
        this.productId = '13122340';
        console.log(this.productId, 'ionViewDidLoad ProductDetailPage');
        if (this.productId) {
            this.productsProvider.fetchProductDetails(this.productId).subscribe(function (productDetails) {
                console.log(productDetails['Product'], '=====================Product Details From Details=====================');
                _this.productDetails = productDetails['Product'];
                _this.variantProducts = _this.productDetails.VariantProducts;
                for (var i = 0; i < _this.productDetails.VariantProperties.length; i++) {
                    if (_this.productDetails.VariantProperties[i].PropertyName == 'Color') {
                        _this.variantColor = _this.productDetails.VariantProperties[i].VariantValues;
                        console.log(_this.variantColor, '================Variant Color==============================');
                    }
                }
                for (var i = 0; i < _this.productDetails.VariantProperties.length; i++) {
                    if (_this.productDetails.VariantProperties[i].PropertyName == 'Size') {
                        _this.variantSize = _this.productDetails.VariantProperties[i].VariantValues;
                        console.log(_this.variantSize, '================Variant Color==============================');
                    }
                }
            });
        }
        // this.productsProvider.getCartItemQuantity();
    }
    ProductDetailPage.prototype.addToCart = function (product) {
        console.log(product);
        if (localStorage.getItem("token")) {
            console.log(this.requiredData, '=======================Required Data=================');
            this.getVariantProductId();
            // this.productsProvider.validateToken(localStorage.getItem("token")).subscribe(data => {
            //   console.log(data, '===========================Validate Token Data==========================')
            //   this.productsProvider.addCartItems(this.productId, localStorage.getItem("token"), 0).subscribe(cartStatus => {
            //     console.log(cartStatus, '===========================Cart Status Data==========================')
            //     this.addToCartBtn = 'Added';
            //     console.log(this.addBtn, "color")
            //     //this.addBtn.ElementRef.nativeElement.style.backgroundColor ='red';
            //   });
            // });
        }
    };
    ProductDetailPage.prototype.getSelectedColor = function (color) {
        console.log("getSelected Color", color);
        this.requiredData.selectedColor = color;
        this.getVariantProductByColor();
    };
    ProductDetailPage.prototype.getSelectedSize = function (size) {
        console.log("getSelected Color", size);
        this.requiredData.selectedSize = size;
        this.getVariantProductBySize();
    };
    ProductDetailPage.prototype.goTo = function (page) {
        this.navCtrl.setRoot(page);
    };
    ProductDetailPage.prototype.canActivateAddCart = function () {
        if (this.variantColor || this.variantSize) {
            if (this.variantColor.length == 0 && this.variantSize.length == 0) {
                return false;
            }
            else if (this.variantColor.length > 0 && this.requiredData.selectedColor && this.variantSize.length > 0 && this.requiredData.selectedSize) {
                return false;
            }
            else if (this.variantColor.length == 0 && this.variantSize.length > 0 && this.requiredData.selectedSize) {
                return false;
            }
            else if (this.variantColor.length > 0 && this.requiredData.selectedColor && this.variantSize.length == 0) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    ProductDetailPage.prototype.getVariantProductId = function () {
        var _this = this;
        if (this.variantProducts) {
            var variantProductColor = this.variantProducts.filter(function (variants) {
                return variants.VariantProperties.find(function (prop) { return prop.PropertyName == "Color" && prop.propertyvalue.toLowerCase() == _this.requiredData.selectedColor; });
            });
            console.log(variantProductColor);
            if (variantProductColor.length > 0) {
                var variantProductId = variantProductColor.find(function (variants) {
                    return variants.VariantProperties.find(function (prop) { return prop.PropertyName == "Size" && prop.propertyvalue.toLowerCase() == _this.requiredData.selectedSize; });
                });
                console.log(variantProductId, "variant product data0");
            }
        }
        else {
        }
    };
    ProductDetailPage.prototype.getVariantProductByColor = function () {
        var _this = this;
        var variantProductColor = this.variantProducts.filter(function (variants) {
            return variants.VariantProperties.find(function (prop) { return prop.PropertyName == "Color" && prop.propertyvalue.toLowerCase() == _this.requiredData.selectedColor; });
        });
        console.log(variantProductColor, "variant color");
    };
    ProductDetailPage.prototype.getVariantProductBySize = function () {
        var _this = this;
        var variantProductSize = this.variantProducts.find(function (variants) {
            return variants.VariantProperties.find(function (prop) { return prop.PropertyName == "Size" && prop.propertyvalue.toLowerCase() == _this.requiredData.selectedSize; });
        });
        console.log(variantProductSize, "variant size");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addToBtn'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ProductDetailPage.prototype, "addBtn", void 0);
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-detail',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/product-detail/product-detail.html"*/'<ion-content no-padding>\n      <internal-badge></internal-badge>\n      <product-slider [sliderImage]="productDetails"></product-slider>\n      <ion-card-content padding>\n            <ion-grid>\n                  <ion-row>\n                        <ion-col col-6>\n                              <h6>{{ productDetails?.Brand }}</h6>\n                              <span>{{ productDetails?.Title }}</span>\n                        </ion-col>\n                        <ion-col col-6 text-right>\n                              <h5 *ngIf="productDetails?.MRP > productDetails?.WebPrice">RM {{ productDetails?.WebPrice }}</h5>\n                              <h5 *ngIf="productDetails?.MRP <= productDetails?.WebPrice">RM {{ productDetails?.MRP }}</h5>\n                              <del *ngIf="productDetails?.MRP > productDetails?.WebPrice">RM {{ productDetails?.MRP }}</del>\n                              <small *ngIf="productDetails?.MRP > productDetails?.WebPrice">Save {{ productDetails?.Discount }}%</small>\n                        </ion-col>\n                  </ion-row>\n            </ion-grid>\n            <ion-grid *ngIf="productDetails?.VariantProperties.length > 0">\n                  <ion-row>\n                        <ion-col col-4>\n                              <h6>colour</h6>\n                        </ion-col>\n                        <ion-col col-8>\n                              <section *ngIf="variantColor?.length > 0">\n                                    <section class="colorPicker" *ngFor="let color of variantColor | unique:\'propertyvalue\';">\n                                          <color-picker [color]="color?.propertyvalue.toLowerCase()" (choosecolor)="getSelectedColor($event)"></color-picker>\n                                    </section>\n                              </section>\n                        </ion-col>\n                  </ion-row>\n            </ion-grid>\n            <section *ngIf="variantSize?.length > 0">\n              <section *ngFor="let size of variantSize | unique:\'propertyvalue\';">\n                  <size-select [size]="size?.propertyvalue.toLowerCase()" (choosesize)="getSelectedSize($event)"></size-select>\n              </section>\n            </section>\n            <ion-grid no-padding>\n                  <ion-row>\n                        <!-- <ion-col col-6>\n          <button ion-button block color="dark" outline style="width:98%"> Add to wishlist\n            <ion-icon name="heart-outline"></ion-icon>\n          </button>\n        </ion-col> -->\n                        <!-- <ion-col col-6>\n          <button ion-button block color="dark" class="bag"> add to bag\n            <ion-icon name="ios-cart-outline"></ion-icon>\n          </button>\n        </ion-col> -->\n                        <ion-col>\n                              <button *ngIf="userdataprovider?.hasToken()" ion-button block color="dark" #addToBtn class="bag" (click)="addToCart(details)" [disabled]="canActivateAddCart()">{{addToCartBtn}}\n                                    <ion-icon name="ios-cart-outline"></ion-icon>\n                              </button>\n                              <button *ngIf="!userdataprovider?.hasToken()" ion-button block color="dark" class="bag" (click)="goTo(\'LoginPage\')">Login To Add To Cart\n                                    <ion-icon name="ios-cart-outline"></ion-icon>\n                              </button>\n                        </ion-col>\n                  </ion-row>\n            </ion-grid>\n            <product-description [productData]="productDetails"></product-description>\n      </ion-card-content>\n      <!-- <section class="patch">\n    <span>you may also like</span>\n  </section>\n  <section class="recent">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8>\n          <p padding-left>Adidas</p>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button outline color="dark" block small style="padding: 15px !important">view all</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col col-6>\n        <brand-list></brand-list>\n      </ion-col>\n      <ion-col col-6>\n        <brand-list></brand-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__["a" /* UserdataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_userdata_userdata__["a" /* UserdataProvider */]) === "function" && _e || Object])
    ], ProductDetailPage);
    return ProductDetailPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSliderComponent; });
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


var ProductSliderComponent = /** @class */ (function () {
    function ProductSliderComponent(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        setTimeout(function () {
            console.log(_this.sliderImage, '======================Slider Images========================');
        }, 3000);
    }
    ProductSliderComponent.prototype.goto = function (page) {
        this.navCtrl.setRoot(page);
    };
    ProductSliderComponent.prototype.gotoMybag = function () {
        this.navCtrl.setRoot('MyBagPage');
        this.ProductList = 'MyBag';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductSliderComponent.prototype, "sliderImage", void 0);
    ProductSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-slider',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/product-slider/product-slider.html"*/'    <!-- <ion-icon name="heart-outline" (click)="goto(\'MyBagPage\')">\n      <span>0</span>\n    </ion-icon> -->\n    <!-- <ion-icon name="ios-cart-outline" (click)="gotoMybag()">\n      <span>{{items_added}}</span>\n    </ion-icon>\n    <ion-icon name="share"></ion-icon>\n</article> --> \n<ion-icon class="arrowBack" (click)="goto(\'ShopProductsPage\')" name="arrow-back"></ion-icon>\n\n<ion-slides pager="true" autoplay="5000" loop="true" speed="1000" *ngIf="sliderImage?.MultipleImages.length > 1">\n  <ion-slide *ngFor = "let images of sliderImage?.MultipleImages | sort: \'Sequence\';">\n    <figure>\n      <img src="http:{{ images?.LargeImage }}"/>\n    </figure>\n  </ion-slide>\n</ion-slides>\n<ion-slides *ngIf="sliderImage?.MultipleImages.length == 0">\n    <ion-slide>\n      <figure>\n        <img src="http:{{ sliderImage.LargeImage }}"/>\n      </figure>\n    </ion-slide>\n  </ion-slides>\n\n<ion-slides *ngIf="sliderImage?.MultipleImages.length == 1">\n    <ion-slide>\n      <figure>\n        <img src="http:{{ sliderImage?.LargeImage }}"/>\n      </figure>\n    </ion-slide>\n  </ion-slides>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/product-slider/product-slider.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object])
    ], ProductSliderComponent);
    return ProductSliderComponent;
    var _a, _b;
}());

//# sourceMappingURL=product-slider.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalBadgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(927);
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
 * Generated class for the InternalBadgeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var InternalBadgeComponent = /** @class */ (function () {
    function InternalBadgeComponent(navCtrl, cartProvider) {
        this.navCtrl = navCtrl;
        this.cartProvider = cartProvider;
        this.items_added = 0;
        console.log('Hello InternalBadgeComponent Component');
        this.text = 'Hello World';
        this.addToBag();
    }
    InternalBadgeComponent.prototype.gotoMybag = function () {
        this.navCtrl.setRoot('MyBagPage');
        this.ProductList = 'MyBag';
    };
    InternalBadgeComponent.prototype.ionViewDidLoad = function () {
        this.addToBag();
    };
    InternalBadgeComponent.prototype.addToBag = function () {
        var _this = this;
        this.cartProvider.getCartItemQuantity();
        this.cart = this.cartProvider.isCartItem();
        this.cart.subscribe(function (cartquantity) {
            if (cartquantity) {
                console.log(_this.cartProvider.getCartItemQuantity(), "geting cart::::::::::::::");
                _this.cartquantity = _this.cartProvider.getCartItemQuantity();
            }
            else {
                console.log("Cart is Empty");
            }
        });
    };
    InternalBadgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'internal-badge',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/internal-badge/internal-badge.html"*/'<article>\n    <!-- <ion-icon name="heart-outline" (click)="goto(\'MyBagPage\')">\n      <span>0</span>\n    </ion-icon> -->\n    <ion-icon name="ios-cart-outline" >\n      <span >{{cartquantity}}</span>\n    </ion-icon>\n    <ion-icon name="share"></ion-icon>\n</article>'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/internal-badge/internal-badge.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */]) === "function" && _b || Object])
    ], InternalBadgeComponent);
    return InternalBadgeComponent;
    var _a, _b;
}());

//# sourceMappingURL=internal-badge.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerComponent; });
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

var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        var _this = this;
        this.choosecolor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        setTimeout(function () {
            console.log(_this.color, "input color");
        }, 3000);
    }
    ColorPickerComponent.prototype.chooseColor = function () {
        this.choosecolor.emit(this.color);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ColorPickerComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ColorPickerComponent.prototype, "choosecolor", void 0);
    ColorPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'color-picker',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/color-picker/color-picker.html"*/'\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-12>\n      <!-- <section *ngFor ="let colors of colorStream;"> -->\n        <input type="radio" name="color" id="red" value="red" />\n        <label for="red" (click)="chooseColor()" ><span [style.backgroundColor]="color" ></span></label>\n      <!-- </section> -->\n        <!-- <input type="radio" name="color" id="green" />\n        <label for="green"><span class="green"></span></label>\n        \n        <input type="radio" name="color" id="yellow" />\n        <label for="yellow"><span class="yellow"></span></label> -->\n        \n        <!-- <input type="radio" name="color" id="olive" />\n        <label for="olive"><span class="olive"></span></label>\n        \n        <input type="radio" name="color" id="orange" />\n        <label for="orange"><span class="orange"></span></label>\n        \n        <input type="radio" name="color" id="teal" />\n        <label for="teal"><span class="teal"></span></label> -->\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/color-picker/color-picker.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());

//# sourceMappingURL=color-picker.js.map

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeSelectComponent; });
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

var SizeSelectComponent = /** @class */ (function () {
    function SizeSelectComponent() {
        var _this = this;
        this.choosesize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        setTimeout(function () {
            console.log(_this.size, '=======================Size Object=====================');
        }, 3000);
    }
    SizeSelectComponent.prototype.chooseSize = function () {
        this.choosesize.emit(this.size);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SizeSelectComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SizeSelectComponent.prototype, "choosesize", void 0);
    SizeSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'size-select',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/size-select/size-select.html"*/'\n<ion-grid>\n    <ion-row no-margin>\n      <ion-col col-4>\n        <h6>size</h6>\n      </ion-col>\n      <ion-col col-8>\n        <div class="donate">\n          <label class="blue">\n            <input type="radio" name="one" value="one" (click)="chooseSize()">\n            <span><i>{{ size.toUpperCase() }}</i></span>\n          </label>\n          <!-- <label class="blue">\n            <input type="radio" name="one" value="one" >\n            <span><i>S</i></span>\n          </label>\n          <label class="blue">\n            <input type="radio" name="one" value="one" >\n            <span><i>M</i></span>\n          </label>\n          <label class="blue">\n            <input type="radio" name="one" value="one" >\n            <span><i>L</i></span>\n          </label> -->\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/size-select/size-select.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SizeSelectComponent);
    return SizeSelectComponent;
}());

//# sourceMappingURL=size-select.js.map

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDescriptionComponent; });
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

var ProductDescriptionComponent = /** @class */ (function () {
    function ProductDescriptionComponent() {
        this.toggle = false;
        this.toggleSize = false;
    }
    ProductDescriptionComponent.prototype.toggleGroup = function () {
        if (this.toggle)
            this.toggle = false;
        else
            this.toggle = true;
    };
    ProductDescriptionComponent.prototype.toggleGroupSize = function () {
        if (this.toggleSize)
            this.toggleSize = false;
        else
            this.toggleSize = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDescriptionComponent.prototype, "productData", void 0);
    ProductDescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-description',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/components/martjack/product-description/product-description.html"*/'<ion-list>\n      <ion-item (click)="toggleGroup()" [ngClass]="{active: toggle}">\n            <h3>\n                  <span>DESCRIPTION</span>\n                  <ion-icon color="success" item-right [name]="toggle ? \'remove-circle\' : \'add-circle\'"></ion-icon>\n            </h3>\n            <article *ngIf="toggle" [innerHTML]="productData?.ShortDescription">{{productData?.ShortDescription}}</article>\n      </ion-item>\n      <ion-item (click)="toggleGroupSize()" [ngClass]="{active: toggleSize}">\n            <h3>\n                  <span>SIZE GUIDE</span>\n                  <ion-icon color="success" item-right [name]="toggleSize ? \'remove-circle\' : \'add-circle\'"></ion-icon>\n            </h3>\n            <article *ngIf="toggleSize" [innerHTML]="productData?.LongDescription">{{productData?.LongDescription}}</article>\n      </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/components/martjack/product-description/product-description.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProductDescriptionComponent);
    return ProductDescriptionComponent;
}());

//# sourceMappingURL=product-description.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniquePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UniquePipe = /** @class */ (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (args, value) {
        console.log(args, "args");
        console.log(value, "value");
        if (value !== undefined && value !== null) {
            return Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["uniqBy"])(args, value);
        }
        return value;
    };
    UniquePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'unique',
        })
    ], UniquePipe);
    return UniquePipe;
}());

//# sourceMappingURL=unique.js.map

/***/ })

});
//# sourceMappingURL=26.js.map