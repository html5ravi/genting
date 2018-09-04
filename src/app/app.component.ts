import { Component, ViewChild } from '@angular/core';
import { CommonProvider } from '../providers/common/common';
import { Nav, Platform, AlertController, ToastController, Events, MenuController } from 'ionic-angular';
import { TranslateProvider } from '../providers/translate/translate';
import { PushProvider } from '../providers/push/push';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserdataProvider } from '../providers/userdata/userdata';
import { AuthProvider } from '../providers/auth/auth';
import { AlertProvider } from '../providers/alert/alert';
import { LoaderProvider } from '../providers/loader/loader';
import { CartProvider } from '../providers/cart/cart';
import { MartjackauthConfigProvider } from '../providers/martjackauthcofig/martjackauthconfig';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { Crashlytics } from '@ionic-native/fabric';
import { NetworkProvider } from '../providers/network/network';
import { GeofenceProvider } from '../providers/geofence/geofence';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  @ViewChild('nointernet') NoInternetModal;
  @ViewChild('checkCartModal') checkCart;


  rootPage: string;
  pages: Array<{ title: string, component: any }>;
  _userName: string;
  auth_token: string;
  loginTitle: boolean = false;
  _showChooseMall: boolean = false;
  ismallPresent: boolean;
  isLoggedIn: Observable<boolean>;
  cartQuantity: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public commonProvider: CommonProvider,
    public splashScreen: SplashScreen, public userdataProvider: UserdataProvider, private crashlytics: Crashlytics,
    public loaderProvider: LoaderProvider, private authProvider: AuthProvider, private alertProvider: AlertProvider,
    public pushProvider: PushProvider, public geofenceProvider: GeofenceProvider,
    public alertCtrl: AlertController, public tostCtrl: ToastController, private martjackauthConfigProvider: MartjackauthConfigProvider,
    private events: Events, private cartProvider: CartProvider, public networkProvider: NetworkProvider, private menuController: MenuController,
    private translateProvider: TranslateProvider, translate: TranslateService,private nativePageTransitions:NativePageTransitions) {
    this.menuController.swipeEnable(false);
    this.loginEvent();
    this.getMallEvent();
    // this.initializeApp();
    try {
      this.initializeApp();
    } catch (e) {
      this.crashlytics.addLog("Error while loading data");
      this.crashlytics.sendNonFatalCrash(e.message || e);
    }
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: "HomePage" },
      { title: 'Store directory', component: "StoreDirectoryPage" },
      { title: 'Store category', component: "StoreCategoryPage" },
      { title: 'center map', component: "MapsPage" },
      { title: 'Shop', component: "ShopPage" },
      // { title: 'wish list', component: "MyBagPage" },
      { title: 'my bag', component: "MyBagPage" },
      { title: 'my account', component: "MyAccountPage" },
      { title: 'Vip Deals', component: "DealsListPage" },
      { title: 'Deals', component: "DealsPage" },
      { title: 'About the center', component: "AboutOutletPage" },
      { title: 'Amenities', component: "AminitesPage" },
      { title: 'Contact', component: "ContactUsPage" },
      { title: 'About Genting Simon', component: "AboutGentingSimonPage" },
      { title: 'Terms & Conditions of Use', component: "TermsofUsePage" },
      { title: 'Privacy Policy', component: "PrivacyPolicyPage" },
      { title: 'App Details', component: "AppDetailsPage" },
      // { title: 'Settings', component: "SettingsPage" },
      // { title: 'Help', component: "HelpPage" },
    ];
  }

  // check user auth token if found get user data and also subscribe for mall event. If no of mall
  // equal to 1 directly set the mall and goto Homepage. If no of mall greater than 1 then goto
  // Select outlet page. else for any other condition goto Login page.
  initializeApp() {
    this.platform.ready().then(() => {
      this.isLoggedIn = this.userdataProvider.isLoggedIn();
      this.isLoggedIn.subscribe(isLoggedIn => {
        this.rootPage = isLoggedIn ? "SelectOutletPage" : "LoginPage";
      });
      //this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#000000');
      this.splashScreen.hide();
      this.noConnectionEvent();
    })
  }

  //open component from sidemenu
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  //login event subscription
  loginEvent() {
    this.events.subscribe('userlogin', (user) => {
      if (user) {
        // this.userdataProvider.getAuthToken().then(data => {
        this.auth_token = this.userdataProvider.getToken();
        this.loginTitle = true;
        // });
        this._userName = this.userdataProvider.getUserFirstName();
      } else {
        this.auth_token = '';
        this.loginTitle = false;
      }
    })
  }

  // choose mall event subscription
  getMallEvent() {
    this.events.subscribe('choosemall', value => {
      if (value)
        this._showChooseMall = true;
    })
  }

  checkCart_Logout() {
    if (localStorage.getItem('cartData') != null) {
      this.checkCart.open();
    } else {
      this.goto('logout');
    }
  }

  pushLogout() {
    this.checkCart.close();
    this.goto('logout');
  }

  // login and logout button function and also profile and change center
  goto(page) {
    if (page == 'logout') {
      // this.userdataProvider.removeAuthToken().then(() => {
      //   this.userdataProvider.removeUserEmail().then(() => {
      //     this.nav.setRoot('LoginPage');
      //   })
      //   this.userdataProvider.removeTotalProfileField();
      //   this.events.publish('fblogout', true);
      //   this.events.publish('userlogin', false);
      // })
      // this.checkCart.open();
      this.authProvider.logout().subscribe(logoutData => {
        if (logoutData.messageCode == '1004') {
          let toast = this.alertProvider.presentToast(logoutData.Message);
          toast.present();
          this.userdataProvider.logout();
          if (this.platform.is('cordova'))
            this.pushProvider.logoutWebengage();
          this.userdataProvider.removeSelectedMall();
        }
      });
    } else {
      if (this.platform.is('android')) {
        let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
        this.nativePageTransitions.slide(options);
      }  
      this.nav.setRoot(page);
    }
  }

  closeMdl() {
    this.checkCart.close();
  }

  // open network modal //
  noConnectionEvent() {
    this.events.subscribe("noconnection", data => {
      if (data == true)
        this.NoInternetModal.open();
    });
  }

  // close network modal
  closeNoInternetModal() {
    this.NoInternetModal.close();
  }
}
