import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, MenuController, Events, Platform } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { AuthProvider } from '../../providers/auth/auth';
import { TranslateService } from '@ngx-translate/core';
import { AlertProvider } from '../../providers/alert/alert';
import { CartProvider } from '../../providers/cart/cart';
import { CheckoutProvider } from '../../providers/checkout/checkout';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@IonicPage()
@Component({
  selector: 'page-select-outlet',
  templateUrl: 'select-outlet.html',
})
export class SelectOutletPage {
  @ViewChild('checkCartModal') checkCart;
  _chooseMall: any;
  cartQuantity: any;
  center1: string;
  center2: any;
  centerChanged: boolean = false;
  mallData: any = [];

  constructor(private navCtrl: NavController,
    private commonProvider: CommonProvider,
    private userdataProvider: UserdataProvider,
    private authProvider: AuthProvider,
    private menuController: MenuController,
    private checkoutProvider:CheckoutProvider,
    private events: Events,
    private analytics: AnalyticsProvider,
    private translate: TranslateService,
    private alertProvider: AlertProvider,
    private cartProvider: CartProvider,
    private nativePageTransitions: NativePageTransitions,
    private platform:Platform) {

    this.events.publish('choosemall', true);
    this.analytics.fa.logEvent('SelectOutletPage');
  }

  ionViewWillEnter() {
    this.chooseMall();
    this.menuController.swipeEnable(false);
    if (this.menuController.isOpen())
      this.menuController.close();
  }

  closeMdl() {
    this.checkCart.close();
  }

  emptyCart() {
    var cartData = JSON.parse(localStorage.getItem('cartData'));
    this.cartQuantity = cartData.CartItems.length
    localStorage.removeItem('cartData');
    this.cartProvider.cartQuantity = 0;
    this.checkoutProvider.removeAllCartItems().subscribe(data => {
      if(data.messageCode == '1004'){
        this.commonProvider.selectMall(this.mallData).then(data => {
          setTimeout(() => {
            if (this.platform.is('android')) {
              let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
              this.nativePageTransitions.slide(options);
            } 
            this.navCtrl.setRoot('HomePage');
          }, 500);
        })
      }
    })
  }

  // chooseMall() {
  //   this._chooseMall = this.commonProvider._chooseMall;
  // }

  selectMall(mallData) {
    this.center1 = this.userdataProvider.getLocationId();
    this.center2 = mallData.mallid;
    this.mallData = mallData;
    if (this.center1 != this.center2 && localStorage.getItem('cartData') != null) {
      this.checkCart.open();
    }
    else {
      this.commonProvider.selectMall(mallData).then(data => {
        setTimeout(() => {
          if (this.platform.is('android')) {
            let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
            this.nativePageTransitions.slide(options);
          } 
          this.navCtrl.setRoot('HomePage');
        }, 500);
      });
    }
  }


  chooseMall() {

    this.commonProvider.chooseMalls().subscribe(res => {
      this._chooseMall = res['data'].filter(mall => mall.ismallactive == true);

    }, err => {
      let toast = this.alertProvider.presentToast('something went wrong');
      toast.present();
    });

  }

}
