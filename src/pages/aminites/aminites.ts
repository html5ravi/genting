import { Component } from '@angular/core';
import { IonicPage, NavController, } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';


@IonicPage({
  segment:'amenities'
})
@Component({
  selector: 'page-aminites',
  templateUrl: 'aminites.html',
})
export class AminitesPage {

  shownGroup: any;

  aminitesList = [];

  constructor(
              private navCtrl: NavController,
              private storesProvider: StoresProvider,
              private userdataProvider: UserdataProvider,
              private excepProvider: ExceptionHandlerProvider,
              private analytics: AnalyticsProvider,private translate:TranslateService) {
    
              this.analytics.fa.logEvent('AminitesPage');
    
    
              }

  ionViewWillEnter(){
    this.ShowAminites();
  
  }

  toggleGroup(group) {

    if (this.isGroupShown(group)) 
        this.shownGroup = null;
    else 
        this.shownGroup = group;
    
  }

  
  isGroupShown(group) {
  
    return this.shownGroup === group;
  }

  ShowAminites() {
  
  this.storesProvider.getAmenites().subscribe(res => {
    this.aminitesList = [...res];
    
  }, err => this.excepProvider.excpHandler(err))
  }
  


gotoPage(page){
  this.navCtrl.setRoot(page);
}

}
