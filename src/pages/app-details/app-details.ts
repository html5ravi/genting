import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { AppVersion } from '@ionic-native/app-version';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { TranslateService } from '@ngx-translate/core';


@IonicPage({
  segment: 'appdetails'
})
@Component({
  selector: 'page-app-details',
  templateUrl: 'app-details.html',
})
export class AppDetailsPage {

  _appDetails: any;
  _appVersion: any;

  constructor(private navCtrl: NavController,
    private appVersion: AppVersion,
    private commonProvider: CommonProvider, private platform: Platform,
    private analytics: AnalyticsProvider, private excepProvider: ExceptionHandlerProvider,
    private translate: TranslateService, private userdataProvider: UserdataProvider) {

    if (this.platform.is('cordova'))
      this.appVersion.getVersionNumber().then(versionNo => {

        this._appVersion = versionNo;
      });

    this.analytics.fa.logEvent('AppDetailsPage');

  }

  ionViewWillEnter() {
    this.getAppDetails();

  }

  navTo(page) {
   
      this.navCtrl.push(page, { hidebackbutton: true});
  }


  getAppDetails() {

    this.commonProvider.getTermsAndConditions().subscribe(res => {
      this._appDetails = res;

    }, err => this.excepProvider.excpHandler(err));
  }

  gotoPage(page) {
    this.navCtrl.setRoot(page);
  }
}
