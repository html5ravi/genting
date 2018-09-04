import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutProvider } from '../../providers/checkout/checkout';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { StoresProvider } from '../../providers/stores/stores';
import { AlertProvider } from '../../providers/alert/alert';

import moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-purchased-items',
  templateUrl: 'purchased-items.html',
})
export class PurchasedItemsPage {

  orderId: string;
  orderDate: string;
  orderedItems: any = [];
  pendingItemLength: any = '';
  expectedPickdate: string = ''
  storesList: any = [];
  constructor(private navCtrl: NavController, private navParams: NavParams, private checkoutProvider: CheckoutProvider, private userdataProvider: UserdataProvider,private storesProvider:StoresProvider,private alertProvider:AlertProvider) {
    

    this.getAllStores()
    this.orderId = this.navParams.get('orderdata');
    // this.orderDate = this.navParams.get('orderdate');
    console.log(userdataProvider.selectedMall, "selected mall");
    console.log(this.orderId, "order id");
    if(this.orderId)
      this.checkoutProvider.getOrderInfo(this.orderId)
        .subscribe(orderinfo => {
          console.log(orderinfo);
          if (orderinfo.messageCode == '1004') {
            this.orderedItems = orderinfo.Orders;
            console.log(this.orderedItems[0].OrderDate,'=========================Order Date==========================');
            let date = this.orderedItems[0].OrderDate;
            let sub = date.substring(6,16);
            console.log(sub,'================Sub=====================');
            console.log(moment.unix(sub).add(2.5,'hours').format("DD-MMM-YYYY HH:MM:SS"));
            this.orderDate = moment.unix(sub).add(2.5,'hours').format("DD-MMM-YYYY");
            this.getOrderStatus(this.orderedItems)
          }
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchasedItemsPage');
  }
  gotoPage(page){
    this.navCtrl.push(page);
  }

  getOrderStatus(orders) {

    let pendingItemLength = orders[0].OrderLineId.filter(order => order.DerivedStatusCode == 'A' || order.DerivedStatusCode == 'W');
    this.pendingItemLength = pendingItemLength.length;
    this.expectedPickdate = orders[0].DemandedDeliveryDate;
    
  }

  findStore(vendorId) {
    console.log("vendorId", vendorId);
    let store = this.storesList.filter(store => store.supplieridmartjack == vendorId);
    if (store.length >= 1) {
      this.navCtrl.push('StoreDetailsPage',{storedata:store[0]})
    } else {
      let toast = this.alertProvider.presentToast("Change Center to view this Store");
      toast.present();
    }

  }


  getAllStores() {
    this.storesProvider.getAllStores().subscribe(storesList => {
      this.storesList = [...storesList];
    })
  }

  viewInvoice() {
    this.navCtrl.push('InvoicePage',{orderdata:this.orderedItems})
  }

}
