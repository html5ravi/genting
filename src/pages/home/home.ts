import { Component, NgZone, ViewChild, ElementRef, } from '@angular/core';
import { IonicPage, NavController, Events, Platform,MenuController, } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { BeaconProvider } from '../../providers/beacon/beacon';
import { UserdataProvider } from '../../providers/userdata/userdata';
import moment from 'moment';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { GeofenceProvider } from '../../providers/geofence/geofence';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { CommonProvider } from '../../providers/common/common';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


//import Beacon Model
import { BeaconModel } from '../../models/beaconModel';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment:'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  @ViewChild('circle') myCircle: ElementRef;
  @ViewChild('bluetooth') bluetoothModal;

  beaconsList: BeaconModel[] = [];
  nearestBeaconList: BeaconModel[] = [];
  displayBeaconList: BeaconModel[] = [];
  promotionList:any = [];
  beaconObserver$: any;
  // storeList: any = [];
  malllogo: any;
  auth_token: string;
  mall: any;



  constructor(private navCtrl: NavController,
              private storesProvider: StoresProvider,
              private beaconProvider: BeaconProvider,
              private userdataProvider: UserdataProvider,
              private events: Events,
              private zone: NgZone,
              private platform: Platform,
              private openSettings:OpenNativeSettings,
              private geofenceProvider: GeofenceProvider,
              private menuController: MenuController,
              private analytics: AnalyticsProvider,
              private translate: TranslateService,
              private excepProvider:ExceptionHandlerProvider,
              private commonProvider:CommonProvider
              
) {


    this.events.subscribe('changedOutlet', isOutLetChanged => {

      this.beaconsList = [];
      this.nearestBeaconList = [];
      this.displayBeaconList = [];
      // this.storeList = [];
      this.promotionList = [];

    })
    
    this.onBackground();
    this.onResume();

    this.analytics.fa.logEvent('HomePage');
  }

  ionViewWillEnter() {

    if(this.platform.is('cordova')){
    this.geofenceProvider.userPermissionForLocation().then(isReady => {
      this.platform.ready().then(() => {
       
        this.geofenceProvider.getUserCurrentPosition().then(isNearToMall => {
          this.checkBluetoothState();
        })
      
      });  
     
    });

    this.checkBluetoothState();
  }
    this.menuController.enable(true);
    this.malllogo = this.userdataProvider.getSelectedMallLogo();
    // this.userdataProvider.getAuthToken().then(data => {
      this.auth_token = this.userdataProvider.getToken();
      this.getMallData();
      if (this.auth_token) {
      }
    // })

    
  }

// go to store details page
gotoPromotions(promo) {
    this.navCtrl.push("PromotionBannerPage", { promotion: promo });
  }



  gotoPromotionBanner(slide) {
    this.navCtrl.push("PromotionBannerPage", { promotion: slide });
  }


