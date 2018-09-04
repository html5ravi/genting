import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { CommonProvider } from '../../providers/common/common';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { TranslateService } from '@ngx-translate/core';




@IonicPage({
  segment:'aboutgenting'
})
@Component({
  selector: 'page-about-genting-simon',
  templateUrl: 'about-genting-simon.html',
})
export class AboutGentingSimonPage {


  faqs: any = [];
  hideBackButton: boolean = false;
  constructor(
              private navCtrl: NavController,
              private userdataProvider: UserdataProvider,
              private commonProvider: CommonProvider, private analytics: AnalyticsProvider,private excepProvider:ExceptionHandlerProvider,private translate:TranslateService, private navParams:NavParams) {
    
    this.analytics.fa.logEvent('AboutGentingSimonPage');
    this.hideBackButton = this.navParams.get('hidebackbutton');
    
}



ionViewDidEnter(){
this.termsAndCondition();

}

//function for calling terms and conditions Api //
termsAndCondition(){
  this.commonProvider.getTermsAndConditions().subscribe(res => {
    this.faqs = [...res];
  }, err => this.excepProvider.excpHandler(err));
}

  
gotoPage(page){
  this.navCtrl.setRoot(page);
}

}

