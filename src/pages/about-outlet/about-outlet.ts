import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CommonProvider } from '../../providers/common/common';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { TranslateService } from '@ngx-translate/core';
declare var google: any;

@IonicPage({
  segment: 'aboutoutlet'
})
@Component({
  selector: 'page-about-outlet',
  templateUrl: 'about-outlet.html',
})

export class AboutOutletPage {
  @ViewChild('MapDetail') myMap;
  websiteUrl: any;
  outletDetails: any = [];
  emailUrl: any;
  map: any;
  mallLocation: any = {
    x: '',
    y: ''
  }
  mall: any;

  constructor(private excepProvider: ExceptionHandlerProvider,
    private navCtrl: NavController,
    private storesProvider: StoresProvider,
    private userdataProvider: UserdataProvider,
    private launchNavigator: LaunchNavigator,
    private commonProvider: CommonProvider,
    private analytics: AnalyticsProvider,
    private translate: TranslateService) {
    this.analytics.fa.logEvent('AboutOutletPage');
  }

  ionViewWillEnter() {
    this.getLatLngOfOutlet();
    this.aboutTheOutlet();
  }

  // function for calling Outlet Details //
  aboutTheOutlet() {
    this.storesProvider.getOutletDetails().subscribe(result => {
      this.outletDetails = result.data;
    }, err => this.excepProvider.excpHandler(err));
  }

  // get details of selected mall. Then load the map.
  getLatLngOfOutlet() {
    this.mall = JSON.parse(localStorage.getItem('mallData'));
    // this.mall = JSON.parse(malldata);
    this.mallLocation.x = this.mall.location.x;
    this.mallLocation.y = this.mall.location.y;
    this.websiteUrl = this.mall.websiteurl;
    this.emailUrl = this.mall.mallemail;
    this.mapLoad();
  }

  // Load map and set marker on mall location
  mapLoad() {
    let latLng = new google.maps.LatLng(this.mallLocation.x, this.mallLocation.y);
    let mapOptions = {
      center: latLng,
      zoom: 18,
      label: true,
      mapTypeId: google.maps.MapTypeId.STREET
    };
    this.map = new google.maps.Map(this.myMap.nativeElement, mapOptions);
    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
    });
  }

  //get driving directions  
  getDirections(address) {
    this.launchNavigator.navigate(address);
  }

  //share mall's details on social platforms
  shareSocial() {
    let message = this.userdataProvider.mallShareText;
    // let message = msg + `,${this.websiteUrl}`;
    this.commonProvider.shareViaSocailMedia(message);
  }

  gotoPage(page) {
    this.navCtrl.setRoot(page);
  }
}