//Initialize the Ibeacon
  initialize() {
    try {
      let isInitialised = this.beaconProvider.initialise();
      if (isInitialised) {

        this.listenToBeaconEvents();
      }
    } catch (e) {

    }
  }


  //Listen to the Ibeacon event by subscribing to didRangeBeaconsInRegion
  listenToBeaconEvents() {
    this.events.subscribe('didRangeBeaconsInRegion', (data) => {

      // update the UI with the beacon list 

      this.zone.run(() => {
        // let beaconEventList =  [...data.beacons]
        this.beaconObserver$ = new Observable((observer) => {
           observer.next(data.beacons);
           observer.complete();
         });
        // let beaconEventList = data.beacons;
        this.beaconObserver$
         .subscribe(bea => {
             bea.map(beacons => {
            console.log(beacons, "before mapping");
              if(beacons.rssi != 0){
              // beacons.map(beacons => {
            let beaconObject = new BeaconModel(beacons);
      
            // All Beacons List
            // closest 3 Beacons List

            // Found New beacon
            // Add to the all beacons list
            // Sort the all beacons list by distance and find top 3 and assign to nearest beacon list

            let isBeaconExist = this.beaconProvider.checkBeaconList(this.beaconsList, beaconObject);
            if (!isBeaconExist) {
              this.addBeacon(this.beaconsList, beaconObject);
            } else {
              // remove the existing beacon object and add again - because distance would have changed
              this.replaceBeacon(this.beaconsList, beaconObject);
            }
          }

          });
          
        });

        // Loop through all beacons and remove the ones > 8 seconds

        let filterByArrivalTime = this.beaconsList.filter(beacon => {
          return moment.duration(moment().diff(beacon.arrivalTime)).asSeconds() <= 8;
        });

        // Replace original list with the new filtered list
        this.beaconsList = [...filterByArrivalTime];

        // sort by arrival time and distance. That is new sorted array will be your nearest beacon
        this.nearestBeaconList = this.beaconProvider.sortBeaconsByAccuracy(this.beaconsList);

     //If nearest beacon and the displayBeacon are different then activate refresh button
        if (this.beaconProvider.areDifferentByMinor(this.nearestBeaconList, this.displayBeaconList)) {

              this.getDisplayBeaconList();
        }

        //If all array are empty, that means there is no ranging of beacons, 
        //Then  remove display beacon List and beaconStoresSlideList
  

        // if (!this.displayBeaconList.length && this.beaconsList.length > 0){

        //     this.getDisplayBeaconList();
        //     this.autoRefreshBeacons = setInterval(()=>{

        //       this.getDisplayBeaconList();

        //     },5000)
        // }

        if (this.displayBeaconList.length > 0 && this.nearestBeaconList.length == 0 && this.beaconsList.length == 0) {
          this.displayBeaconList = [];
  

          // clearInterval(this.autoRefreshBeacons);
        }

      
      

    });
  });

  
}







  // //beacons to display;
  getDisplayBeaconList() {
   
    // this.storeList = [];
    this.displayBeaconList = [...this.nearestBeaconList];
    if (this.displayBeaconList.length > 0) {
      this.displayBeaconList.forEach(beacon => {
        this.getBeaconStore(beacon.major, beacon.minor)
      })
    }  
  }
  


    //add beacon to the list
    addBeacon(beaconList: BeaconModel[],beacon: BeaconModel) {
      beaconList.push(beacon);
    }
  
  
  
  //replace the beacon if it is already exist
    replaceBeacon(beaconList: BeaconModel[], beacon: BeaconModel) {
      let len = beaconList.length;
      for(let i = 0; i < len; i++) {
          if(beaconList[i].minor === beacon.minor){
            beaconList[i] = beacon;
          }
      }
    }
  




 

  // Get the stores of connected beacon 
  //If store is not available yet (empty response), then remove the beacon from beacon list;
  private getBeaconStore(major, minor) {
    this.storesProvider.getBeaconStores(major, minor).then(storedata => {
      console.log(storedata,"storedata home");
      if (storedata) {
        // this.storeList.push(storedata)
        let newStroreList = storedata['associatedstore'].filter(stores => {return stores});
        console.log("new store list",newStroreList);
        this.getEachStorePromotions(newStroreList);
      }
    },err=>{
    });
  }

  getEachStorePromotions(storenames){
    console.log("storenames in getEachStorePromotions",storenames);
    this.promotionList = [...[]];
    storenames.forEach(store => {
      console.log("getting promotions for each store",store);
      this.getStorePromotions(store.storename);
      
    });
  }

  getStorePromotions(storename){
    this.storesProvider.getStorePromotions(storename).subscribe(promo=>{
      console.log(promo,"each promotions");
      this.promotionList =  this.promotionList.concat(promo.data.filter(pm=>{
        if(pm.hasvipoffer && pm.displaystartdate && pm.displayenddate && pm.isactive){
          let isTrue = this.commonProvider.canDisplayData(pm.displaystartdate, pm.displayenddate);
          if(isTrue)
          return pm;
        }else {
          if(pm.hasvipoffer && pm.isactive)
          return pm;
        }
      }));
    
    })
  }

  getMallData() {

    // this.userdataProvider.getSelectedMall().then(malldata => {

      // this.mall = JSON.parse(malldata);
      this.mall = JSON.parse(localStorage.getItem('mallData'));
      // console.log(malldata,'===========================================')

    // })
  }

  openBluetoothModal() {
    this.bluetoothModal.open();
  }

  openBluetoothSettings() {
    this.bluetoothModal.close();
    this.openSettings.open('bluetooth').then(() => {

    }, err => {
    })
  }

  closeBluetoothModal() {
    this.bluetoothModal.close();
  }

  checkBluetoothState() {

    this.beaconProvider.checkBluetoothState().then(data => {

      if (data['initialize']) {
        this.initialize();
      }
      if (!data['initialize'] && data['bluetoothModal']) {
        this.openBluetoothModal();
      }
    })
  }
  
  ionViewWillLeave() {

    this.events.unsubscribe('didRangeBeaconsInRegion');
    this.beaconProvider.stopRangingBeacons();
    // clearInterval(this.autoRefreshBeacons);
    // if(this.beaconObserver$)
    // this.beaconObserver$.unsubscribe();
  }

  onBackground() {
    this.platform.pause.subscribe(() => {
      this.beaconProvider.stopRangingBeacons();
      this.events.unsubscribe('didRangeBeaconsInRegion');
      // if(this.beaconObserver$)
      //   this.beaconObserver$.unsubscribe();
      // clearInterval(this.autoRefreshBeacons);

    })
  }

  onResume() {
    this.platform.resume.subscribe(() => {
      this.checkBluetoothState();
    })
  }

  navTo(page) {
    // console.log(bannerdata,"banner dataaaaaa")
     this.navCtrl.setRoot(page);
  }

  ngOnDestroy(){
    if(this.beaconObserver$ != undefined )
    this.beaconObserver$.takeUntil(this.beaconObserver$);
  }

}
