import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';



import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-promotion-reedem',
  templateUrl: 'promotion-reedem.html',
  
})
export class PromotionReedemPage {

  voucherData: any;
  storeData: any;
  isAlreadyRedeemed: boolean;
  isRedeemedToday:boolean;

  constructor(private navCtrl: NavController, private navParams: NavParams,
              private userdataProvider: UserdataProvider,private analytics: AnalyticsProvider,private translate:TranslateService ) {
    
    this.voucherData = this.navParams.get('voucherdata');
    this.storeData = this.navParams.get('storedata');
    this.isAlreadyRedeemed = this.navParams.get('isalreadyredeemed');

      if(this.voucherData.ActivatedTime)
        var voucherDate = this.voucherData.ActivatedTime;
        else
        voucherDate = this.voucherData.AddedDate;
        let currentDate = moment().format('YYYY-MM-DD');
        let voucherMomentDate = moment(voucherDate);
        this.isRedeemedToday = voucherMomentDate.isSame(currentDate, 'day') ? true : false;
    
    this.analytics.fa.logEvent('VoucherRedeemedInfoPage');
  }



  close() {
    this.navCtrl.pop();
  }


  gotoPage(page) {
    this.navCtrl.setRoot(page);
  }

 
 }

