import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { findIndex } from 'lodash';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { TranslateService } from '@ngx-translate/core';


@IonicPage({
  segment:'storedirectory'
})
@Component({
  selector: 'page-store-directory',
  templateUrl: 'store-directory.html'
})
export class StoreDirectoryPage {

  pattern = /@"^[0-9*#+?.]+$"/;
  storeslist = [];
  newStoreList = [];
  latestStoreList = [];
  storeCategoryList: any = [];
  myInput: string = null;
  segment: any;
  category: string = null;



  constructor(
              private navCtrl: NavController,
              private storesProvider: StoresProvider,
              private userdataProvider:UserdataProvider,
              private analytics: AnalyticsProvider,
              private excepProvider:ExceptionHandlerProvider,private translate:TranslateService) {
              
              this.segment = "all";
    this.analytics.fa.logEvent('StoreDirectoryPage');
  
    
  }


  gotoStoreDetail(store) {
    this.navCtrl.push("StoreDetailsPage", { storedata: store });
  }

  ionViewWillEnter() {
    this.getStoreList();
    this.getStoreCatagoryList();
    this.sortStoreByCategory();
  }

  onInput(ev) {
    this.segment = "all";
    if (!this.myInput) {
      this.category = null;
      this.sortStoreByCategory();
    }
    if (this.storeslist.length > 0) {
      let val = ev.target.value;
      if (val && val.trim()) {
        this.newStoreList = this.storeslist.filter((item) => {
          return (item.storename.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } else {
        this.newStoreList = [];
      }
    }
  }

 

  getStoreList() {

    this.storesProvider.getAllStores().subscribe(res => {
      this.storeslist = res;
      this.latestStoreList = this.storeslist;
  
    });
  }

  getStoreCatagoryList() {
    this.storesProvider.getStoreCatagoryList().subscribe(result => {
      this.storeCategoryList = result;
    },err=>this.excepProvider.excpHandler(err));
  }

  selectStore(store) {

    this.myInput = store.storename;
    this.sortStoreByStoreName(this.myInput);
    this.newStoreList = [];
   
  }


  headerByStartingLetter(store) {
    let index = findIndex(this.latestStoreList, store);
    if (index == 0)
      return store.storename.charAt(0);
    return this.latestStoreList[index - 1].storename.charAt(0) != this.latestStoreList[index].storename.charAt(0) ? store.storename.charAt(0) : '';
  }

  

  gotoMapPage(unitno) {
    this.navCtrl.push("MapsPage", { unitnumber:unitno,hidebackbutton:true });
  }

  getStoreLetter(store) {
    return Object.keys(store);
  }

  getUpperCase(storeName) {
    return storeName.charAt(0).toUpperCase();
  }

  sortStoreByCategory() {
    this.segment = 'all';
    this.myInput = null;
    let queryselector: any = this.category;
    if (queryselector) {
      this.latestStoreList = this.storeslist.filter((stores) => {
        if (queryselector.length == 0)
          return stores;
        else {
          return queryselector.find(categoryname => stores.storecategory[0].categoryname === categoryname);
        }
      });
    }else if(queryselector == null){
      this.latestStoreList = this.storeslist;
    } else{
    } 
  }

  sortStoreByStoreName(storename) {
   
    this.latestStoreList = this.storeslist.filter(data => data.storename === storename);
  
  }

  segmentChanged($event) {
 
    if ($event.value == 'all') {
      this.myInput = null;
      this.category = null;
      this.sortStoreByCategory();
      return;
    }
    if ($event.value == 'others') {
       this.myInput = null;
      this.category = null;
      this.latestStoreList =  this.storeslist.filter(data => {
       
        return this.pattern.test(data.storename.charAt(0))
  
      })
    }
    else {
       this.myInput = null;
      this.category = null;
      let value = $event.value.split('-');
      this.latestStoreList = this.storeslist.filter(data => {
         return  data.storename.charAt(0).toLowerCase().charCodeAt(0) >= value[0].charCodeAt(0) && data.storename.charAt(0).toLowerCase().charCodeAt(0) <= value[1].charCodeAt(0)
      });
    }
  }


  gotoPage(page){
    this.navCtrl.setRoot(page);
  }


 
}  
