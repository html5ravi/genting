import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutProvider } from '../../providers/checkout/checkout';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';

@IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {
  private orderList: any = [];

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private loaderProvider: LoaderProvider, private alertProvider: AlertProvider,
    private checkoutProvider: CheckoutProvider, private userdataProvider: UserdataProvider) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.checkoutProvider.getOrderHistory(this.userdataProvider.getUserId()).subscribe(orderhistory => {
      loader.dismiss();
      if (orderhistory.messageCode == '1004') {
        this.orderList = orderhistory.Orders;
      } else {
        let toast = this.alertProvider.presentToast(orderhistory.Message);
        toast.present();
      }
    });
  }

  goto(orderid, orderdate) {
    this.navCtrl.push('PurchasedItemsPage', { 'orderdata': orderid, 'orderdate': orderdate });
  }
}
