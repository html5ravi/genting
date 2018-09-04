import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { CommonProvider } from '../../providers/common/common';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { TranslateService } from '@ngx-translate/core';




import moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-store-details',
  templateUrl: 'store-details.html',
})
export class StoreDetailsPage {
  storedata: any;
  websiteUrl: any;
  storesPromotionList = [];
  mall: any;
  unitnumber: string;
  _auth: string;
  currentdate: any = moment().format('YYYY-MM-DD');

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private storesProvider: StoresProvider,
    private userdataProvider: UserdataProvider, private commonProvider: CommonProvider,
    private analytics: AnalyticsProvider, private excepProvider: ExceptionHandlerProvider) {

    this.storedata = this.navParams.get("storedata");
    if (this.storedata)
      this.getStorePromotionDetails();
    this.unitnumber = this.navParams.get('unitnumber');
    if (this.unitnumber)
      this.getStoreDetails();

    this._auth = this.userdataProvider.getToken();

    this.analytics.fa.logEvent('StoreDetailedInfoPage');

  }

  getStorePromotionDetails() {

    this.storesProvider.getAllPromotions(false).subscribe(res => {
      this.storesPromotionList = res.data.filter(promo => {
        if (promo.associatedstore[0].storename == this.storedata.storename) {
          if (promo.displaystartdate && promo.displayenddate) {
            if (moment(promo.displaystartdate).isSameOrBefore(this.currentdate, 'day') && moment(promo.displayenddate).isSameOrAfter(this.currentdate, 'day') && promo.isactive)
              return promo;
          } else {
            if (promo.isactive)
              return promo;
          }

        }
      });
    }, err => this.excepProvider.excpHandler(err))
  }

  gotoPromotion(promotion) {
    this.navCtrl.push('PromotionBannerPage', { promotion: promotion })
  }
  gotoMapPage(uid) {
    this.navCtrl.setRoot("MapsPage", { unitnumber: uid });
  }

  shareSocial(url) {
    // this.userdataProvider.getSelectedMall().then(malldata => {
      this.mall = JSON.parse(localStorage.getItem('mallData'));
      this.websiteUrl = this.mall.websiteurl;
      let message = `I am at ${this.storedata.storename}, ${this.userdataProvider.selectedMall},${this.websiteUrl}.`;
      this.commonProvider.shareViaSocailMedia(message);
    // });
  }



  getStoreDetails() {

    this.storesProvider.getAllStores().subscribe((data) => {
      this.storedata = data.find(s => s.unitnumber == this.unitnumber)
      if (this.storedata)
        this.getStorePromotionDetails();
    })
  }


}  
