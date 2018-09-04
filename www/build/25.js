webpackJsonp([25],{

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_instagram_instagram__ = __webpack_require__(887);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__providers_instagram_instagram__["a" /* InstagramProvider */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

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

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utility_1 = __webpack_require__(883);
var DEFAULTS = {
    redirectUri: 'http://localhost/callback'
};
var OAuthProvider = (function () {
    function OAuthProvider(options) {
        if (options === void 0) { options = {}; }
        this.APP_SCOPE_DELIMITER = ',';
        this.authUrl = '';
        this.defaults = {};
        this.options = utility_1.utils.defaults(options, DEFAULTS);
    }
    Object.defineProperty(OAuthProvider.prototype, "name", {
        get: function () {
            return this.constructor.name || this.authUrl;
        },
        enumerable: true,
        configurable: true
    });
    OAuthProvider.prototype.parseResponseInUrl = function (url) {
        var response = utility_1.utils.parseQueryString(url);
        if (!this.isValid(response)) {
            var error = new Error("Problem authenticating with " + this.name);
            Object.defineProperty(error, 'response', { value: response });
            throw error;
        }
        return response;
    };
    OAuthProvider.prototype.dialogUrl = function () {
        return this.optionsToDialogUrl(this.options);
    };
    OAuthProvider.prototype.optionsToDialogUrl = function (options) {
        utility_1.utils.defaults(options, this.defaults);
        var url = this.authUrl + "?client_id=" + options.clientId + "&redirect_uri=" + options.redirectUri;
        if (options.appScope) {
            url += "&scope=" + this.serializeAppScope(options.appScope);
        }
        if (options.state) {
            url += "&state=" + options.state;
        }
        if (options.responseType) {
            url += "&response_type=" + options.responseType;
        }
        return url;
    };
    OAuthProvider.prototype.serializeAppScope = function (scope) {
        return typeof scope.join === 'function' ? scope.join(this.APP_SCOPE_DELIMITER) : scope;
    };
    OAuthProvider.prototype.isValid = function (response) {
        return !response.error && (response.code || response['access_token']);
    };
    return OAuthProvider;
}());
exports.OAuthProvider = OAuthProvider;


/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.utils = {
    parseQueryString: function (url) {
        var values = url.split(/[?#]{1,2}/)[1].split('&');
        return values.reduce(function (map, value) {
            var _a = value.split('='), paramName = _a[0], paramValue = _a[1];
            map[decodeURIComponent(paramName)] = decodeURIComponent(paramValue);
            return map;
        }, {});
    },
    defaults: function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        sources.forEach(function (source) {
            for (var prop in source) {
                if (!target.hasOwnProperty(prop)) {
                    target[prop] = source[prop];
                }
            }
        });
        return target;
    }
};


/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facebook; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Facebook
 * @description
 * Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.
 *
 * Requires Cordova plugin: `cordova-plugin-facebook4`. For more info, please see the [Facebook Connect](https://github.com/jeduan/cordova-plugin-facebook4).
 *
 * #### Installation
 *
 *  To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com/apps](https://developers.facebook.com/apps).
 *
 * [![fb-getstarted-1](/img/docs/native/Facebook/1.png)](https://developers.facebook.com/apps/)
 *
 * Retrieve the `App ID` and `App Name`.
 *
 * [![fb-getstarted-2](/img/docs/native/Facebook/2.png)](https://developers.facebook.com/apps/)
 *
 * Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal.
 *
 * ```bash
 *  ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
 * ```
 *
 * After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:
 *
 * [![fb-getstarted-3](/img/docs/native/Facebook/3.png)](https://developers.facebook.com/apps/)
 *
 * Click `'Add Platform'`.
 *
 * [![fb-getstarted-4](/img/docs/native/Facebook/4.png)](https://developers.facebook.com/apps/)
 *
 * At this point you'll need to open your project's [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) file, found in the root directory of your project.
 *
 * Take note of the `id` for the next step:
 * ```
 * <widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
 * ```
 *
 * You can also edit the `id` to whatever you'd like it to be.
 *
 * #### iOS Install
 * Under 'Bundle ID', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-5](/img/docs/native/Facebook/5.png)](https://developers.facebook.com/apps/)
 *
 *
 * #### Android Install
 * Under 'Google Play Package Name', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-6](/img/docs/native/Facebook/6.png)](https://developers.facebook.com/apps/)
 *
 *
 * And that's it! You can now make calls to Facebook using the plugin.
 *
 * ## Events
 *
 * App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.
 *
 * - [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
 * - [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
 * - [JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success
 *
 * Activation events are automatically tracked for you in the plugin.
 *
 * Events are listed on the [insights page](https://www.facebook.com/insights/).
 *
 * For tracking events, see `logEvent` and `logPurchase`.
 *
 * @usage
 * ```typescript
 * import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
 *
 * constructor(private fb: Facebook) { }
 *
 * ...
 *
 * this.fb.login(['public_profile', 'user_friends', 'email'])
 *   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
 *   .catch(e => console.log('Error logging into Facebook', e));
 *
 *
 * this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
 *
 * ```
 *
 */
var Facebook = (function (_super) {
    __extends(Facebook, _super);
    function Facebook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Login to Facebook to authenticate this app.
     *
     * ```typescript
     * {
     *   status: 'connected',
     *   authResponse: {
     *     session_key: true,
     *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
     *     expiresIn: 5183979,
     *     sig: '...',
     *     secret: '...',
     *     userID: '634565435'
     *   }
     * }
     *
     * ```
     *
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) this app has upon logging in.
     * @returns {Promise<FacebookLoginResponse>} Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
     */
    Facebook.prototype.login = function (permissions) { return; };
    /**
     * Logout of Facebook.
     *
     * For more info see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.logout)
     * @returns {Promise<any>} Returns a Promise that resolves on a successful logout, and rejects if logout fails.
     */
    Facebook.prototype.logout = function () { return; };
    /**
     * Determine if a user is logged in to Facebook and has authenticated your app.  There are three possible states for a user:
     *
     * 1) the user is logged into Facebook and has authenticated your application (connected)
     * 2) the user is logged into Facebook but has not authenticated your application (not_authorized)
     * 3) the user is either not logged into Facebook or explicitly logged out of your application so it doesn't attempt to connect to Facebook and thus, we don't know if they've authenticated your application or not (unknown)
     *
     * Resolves with a response like:
     *
     * ```
     * {
     *   authResponse: {
     *     userID: '12345678912345',
     *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
     *     session_Key: true,
     *     expiresIn: '5183738',
     *     sig: '...'
     *   },
     *   status: 'connected'
     * }
     * ```
     *
     * For more information see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus)
     *
     * @returns {Promise<any>} Returns a Promise that resolves with a status, or rejects with an error
     */
    Facebook.prototype.getLoginStatus = function () { return; };
    /**
     * Get a Facebook access token for using Facebook services.
     *
     * @returns {Promise<string>} Returns a Promise that resolves with an access token, or rejects with an error
     */
    Facebook.prototype.getAccessToken = function () { return; };
    /**
     * Show one of various Facebook dialogs. Example of options for a Share dialog:
     *
     * ```
     * {
     *   method: 'share',
     *   href: 'http://example.com',
     *   caption: 'Such caption, very feed.',
     *   description: 'Much description',
     *   picture: 'http://example.com/image.png'
     * }
     * ```
     *
     * For more options see the [Cordova plugin docs](https://github.com/jeduan/cordova-plugin-facebook4#show-a-dialog) and the [Facebook docs](https://developers.facebook.com/docs/javascript/reference/FB.ui)
     * @param {Object} options The dialog options
     * @returns {Promise<any>} Returns a Promise that resolves with success data, or rejects with an error
     */
    Facebook.prototype.showDialog = function (options) { return; };
    /**
     * Make a call to Facebook Graph API. Can take additional permissions beyond those granted on login.
     *
     * For more information see:
     *
     *  Calling the Graph API - https://developers.facebook.com/docs/javascript/reference/FB.api
     *  Graph Explorer - https://developers.facebook.com/tools/explorer
     *  Graph API - https://developers.facebook.com/docs/graph-api
     *
     * @param {string}  requestPath Graph API endpoint you want to call
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) for this request.
     * @returns {Promise<any>} Returns a Promise that resolves with the result of the request, or rejects with an error
     */
    Facebook.prototype.api = function (requestPath, permissions) { return; };
    /**
     * Log an event.  For more information see the Events section above.
     *
     * @param {string}  name Name of the event
     * @param {Object}  [params] An object containing extra data to log with the event
     * @param {number}  [valueToSum] any value to be added to added to a sum on each event
     * @returns {Promise<any>}
     */
    Facebook.prototype.logEvent = function (name, params, valueToSum) { return; };
    /**
     * Log a purchase. For more information see the Events section above.
     *
     * @param {number}  value Value of the purchase.
     * @param {string}  currency The currency, as an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217)
     * @returns {Promise<any>}
     */
    Facebook.prototype.logPurchase = function (value, currency) { return; };
    /**
     * Open App Invite dialog. Does not require login.
     *
     * For more information see:
     *
     *   the App Invites Overview - https://developers.facebook.com/docs/app-invites/overview
     *   the App Links docs - https://developers.facebook.com/docs/applinks
     *
     *
     * @param {Object}  options An object containing an [App Link](https://developers.facebook.com/docs/applinks) URL to your app and an optional image URL.
     * @param {string} options.url [App Link](https://developers.facebook.com/docs/applinks) to your app
     * @param {string} [options.picture] image to be displayed in the App Invite dialog
     * @returns {Promise<any>} Returns a Promise that resolves with the result data, or rejects with an error
     */
    Facebook.prototype.appInvite = function (options) { return; };
    Facebook.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Facebook.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], Facebook.prototype, "login", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Facebook.prototype, "logout", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Facebook.prototype, "getLoginStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Facebook.prototype, "getAccessToken", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Facebook.prototype, "showDialog", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Array]),
        __metadata("design:returntype", Promise)
    ], Facebook.prototype, "api", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Number]),
        __metadata("design:returntype", Promise)
    ], Facebook.prototype, "logEvent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", Promise)
    ], Facebook.prototype, "logPurchase", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Facebook.prototype, "appInvite", null);
    Facebook = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'Facebook',
            plugin: 'cordova-plugin-facebook4',
            pluginRef: 'facebookConnectPlugin',
            repo: 'https://github.com/jeduan/cordova-plugin-facebook4',
            install: 'ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"',
            installVariables: ['APP_ID', 'APP_NAME'],
            platforms: ['Android', 'iOS', 'Browser']
        })
    ], Facebook);
    return Facebook;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstagramProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cordova_oauth_core__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cordova_oauth_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_cordova_oauth_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cordova_oauth_platform_cordova__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cordova_oauth_platform_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cordova_oauth_platform_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LoginPage } from '../../pages/login/login';  


