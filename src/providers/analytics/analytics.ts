import { Injectable } from '@angular/core';
import { FlurryAnalytics, FlurryAnalyticsObject, FlurryAnalyticsOptions } from '@ionic-native/flurry-analytics';
import { Platform } from 'ionic-angular';



@Injectable()
export class AnalyticsProvider {

  public fa: FlurryAnalyticsObject;
  public options: FlurryAnalyticsOptions;

  constructor(private flurryAnalytics: FlurryAnalytics, private platform: Platform) {
    

    if (this.platform.is('android')) {
      this.options  = {
        appKey: 'GRY4WBQ5ZJT5VP3RV9F7', 
        reportSessionsOnClose: true,
        enableLogging: true
       };
    }

    if (this.platform.is('ios')) {
      this.options = {
        appKey: '3DKTWPVTCBNZGWKMSYR2', 
        reportSessionsOnClose: true,
        enableLogging: true,
        enableCrashReporting:true
       };
    }

    this.fa = this.flurryAnalytics.create(this.options);
    
     
  
  }

}
