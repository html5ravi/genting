import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { TranslateService } from '@ngx-translate/core';


import moment from 'moment';


@IonicPage({
  segment:'deals'
})
@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
})
export class DealsPage {
  segment:any;
  userData: any = {};
  dealsList: any = [];
  filteredDealList: any = [];
  allStores:any = [];
  allStoreCategories: any = [];
  currentdate: any = moment().format('YYYY-MM-DD');
  
  constructor(private navCtrl: NavController,
              private storesProvider: StoresProvider,
    private userdataProvider: UserdataProvider,
    private analytics: AnalyticsProvider,private excepProvider:ExceptionHandlerProvider,private translate:TranslateService) {
    
    this.segment = "";
    this.analytics.fa.logEvent('DealsPage');
  }


  ionViewWillEnter() {
    
    this.getPromotionsList();
    this.getAllStores();
    this.getAllStoreCategories();
  }


  // get latest non-vip promotions. Pass false to get non-vip promotions and true to get vip promotions
  getPromotionsList() {
    
    this.storesProvider.getAllPromotions(false).subscribe( res => {
      this.dealsList = res.data.filter(promo => {


        let psDate = moment(promo.displaystartdate).format('YYYY-MM-DD');
        let peDate =  moment(promo.displayenddate).format('YYYY-MM-DD');
        let psMoment = moment(psDate);
        let peMoment =  moment(peDate)
        let currenMoment = moment().format('YYYY-MM-DD');

        if (promo.displaystartdate && promo.displayenddate) {
          if (moment(psMoment).isSameOrBefore(currenMoment) && moment(peMoment).isSameOrAfter(currenMoment) && promo.isactive) {
            return promo;
          }
        } else {
          if(promo.isactive)
          return promo;
        }
      });
      this.filteredDealList = [...this.dealsList];
    },err=> this.excepProvider.excpHandler(err));
  }

  getAllStores() {
    
    this.storesProvider.getAllStores().subscribe(res => {
      this.allStores = [...res];
    }, err => this.excepProvider.excpHandler(err));
  }

  getAllStoreCategories(){
    this.storesProvider.getStoreCatagoryList().subscribe(res => {
      this.allStoreCategories = [...res];
    }, err => this.excepProvider.excpHandler(err)); 
  }

  gotoPromotions(deals){
    this.navCtrl.push('PromotionBannerPage',{promotion:deals})
  }

  filterdataByCategory() {
    this.userData.storename = '';
    let queryselector: any = this.userData.category;
  
    this.filteredDealList = this.dealsList.filter(deals => {
      if (queryselector.length == 0)
        return deals;
      else
        return queryselector.find(category => deals.associatedstore[0].storecategory[0] === category);
    })
    
  }

  filterdataByStoreName() {
    this.userData.category = ''
    this.filteredDealList = this.dealsList.filter(deals => {
      if (this.userData.storename == 'All')
        return deals;  
      return deals.associatedstore[0].storename == this.userData.storename;
    })
  }
  
  gotoPage(page){
    this.navCtrl.setRoot(page);
  }
}