var InstagramProvider = /** @class */ (function () {
    function InstagramProvider(httpClient) {
        this.httpClient = httpClient;
        this.oauth = new __WEBPACK_IMPORTED_MODULE_2_ng2_cordova_oauth_platform_cordova__["OauthCordova"]();
        // Functional Provider for Generating Instagram Access Token //
        this.instagramConfig = new __WEBPACK_IMPORTED_MODULE_1_ng2_cordova_oauth_core__["Instagram"]({
            clientId: "fc6263d1e36e4081a4a321feb3a89c97",
            redirectUri: 'http://localhost',
            responseType: 'token',
            appScope: ['basic', 'public_content']
        });
    }
    InstagramProvider.prototype.loginViaInstagram = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.oauth.logInVia(_this.instagramConfig).then(function (success) {
                resolve(success);
            }, function (err) {
                reject(err);
            });
        });
    };
    InstagramProvider.prototype.getUserProfileDataViaInstagram = function (response) {
        var access_token = response.access_token;
        return this.httpClient.get("https://api.instagram.com/v1/users/self/?access_token=" + access_token);
    };
    InstagramProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], InstagramProvider);
    return InstagramProvider;
}());

//# sourceMappingURL=instagram.js.map

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Angular 2 (ng2) Cordova Oauth
 * Created by Nic Raboy
 * http://www.nraboy.com
 */

