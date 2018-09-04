
import { Injectable } from '@angular/core';
import { Platform,Events } from 'ionic-angular'
import { IBeacon } from '@ionic-native/ibeacon';
import { BeaconModel } from '../../models/beaconModel';
import { Diagnostic } from '@ionic-native/diagnostic';
import { CommonProvider } from '../../providers/common/common';
import { uniq } from 'lodash';
import { GeofenceProvider } from '../../providers/geofence/geofence';
import { UserdataProvider } from '../../providers/userdata/userdata';


@Injectable()
export class BeaconProvider {

delegate: any;
  region: any;  
  constructor(public platform: Platform, private events: Events, public IBeacon: IBeacon,private userdataProvider:UserdataProvider,
              public diagnostic: Diagnostic, private commonProvider:CommonProvider, private geofenceProvider:GeofenceProvider) {
              console.log('Hello BeaconProvider Provider');
  }

  initialise(): any {
    let promise = new Promise((resolve, reject) => {
      // we need to be running on a device 
      if (this.platform.is('cordova')) {

        // Request permission to use location on iOS
        this.IBeacon.requestAlwaysAuthorization().then(() => {
      

        // create a new delegate and register it with the native layer
          this.delegate = this.IBeacon.Delegate();
        // Subscribe to some of the delegate's event handlers
        this.delegate.didRangeBeaconsInRegion()
          .subscribe(
          data => {
            resolve(true);
            this.events.publish('didRangeBeaconsInRegion', data);
          },
          error => console.error()
          );

        // setup a beacon region
          this.region = this.IBeacon.BeaconRegion('Genting-Beacon', 'beac1234-1234-1234-1234-123412341234', parseInt(this.userdataProvider.mallbeaconmajor));

        // start ranging
        this.IBeacon.startRangingBeaconsInRegion(this.region)
          .then(
          () => {
            console.log("startedRangingBeaconsInRegion");
            resolve(true);
          },
          error => {
            console.error('Failed to begin monitoring: ', error);
            resolve(false);
          }
          );
        }, err => {
          console.log("Request authorization error");
      });

      } else {
        resolve(false);
      }
    });
    return promise;
  }

  stopRangingBeacons() {

    this.IBeacon.stopRangingBeaconsInRegion(this.region).then(() => {
    }, err => {
      console.log('error in stopRangingForBeaconInRegion');
    })
    
  }


      //check if beacon is already present
      checkBeaconList(beaconList: BeaconModel[], beacon: BeaconModel):boolean {
  
        if (beaconList.length <= 0)
          return false;
        else {
          let bcn = beaconList.reverse().find(b => b.minor == beacon.minor);
          return this.isNotEmpty(bcn);
        }
          
        
      }
    
    
      //Check wheather the object is empty or not
      isNotEmpty(obj):boolean {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return true;
        }
        return false;
      }
  
  
    public sortBeaconsByAccuracy(allAvailableBeaconList:BeaconModel[]):BeaconModel[] {
    // Loop through the list of all beacons
    // Remove all beacons that have an arrival time > 5 seconds before now
    // Do a sort of these beacons and assign to NearestBeaconList
   
    let sortedByDistance = allAvailableBeaconList.sort(this.sortByAccuracy);
    return sortedByDistance;
  }


  //sort by distance;
  sortByAccuracy(a, b) {
    return a.distance - b.distance;
  }

      //check whether two list are same or not
      areDifferentByMinor(a, b) {
        if (a.length > 0 && b.length > 0) {
          var idsA = uniq(a.map(x => { return x.minor; })).sort();
          var idsB = uniq(b.map(x => { return x.minor; })).sort();
          return (idsA.join(',') !== idsB.join(','));
        } else {
          return true;
        }
        
      }
  
  
  checkBluetoothState() {
    return new Promise((resolve) => {
          
      this.diagnostic.getBluetoothState()
      .then((state) => {
        if (state == this.diagnostic.bluetoothState.POWERED_ON){

          resolve({initialize:true,bluetoothModal:false})
        } else if(state == this.diagnostic.bluetoothState.POWERED_OFF) {
          if (this.commonProvider.isBluetoothModalShown < 2 && this.geofenceProvider.canShowBluetoothPopUp) {
            this.commonProvider.isBluetoothModalShown = this.commonProvider.isBluetoothModalShown + 1;
            resolve({initialize:false,bluetoothModal:true})
          } 
          this.events.unsubscribe('didRangeBeaconsInRegion');
        }
      }).catch(e => console.error(e));
   })
  }
  
}
