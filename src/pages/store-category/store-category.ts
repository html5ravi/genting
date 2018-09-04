import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { StoresModel } from '../../models/storesModel';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { TranslateService } from '@ngx-translate/core';



@IonicPage({
  segment:'storecategory'
})
@Component({
  selector: 'page-store-category',
  templateUrl: 'store-category.html',
  
})
export class StoreCategoryPage {

  storeslist:Array<StoresModel>;
  listKey: any = [];
  storeAsObject: any = [];

  constructor(private navCtrl: NavController,
              private storesProvider: StoresProvider,
              private userdataProvider: UserdataProvider,
              private analytics: AnalyticsProvider,private excepProvider:ExceptionHandlerProvider,private translate:TranslateService) {
               this.analytics.fa.logEvent('StoreCategoryPage');
  }


  ionViewWillEnter() {
    this.getStoreList();
  }

  gotoStoreDetail(store) {
    this.navCtrl.push("StoreDetailsPage", { storedata: store });
  }

  getStoreList() {

    this.storesProvider.getAllStores().subscribe(res => {
      this.storeslist = res;
      this.storeAsObject = this.getAsObjectData(this.storeslist);
    
    },err=>this.excepProvider.excpHandler(err));
  }


  gotoMapPage(unitNumber){
    this.navCtrl.push("MapsPage", { unitnumber:unitNumber,hidebackbutton:true});
  }

  getUpperCase(key) {
    return key.toUpperCase();
  }

  getAsObjectData(storesArray) {

    let finalData = []
    for (let i in storesArray) {
      let startLetter = storesArray[i].storecategory[0].categoryname;
      if (finalData[startLetter])
        finalData[startLetter]['storescat'].push(storesArray[i]);
      else {
        finalData[startLetter] = {};
        finalData[startLetter]['storescat'] = [];
        finalData[startLetter]['storescat'].push(storesArray[i]);
      }
    }
    this.listKey = Object.keys(finalData);
    this.listKey.sort();
    return finalData;
  }

  gotoPage(page){
    this.navCtrl.setRoot(page);
  }

}