var utility_1 = __webpack_require__(883);
/*
 * The main driver class for connections to each of the providers.
 */
var Oauth = (function () {
    function Oauth() {
        this.defaultWindowOptions = {};
    }
    Oauth.prototype.login = function (provider, windowOptions) {
        if (windowOptions === void 0) { windowOptions = {}; }
        console.warn("\n        new CordovaOauth().login(...) is deprecated and will be removed in the next release.\n        Please use new CordovaOauth().logInVia(...) instead.\n      ");
        return this.logInVia(provider, windowOptions);
    };
    Oauth.prototype.logInVia = function (provider, windowOptions) {
        if (windowOptions === void 0) { windowOptions = {}; }
        var url = provider.dialogUrl();
        return this.openDialog(url, utility_1.utils.defaults(windowOptions, this.defaultWindowOptions), {
            resolveOnUri: provider.options.redirectUri,
            providerName: provider.name
        }).then(function (event) {
            return provider.parseResponseInUrl(event.url);
        });
    };
    Oauth.prototype.serializeOptions = function (options) {
        var chunks = [];
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                chunks.push(prop + "=" + options[prop]);
            }
        }
        return chunks.join(',');
    };
    Oauth.prototype.openDialog = function (url, windowParams, options) {
        if (options === void 0) { options = {}; }
        return Promise.reject(new Error('Not implemented'));
    };
    return Oauth;
}());
exports.Oauth = Oauth;


