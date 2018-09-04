import { Component,NgZone,ViewChild } from '@angular/core';
import { Platform,Events,NavController } from 'ionic-angular';
import { GeofenceProvider } from '../../../providers/geofence/geofence';
import { BeaconProvider } from '../../../providers/beacon/beacon';
import { StoresProvider } from '../../../providers/stores/stores';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

//import Beacon Model
import { BeaconModel } from '../../../models/beaconModel';
import { Observable } from 'rxjs/Observable';
import moment from 'moment';


@Component({
  selector: 'promotion-list',
  templateUrl: 'promotion-list.html'
})
export class PromotionListComponent {
  @ViewChild('bluetooth') bluetoothModal;
  beaconObserver$: Observable<any>;
  beaconsList: BeaconModel[] = [];
  nearestBeaconList: BeaconModel[] = [];
  displayBeaconList: BeaconModel[] = [];
  storeList: any = [];
  constructor(private platform: Platform, private geofenceProvider: GeofenceProvider, private beaconProvider: BeaconProvider, 
    private events: Events, private zone: NgZone, private storesProvider:StoresProvider,private navCtrl:NavController,private openSettings:OpenNativeSettings) {

    this.events.subscribe('changedOutlet', isOutLetChanged => {

      this.beaconsList = [];
      this.nearestBeaconList = [];
      this.displayBeaconList = [];
      this.storeList = [];

    })
    
    this.onBackground();
    this.onResume();
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


  openBluetoothModal() {
    this.bluetoothModal.open();
    console.log("poen bluetooth modal");
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
  console.log("listenToBeaconEvents");
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
  
    //beacons to display;
    getDisplayBeaconList() {
   
      this.storeList = [...[]];
      this.displayBeaconList = [...this.nearestBeaconList];
      if (this.displayBeaconList.length > 0) {
        this.displayBeaconList.forEach(beacon => {
          this.getBeaconStore(beacon.major, beacon.minor)
        })
      }  
    }
  
    // Get the stores of connected beacon 
  //If store is not available yet (empty response), then remove the beacon from beacon list;
  private getBeaconStore(major, minor) {
    this.storesProvider.getBeaconStores(major, minor).then(storedata => {
      console.log(storedata,"store data");
      if (storedata) {
        this.storeList.push(storedata)
      }
    },err=>{
    });

  }

  // go to store details page
  goTostore(store) {
    this.navCtrl.push("StoreDetailsPage", { storedata: store });
  }

  ngOnDestroy(){
    if(this.beaconObserver$ != undefined )
    this.beaconObserver$.takeUntil(this.beaconObserver$);
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

  ionViewWillLeave() {

    this.events.unsubscribe('didRangeBeaconsInRegion');
    this.beaconProvider.stopRangingBeacons();
    // clearInterval(this.autoRefreshBeacons);
    // if(this.beaconObserver$)
    // this.beaconObserver$.unsubscribe();
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
    

}
