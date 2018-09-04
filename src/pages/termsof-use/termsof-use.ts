import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { LoaderProvider } from '../../providers/loader/loader';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { CommonProvider } from '../../providers/common/common';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { TranslateService } from '@ngx-translate/core';




@IonicPage({
  segment:'termsandconditions'
})
@Component({
  selector: 'page-termsof-use',
  templateUrl: 'termsof-use.html',

})
export class TermsofUsePage {
  
  termsDetails: any = [];
  hideBackButton: boolean = false;
  fromPage: any;
  constructor(private navCtrl: NavController, 
              private loaderProvider: LoaderProvider,
              private userdataProvider: UserdataProvider,
              private commonProvider: CommonProvider,
              private analytics: AnalyticsProvider,private excepProvider:ExceptionHandlerProvider,private translate:TranslateService, private navParams:NavParams) {
    
    this.analytics.fa.logEvent('TermsAndConditionPage');
    this.hideBackButton = this.navParams.get('hidebackbutton');
    this.fromPage = this.navParams.get('fromTermsofUsePage');
  }

  ionViewDidEnter() {
    this.termsAndCondition();
  }

  //function for calling terms and conditions Api //
  termsAndCondition() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.commonProvider.getTermsAndConditions().subscribe(res => {
      this.loaderProvider.dismissLoader(loader);
      this.termsDetails = res;
    },err=>this.excepProvider.excpHandler(err))
  }



  gotoPage(page){
    this.navCtrl.setRoot(page);
  }

  goBack(){
    this.navCtrl.pop();
  }
}