/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMAIL_REGEXP; });
/* unused harmony export equalto */
//import { Validator } from '@angular/forms/src/directives/validators';
// export function validateEmail(c: FormControl) {
// export const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/;
var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// export const MOBILE_REGEXP = '^\d{4}-\d{3}-\d{4}$';
// return EMAIL_REGEXP.test(c.value) ? null : {
// validateEmail: {
// valid: false
// }
// };
// }
function equalto(field_name) {
    return function (control) {
        var input = control.value;
        var isValid = control.root.value[field_name] == input;
        if (!isValid)
            return { 'equalTo': { isValid: isValid } };
        else
            return null;
    };
}
//# sourceMappingURL=emailValid.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_instagram_instagram__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_exception_handler_exception_handler__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_userdata_userdata__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__validator_emailValid__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validator_profile__ = __webpack_require__(878);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import { PWD_PATTERN } from '../../validator/emailValid';

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, facebook, instagramProvider, commonProvider, authProvider, excepProvider, alertProvider, userdataProvider, menuController, analytics, events, translate, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.facebook = facebook;
        this.instagramProvider = instagramProvider;
        this.commonProvider = commonProvider;
        this.authProvider = authProvider;
        this.excepProvider = excepProvider;
        this.alertProvider = alertProvider;
        this.userdataProvider = userdataProvider;
        this.menuController = menuController;
        this.analytics = analytics;
        this.events = events;
        this.formBuilder = formBuilder;
        this.fbId = null;
        this.email = null;
        this.loginDetails = {};
        this.analytics.fa.logEvent('LoginPage');
        this.events.subscribe('fblogout', function (islogout) {
            _this.facebook.logout().then(function () {
                console.log("successfully logged out of facebook ");
            }, function (err) {
                console.log("error in logging out of facebook ");
            });
            _this.userdataProvider.isLoggedIn().subscribe(function (isLoggedInOrNot) {
                _this.isLoggedIn = isLoggedInOrNot;
                console.log(isLoggedInOrNot, "isLoggedInOrNot");
            });
        });
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_12__validator_emailValid__["a" /* EMAIL_REGEXP */]), __WEBPACK_IMPORTED_MODULE_13__validator_profile__["a" /* noWhitespaceValidator */]])],
            password: ['', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].maxLength(15)])]
        });
        this.username = this.loginForm.controls['username'];
        this.password = this.loginForm.controls['password'];
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuController.swipeEnable(false);
        if (this.menuController.isOpen())
            this.menuController.close();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.LoginTab = 'Login';
    };
    LoginPage.prototype.loginWithEmail = function () {
        this.navCtrl.push("EmailLoginPage");
    };
    // Login with facebook
    LoginPage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.facebook.login(['public_profile', 'user_friends', 'email']).then(function (response) {
            _this.facebook.api('me?fields=id,email', []).then(function (profile) {
                console.log("Login response fro facebook", response);
                console.log("Profile response fro facebook", profile);
                _this.fbId = { userId: profile['id'] };
                _this.email = { userEmail: profile['email'] };
                _this.authProvider.verifySocialId(_this.fbId.userId, 'facebook').subscribe(function (data) {
                    console.log('verifySocialId response', data);
                    if (data[0].code == 200 && data[0].customer_data) {
                        var userEmail = data[0].customer_data.customer[0].email;
                        _this.authProvider.getCustomerSocialAuth(userEmail).subscribe(function (res) {
                            _this.commonProvider.setUserData(res[0].auth_key, data);
                            setTimeout(function () {
                                _this.loginWithGuest();
                            }, 500);
                        });
                    }
                    else if (data[0].code == 202) {
                        if (_this.email.userEmail) {
                            _this.authProvider.verifyEmail({ email: _this.email.userEmail }).subscribe(function (resp) {
                                _this.authProvider.sendOTP({ email: _this.email.userEmail }).subscribe(function (result) {
                                    _this.authProvider.verifyOtp(_this.email.userEmail, { _otp: '3636' }).subscribe(function (res) {
                                        if (res[0].code == 200 && res[0].customerexists == 'true') {
                                            _this.commonProvider.setUserData(res[0].auth_key, res);
                                            setTimeout(function () {
                                                _this.navCtrl.push('LoginFullInfoPage', { email: _this.email.userEmail, tempAuthToken: res[0].auth_key, social_channel: 'facebook', social_user_id: _this.fbId.userId, isSocialChannelPresent: false, customerdata: res[0].customer_data.customer[0], isRegistered: true });
                                            }, 3000);
                                        }
                                        else if (res[0].code == 200 && res[0].customerexists == 'false') {
                                            _this.navCtrl.push('LoginFullInfoPage', { email: _this.email.userEmail, tempAuthToken: res[0].auth_key, social_channel: 'facebook', social_user_id: _this.fbId.userId, isSocialChannelPresent: false, isRegistered: false });
                                        }
                                        else {
                                            var toast = _this.alertProvider.presentToast(res[0].message);
                                            toast.present();
                                        }
                                        // this.navCtrl.push('EmailLoginPage', { useremail: this.email.userEmail, social_user_id: this.fbId.userId, social_channel: 'facebook', isSocialChannelPresent: false });
                                    }, function (err) { return _this.excepProvider.excpHandler(err); });
                                });
                            }, function (err) { return _this.excepProvider.excpHandler(err); });
                        }
                        else {
                            _this.navCtrl.push('EmailLoginPage', { useremail: _this.email.userEmail, social_user_id: _this.fbId.userId, social_channel: 'facebook', isSocialChannelPresent: false });
                        }
                    }
                    else {
                        var toast = _this.alertProvider.presentToast(data[0].message);
                        toast.present();
                    }
                }, function (err) {
                });
            }, function (err) {
                var toast = _this.alertProvider.presentToast('Failed to get user data from Facebook');
                toast.present();
            });
        }, function (err) {
            var toast = _this.alertProvider.presentToast(err.errorMessage);
            toast.present();
        });
    };
    // Login With Instagram //
    LoginPage.prototype.loginWithInstagram = function () {
        var _this = this;
        //returns instagram access token
        this.instagramProvider.loginViaInstagram().then(function (instatoken) {
            //returns insta user info
            _this.instagramProvider.getUserProfileDataViaInstagram(instatoken).subscribe(function (res) {
                if (res['meta'].code == '200') {
                    /* verify if insta id is already present if yes save customer data and go to choose outlet
                        else go login with emailpage
                    */
                    _this.authProvider.verifySocialId(res['data'].id, 'instagram').subscribe(function (data) {
                        if (data[0].code == 200 && data[0].customer_data) {
                            var userEmail = data[0].customer_data.customer[0].email;
                            _this.authProvider.getCustomerSocialAuth(userEmail).subscribe(function (res) {
                                _this.commonProvider.setUserData(res[0].auth_key, data);
                                setTimeout(function () {
                                    _this.loginWithGuest();
                                }, 500);
                            });
                        }
                        else if (data[0].code == 202) {
                            _this.navCtrl.push('EmailLoginPage', { social_user_id: res['data'].id, social_channel: 'instagram', isSocialChannelPresent: false });
                        }
                        else {
                            var toast = _this.alertProvider.presentToast(data[0].message);
                            toast.present();
                        }
                    }, function (err) { return _this.excepProvider.excpHandler(err); });
                }
            }, function (err) {
                var toast = _this.alertProvider.presentToast('Failed to get user data from Instagram');
                toast.present();
            });
        }, function (err) {
            var toast = _this.alertProvider.presentToast('Instagram login failed');
            toast.present();
        });
    };
    LoginPage.prototype.loginWithGuest = function () {
        if (this.commonProvider._noOfMalls == 1)
            this.navCtrl.setRoot('Homepage');
        else if (this.commonProvider._noOfMalls > 1)
            this.navCtrl.setRoot('SelectOutletPage');
    };
    LoginPage.prototype.gotoPage = function (page) {
        this.navCtrl.push(page);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.loginForm.value, "login details");
        this.authProvider.login(this.loginForm.value).subscribe(function (loginData) {
            console.log("login successfull", loginData);
            if (loginData['messageCode'] == '1004') {
                _this.userdataProvider.login(loginData['Token'].AccessToken);
                _this.userdataProvider.saveBasicDetails(_this.loginForm.value.username, _this.loginForm.value.password);
                if (_this.isLoggedIn)
                    _this.navCtrl.setRoot('SelectOutletPage');
            }
            else {
                var toast = _this.alertProvider.presentToast('Invalid email or password');
                toast.present();
            }
        }, function (err) {
            _this.excepProvider.excpHandler(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Applications/MAMP/htdocs/genting/src/pages/login/login.html"*/'\n<header [canShowMenu]=false [showBackButton]=false ></header>\n\n\n<ion-content no-padding no-bounce has-bouncing="false">\n    <ion-segment [(ngModel)]="LoginTab">\n        <ion-segment-button value="Login">\n          <strong>Login </strong> \n        </ion-segment-button>\n        <ion-segment-button value="Signup">\n          <strong> Sign up </strong> \n        </ion-segment-button>\n      </ion-segment>\n      <section [ngSwitch]="LoginTab" style="position: relative;">\n          <ion-list *ngSwitchCase="\'Login\'">\n              <ion-item>\n                    <ion-card no-padding padding-right padding-left no-margin>\n                            <ion-card-content no-padding>\n                                <button ion-button block style="background: #4267b2 !important;" margin-bottom margin-top (click)="loginWithFacebook()" >\n                                        <ion-icon name="logo-facebook"></ion-icon> {{ "LOGIN_PAGE.BUTTONS.LOGIN_REGISTER_FB" | translate }}</button>\n                                <section class="pr">\n                                    <hr >\n                                    <span>or</span>\n                                </section>\n                                <form [formGroup]="loginForm" (ngSubmit)="login()">\n                                    <ion-card-header no-padding padding-left padding-right>\n                                        <ion-item no-padding>\n                                            <ion-input type="email" placeholder="EMAIL ADDRESS"  name= "useremail" formControlName = "username"></ion-input>\n                                        </ion-item>\n                                        <ion-item *ngIf="username?.hasError(\'required\') && username?.touched" item-left>\n                                            <p text-left>*{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.ENTER_EMAIL" | translate }}</p>\n                                          </ion-item>\n                                        <ion-item *ngIf="username?.hasError(\'pattern\')" item-left>\n                                            <p text-left>*{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.ENTER_VALID_EMAIL" | translate }}</p>\n                                          </ion-item>\n                                 \n                                        <ion-item no-padding>\n                                            <ion-input type="password" placeholder="PASSWORD" name="password"  formControlName="password"></ion-input>\n                                        </ion-item>\n                                        <ion-item *ngIf="password?.hasError(\'required\') && password?.touched" item-left>\n                                            <p text-left > *{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.ENTER_PASSWORD" | translate }}</p>\n                                          </ion-item>\n                                        <ion-item *ngIf="password.hasError(\'minlength\')" item-left>\n                                            <p text-left>*{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.MIN_PASSWORD_LENGTH" | translate }}</p>\n                                          </ion-item>\n                                          <ion-item *ngIf="password.hasError(\'maxlength\')" item-left>\n                                            <p text-left>*{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.MAX_PASSWORD_LENGTH" | translate }}</p>\n                                          </ion-item>\n                                        <ion-row>\n                                            <ion-col text-right>\n                                                <span (click)="gotoPage(\'ForgotPasswordPage\')">{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.FORGOT_PASSWORD" | translate }}</span>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-card-header>\n                                    <button ion-button block color="dark" [disabled]="!loginForm.valid" type="submit">{{ "EMAIL_LOGIN_PAGE.BUTTONS.LOGIN" | translate }}</button>\n                                </form>\n                                <article>\n                                    <small>{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.DONT_HAVE_AN_ACCOUNT" | translate }}</small>\n                                    <strong>{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.SIGNUP_TODAY" | translate }}</strong>\n                                </article>\n                            </ion-card-content>\n                      </ion-card>\n                    \n              </ion-item>\n          </ion-list>\n        \n          <ion-list *ngSwitchCase="\'Signup\'">\n                <ion-item>\n                    <ion-card no-padding padding-right padding-left no-margin>\n                        <ion-card-content no-padding>\n                            <h3 no-margin>{{ "LOGIN_PAGE.STATIC_TEXT.VIPMEMBER" | translate }}</h3>\n                            <p no-margin>{{ "LOGIN_PAGE.STATIC_TEXT.JOIN_SHOPPER_CLUB" | translate }}</p>\n                            <ul padding-left>\n                                <li>{{ "LOGIN_PAGE.STATIC_TEXT.EMAIL_UPDATES" | translate }}</li>\n                                <li>{{ "LOGIN_PAGE.STATIC_TEXT.PASSPORT" | translate }}</li>\n                                <li>{{ "LOGIN_PAGE.STATIC_TEXT.STORE_UPDATE" | translate }}</li>\n                                <li>{{ "LOGIN_PAGE.STATIC_TEXT.INVITATIONS" | translate }}</li>\n                            </ul>\n                            <button ion-button block style="background: #4267b2 !important;" margin-bottom margin-top (click)="loginWithFacebook()" >\n                                    <ion-icon name="logo-facebook"></ion-icon> {{ "LOGIN_PAGE.BUTTONS.LOGIN_REGISTER_FB" | translate }}</button>\n                            <section class="pr">\n                                <hr >\n                                <span>{{ "EMAIL_LOGIN_PAGE.STATIC_TEXT.OR" | translate }}</span>\n                            </section>\n                            <form>\n                                <ion-card-header no-padding >\n                                    <ion-item no-padding>\n                                        <ion-input type="text" placeholder="FIRST NAME"></ion-input>\n                                    </ion-item>\n                                    <ion-item no-padding>\n                                        <ion-input type="text" placeholder="LAST NAME"></ion-input>\n                                    </ion-item>\n                                    <ion-item no-padding>\n                                        <ion-input type="email" placeholder="EMAIL ADDRESS"></ion-input>\n                                    </ion-item>\n                                    <ion-item no-padding>\n                                        <ion-input type="password" placeholder="PASSWORD"></ion-input>\n                                    </ion-item>\n                                    <ion-item no-padding>\n                                        <ion-input type="password" placeholder="CONFIRM PASSWORD"></ion-input>\n                                    </ion-item>\n                                    <ion-item no-padding>\n                                        <ion-input type="number" placeholder="CONTACT NUMBER"></ion-input>\n                                    </ion-item>\n\n                                    <h4>do you have a genting reward id?</h4>\n                                    <!-- <ion-list radio-group>\n                                        <ion-row>\n                                            <ion-col>\n                                                <ion-item>\n                                                    <ion-label>Yes</ion-label>\n                                                    <ion-radio checked="true" value="Yes"></ion-radio>\n                                                </ion-item>\n                                            </ion-col>\n                                            <ion-col>\n                                                <ion-item>\n                                                    <ion-label>No</ion-label>\n                                                    <ion-radio value="No"></ion-radio>\n                                                </ion-item>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-list> -->\n                                    <h6>By Registering you agree with our <br />\n                                     <a href="javascript:;">Terms & Conditions</a>, and <a href="javascript:;">Privacy Policy</a> \n                                    </h6>\n                                </ion-card-header>\n                                <button ion-button block color="dark" style="margin:20px 0 80px 0 !important" type="submit">create account</button>\n                            </form>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-item>\n          </ion-list>\n          <button ion-button color="dark" full no-margin (click)="loginWithGuest()" style="position: fixed;bottom: 0;">\n                {{ "LOGIN_PAGE.BUTTONS.LOGIN_GUEST" | translate }}</button>\n    </section>\n\n\n  <!-- <figure no-margin>\n    <img src="assets/images/VIP_lounger banner.png" />\n  </figure> -->\n\n        <!-- <h3 no-margin>{{ "LOGIN_PAGE.STATIC_TEXT.VIPMEMBER" | translate }}</h3>\n        <p no-margin>{{ "LOGIN_PAGE.STATIC_TEXT.JOIN_SHOPPER_CLUB" | translate }}</p>\n        <ul padding-left>\n            <li>{{ "LOGIN_PAGE.STATIC_TEXT.EMAIL_UPDATES" | translate }}</li>\n            <li>{{ "LOGIN_PAGE.STATIC_TEXT.PASSPORT" | translate }}</li>\n            <li>{{ "LOGIN_PAGE.STATIC_TEXT.STORE_UPDATE" | translate }}</li>\n            <li>{{ "LOGIN_PAGE.STATIC_TEXT.INVITATIONS" | translate }}</li>\n        </ul> -->\n\n        <!-- <button ion-button block color="dark" margin-bottom margin-top (click)="loginWithFacebook()" >\n            {{ "LOGIN_PAGE.BUTTONS.LOGIN_REGISTER_FB" | translate }}</button>\n        <button ion-button block color="dark" margin-bottom (click)="loginWithInstagram()" >\n            {{ "LOGIN_PAGE.BUTTONS.LOGIN_REGISTER_INSTA" | translate }}</button>\n        <button ion-button block color="dark" margin-bottom (click)="loginWithEmail()">\n            {{ "LOGIN_PAGE.BUTTONS.LOGIN_REGISTER_EMAIL" | translate }}</button>\n        <button ion-button block color="dark" margin-bottom (click)="loginWithGuest()">\n            {{ "LOGIN_PAGE.BUTTONS.LOGIN_GUEST" | translate }}</button> -->\n\n</ion-content>\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/genting/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_instagram_instagram__["a" /* InstagramProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_instagram_instagram__["a" /* InstagramProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_exception_handler_exception_handler__["a" /* ExceptionHandlerProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__providers_userdata_userdata__["a" /* UserdataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_userdata_userdata__["a" /* UserdataProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__["a" /* AnalyticsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__["a" /* AnalyticsProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */]) === "function" && _o || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(888));
__export(__webpack_require__(904));
__export(__webpack_require__(905));
__export(__webpack_require__(906));
__export(__webpack_require__(907));
__export(__webpack_require__(908));
__export(__webpack_require__(909));
__export(__webpack_require__(910));
__export(__webpack_require__(911));


/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(879);
var Facebook = (function (_super) {
    __extends(Facebook, _super);
    function Facebook(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://www.facebook.com/v2.0/dialog/oauth';
        this.defaults = {
            responseType: 'token'
        };
        if (!options.appScope || options.appScope.length <= 0) {
            throw new Error("A " + this.name + " app scope must exist");
        }
    }
    Facebook.prototype.optionsToDialogUrl = function (options) {
        var url = _super.prototype.optionsToDialogUrl.call(this, options);
        if (options.authType) {
            url += "&auth_type=" + options.authType;
        }
        return url;
    };
    return Facebook;
}(provider_1.OAuthProvider));
exports.Facebook = Facebook;


/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(879);
var Google = (function (_super) {
    __extends(Google, _super);
    function Google(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://accounts.google.com/o/oauth2/auth';
        this.APP_SCOPE_DELIMITER = ' ';
        this.defaults = {
            responseType: 'token'
        };
        if (!options.appScope || options.appScope.length <= 0) {
            throw new Error("A " + this.name + " app scope must exist");
        }
    }
    Google.prototype.optionsToDialogUrl = function (options) {
        return _super.prototype.optionsToDialogUrl.call(this, options) + '&approval_prompt=force';
    };
    return Google;
}(provider_1.OAuthProvider));
exports.Google = Google;


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(879);
var Imgur = (function (_super) {
    __extends(Imgur, _super);
    function Imgur(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://api.imgur.com/oauth2/authorize';
        this.defaults = {
            responseType: 'token'
        };
    }
    return Imgur;
}(provider_1.OAuthProvider));
exports.Imgur = Imgur;


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(879);
var Instagram = (function (_super) {
    __extends(Instagram, _super);
    function Instagram(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://api.instagram.com/oauth/authorize';
        this.APP_SCOPE_DELIMITER = '+';
        this.defaults = {
            responseType: 'token'
        };
    }
    return Instagram;
}(provider_1.OAuthProvider));
exports.Instagram = Instagram;


/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(879);
var Meetup = (function (_super) {
    __extends(Meetup, _super);
    function Meetup(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://secure.meetup.com/oauth2/authorize/';
        this.defaults = {
            responseType: 'token'
        };
    }
    return Meetup;
}(provider_1.OAuthProvider));
exports.Meetup = Meetup;


/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(879);
var LinkedIn = (function (_super) {
    __extends(LinkedIn, _super);
    function LinkedIn() {
        _super.apply(this, arguments);
        this.authUrl = 'https://www.linkedin.com/oauth/v2/authorization';
        this.APP_SCOPE_DELIMITER = ' ';
        this.defaults = {
            responseType: 'code'
        };
    }
    return LinkedIn;
}(provider_1.OAuthProvider));
exports.LinkedIn = LinkedIn;


/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(879);
var Strava = (function (_super) {
    __extends(Strava, _super);
    function Strava() {
        _super.apply(this, arguments);
        this.authUrl = 'https://www.strava.com/oauth/authorize';
        this.defaults = {
            responseType: 'code'
        };
    }
    return Strava;
}(provider_1.OAuthProvider));
exports.Strava = Strava;


/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var provider_1 = __webpack_require__(879);
var utility_1 = __webpack_require__(883);
var VK = (function (_super) {
    __extends(VK, _super);
    function VK(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.authUrl = 'https://oauth.vk.com/authorize';
        this.defaults = {
            responseType: 'token',
            redirectUri: 'https://oauth.vk.com/blank.html'
        };
        if (!options.appScope || options.appScope.length <= 0) {
            throw new Error("A " + this.name + " app scope must exist");
        }
    }
    VK.prototype.optionsToDialogUrl = function (options) {
        utility_1.utils.defaults(options, this.defaults);
        var url = _super.prototype.optionsToDialogUrl.call(this, options);
        if (options.display) {
            url += "&display=" + options.display;
        }
        if (options.v) {
            url += "&v=" + options.v;
        }
        if (options.revoke) {
            url += "&revoke=" + options.revoke;
        }
        return url;
    };
    return VK;
}(provider_1.OAuthProvider));
exports.VK = VK;


/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var oauth_1 = __webpack_require__(888);
function ensureEnvIsValid() {
    if (!window.cordova) {
        throw new Error('Cannot authenticate via a web browser');
    }
    if (!window.cordova.InAppBrowser) {
        throw new Error('The Apache Cordova InAppBrowser plugin was not found and is required');
    }
}
var OauthCordova = (function (_super) {
    __extends(OauthCordova, _super);
    function OauthCordova() {
        _super.apply(this, arguments);
        this.defaultWindowOptions = {
            location: 'no',
            clearsessioncache: 'yes',
            clearcache: 'yes'
        };
    }
    OauthCordova.prototype.openDialog = function (url, windowParams, options) {
        if (options === void 0) { options = {}; }
        var params = this.serializeOptions(windowParams);
        return new Promise(function (resolve, reject) {
            try {
                ensureEnvIsValid();
            }
            catch (error) {
                return reject(error);
            }
            var browserRef = window.cordova.InAppBrowser.open(url, '_blank', params);
            var exitListener = function () { return reject(new Error("The \"" + options.providerName + "\" sign in flow was canceled")); };
            browserRef.addEventListener('loaderror', function () {
                browserRef.removeEventListener('exit', exitListener);
                browserRef.close();
                reject(new Error("Error loading login page of \"" + options.providerName + "\""));
            });
            browserRef.addEventListener('loadstart', function (event) {
                if (event.url.indexOf(options.resolveOnUri) === 0) {
                    browserRef.removeEventListener('exit', exitListener);
                    browserRef.close();
                    resolve(event);
                }
            });
            return browserRef.addEventListener('exit', exitListener);
        });
    };
    return OauthCordova;
}(oauth_1.Oauth));
exports.OauthCordova = OauthCordova;


/***/ })

});
//# sourceMappingURL=25.js.map