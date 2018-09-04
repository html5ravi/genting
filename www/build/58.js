webpackJsonp([58],{

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageModule", function() { return ItemDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details__ = __webpack_require__(954);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemDetailsPageModule = /** @class */ (function () {
    function ItemDetailsPageModule() {
    }
    ItemDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_details__["a" /* ItemDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_details__["a" /* ItemDetailsPage */]),
            ],
        })
    ], ItemDetailsPageModule);
    return ItemDetailsPageModule;
}());

//# sourceMappingURL=item-details.module.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
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
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemDetailsPage');
    };
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/item-details/item-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n          <ion-col col-2>\n              <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon>\n          </ion-col>\n          <ion-col col-8>\n              <figure no-margin>\n                  <strong>Item Details</strong>\n              </figure>\n          </ion-col>\n      <!-- <ion-col col-2>\n          <button ion-button icon-only menuToggle>\n          <ion-icon tappable name="menu"></ion-icon>\n        </button>\n      </ion-col> -->\n        </ion-row>\n    </ion-navbar>\n  </ion-header>\n<ion-content no-padding>\n  <ion-card padding class="bb">\n      <p>order number <strong>1234567</strong></p>\n  </ion-card>\n  <ion-card padding>\n    <figure no-margin>\n      <img src="assets/images/martjack/prd3.png" width="100%"/>\n    </figure>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-8>\n            <h6>Brand</h6>\n            <h6>Product Name</h6>\n            <ion-grid no-padding>\n              <ion-row class="listData">\n                <ion-col col-10>\n                  <ion-row>\n                    <ion-col col-6>\n                      <span>Color:</span>\n                    </ion-col>\n                    <ion-col col-6>\n                      <strong>white</strong>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6>\n                      <span>Size:</span>\n                    </ion-col>\n                    <ion-col col-6>\n                      <strong>xs</strong>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6>\n                      <span>Quantity:</span>\n                    </ion-col>\n                    <ion-col col-6>\n                      <strong>1</strong>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6>\n                      <span>Price:</span>\n                    </ion-col>\n                    <ion-col col-6>\n                      <strong>RM 185.00</strong>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid no-padding>\n              <ion-row class="listData">\n                <ion-col col-10>\n                  <ion-row>\n                    <ion-col col-6>\n                      <span>Product No:</span>\n                    </ion-col>\n                    <ion-col col-6>\n                      <strong>1184990</strong>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6>\n                      <span>Murchant ID:</span>\n                    </ion-col>\n                    <ion-col col-6>\n                      <strong>123454</strong>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/item-details/item-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object])
    ], ItemDetailsPage);
    return ItemDetailsPage;
    var _a, _b;
}());

//# sourceMappingURL=item-details.js.map

/***/ })

});
//# sourceMappingURL=58.js.map