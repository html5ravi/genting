import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams} from 'ionic-angular';
import{ UserdataProvider } from '../../providers/userdata/userdata';
import { CommonProvider } from '../../providers/common/common';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { TranslateService } from '@ngx-translate/core';





@IonicPage({
  segment:'privacy'
})
@Component({
  selector: 'page-privacy-policy',
  templateUrl: 'privacy-policy.html',
})
export class PrivacyPolicyPage {

  privacyDetails: any = [];
  hideBackButton: boolean = false;
  fromPage: any;
  constructor(private navCtrl: NavController,
              private userdataProvider: UserdataProvider,
              private commonProvider: CommonProvider,
              private analytics: AnalyticsProvider,private excepProvider:ExceptionHandlerProvider, private translate:TranslateService, private navParams:NavParams) {
    
    this.analytics.fa.logEvent('PrivacyPolicyPage');
    this.hideBackButton = this.navParams.get('hidebackbutton');
    this.fromPage = this.navParams.get('fromPrivacyPolicyPage')
}


ionViewWillEnter(){
  this.getPrivacyPolicy();
 
}


//function for calling terms and conditions Api //
getPrivacyPolicy(){
  this.commonProvider.getTermsAndConditions().subscribe(res => {
    this.privacyDetails = res;
  }, err => this.excepProvider.excpHandler(err));
}



gotoPage(page){
  this.navCtrl.setRoot(page);
}

goBack(){
  this.navCtrl.pop();
}
}