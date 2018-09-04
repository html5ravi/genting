webpackJsonp([57],{

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history__ = __webpack_require__(958);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderHistoryPageModule = /** @class */ (function () {
    function OrderHistoryPageModule() {
    }
    OrderHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */]),
            ],
        })
    ], OrderHistoryPageModule);
    return OrderHistoryPageModule;
}());

//# sourceMappingURL=order-history.module.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
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
 * Generated class for the OrderHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderHistoryPage = /** @class */ (function () {
    function OrderHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderHistoryPage');
    };
    OrderHistoryPage.prototype.gotoPage = function (page) {
        this.navCtrl.push(page);
    };
    OrderHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-history',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/order-history/order-history.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n          <ion-col col-2>\n              <!-- <ion-icon name="arrow-back" class="backIco" (click)="gotoPage(\'HomePage\')"></ion-icon> -->\n          </ion-col>\n          <ion-col col-8>\n              <figure no-margin>\n                  <strong>My Account</strong>\n              </figure>\n          </ion-col>\n          <ion-col col-2>\n              <button ion-button icon-only menuToggle>\n              <ion-icon tappable name="menu"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content no-padding>\n    <ion-card>\n      <ion-card-header padding>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-8>\n              <!-- <ion-icon name="arrow-back"></ion-icon> -->\n              <strong>my order history</strong>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n      <ion-card-content>\n          <ion-card padding class="bb">\n            <ion-grid no-padding>\n              <ion-row (click)="gotoPage(\'PurchasedItemsPage\')">\n                <ion-col>\n                    <p>order number <strong>1234567</strong></p>\n                </ion-col>\n                <ion-col text-right>\n                    <p>Date Ordered <strong>3 JAN 2018</strong></p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n          <ion-card padding class="bb">\n              <ion-grid no-padding>\n                  <ion-row>\n                    <ion-col>\n                        <p>order number <strong>1234567</strong></p>\n                    </ion-col>\n                    <ion-col text-right>\n                        <p>Date Ordered <strong>3 JAN 2018</strong></p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n          </ion-card>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/order-history/order-history.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object])
    ], OrderHistoryPage);
    return OrderHistoryPage;
    var _a, _b;
}());

//# sourceMappingURL=order-history.js.map

/***/ })

});
//# sourceMappingURL=57.js.map