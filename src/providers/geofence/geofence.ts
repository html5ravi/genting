import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geofence } from '@ionic-native/geofence';
import { Device } from '@ionic-native/device';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { GEOFENCE } from '../../url';
import { STTARTER_BASE_URL } from '../../config';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AlertController } from 'ionic-angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HttpClient } from '@angular/common/http';




import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

declare var google;

@Injectable()
export class GeofenceProvider {
  _geoFenceList: any = [];
  canShowBluetoothPopUp: boolean = false;
  constructor(private platform: Platform, private localNotifications: LocalNotifications, private device: Device,
     private geolocation: Geolocation, private diagnostic: Diagnostic,
    public geofence: Geofence, private alertCtrl: AlertController, private openSettings: OpenNativeSettings,private httpClient:HttpClient) {

    this.platform.ready().then(() => {
      if (this.platform.is('cordova'))
        this.locationStatus();
    })
  }

  //Geo fence api call;
  getFenceData() {
    return this.httpClient.get(STTARTER_BASE_URL + GEOFENCE)
     
  }

  userPermissionForLocation() {
    return new Promise((resolve) => {
      this.diagnostic.getLocationAuthorizationStatus().then(resp => {
        if (resp == 'GRANTED') {
          this.diagnostic.requestLocationAuthorization().then(res => {
            // if (res == 'GRANTED')
            resolve(true);
          })
        } else {
          this.diagnostic.requestLocationAuthorization().then(res => {
            // if (res == 'GRANTED')
            resolve(true);
          })
        }
      })
    })
  }

  //gets the goe fence raw data;
  getGeofencedata() {
    this.getFenceData().subscribe(geofenceObj => {
      this._geoFenceList = geofenceObj['data'];
      if (this._geoFenceList.length > 0) {
        let fenceList = this.getFenceList(this._geoFenceList);
        this.addorUpdateFence(JSON.parse(fenceList));
      }
    }, err => {
      console.log('geofence not set');
    });
  }

  //add a or update geofence
  addorUpdateFence(fencelist) {
    this.geofence.addOrUpdate(fencelist).then(() => {
      console.log("geofence data added sucessfully");
    }, err => {
      console.log('error in adding geofence data');
    });
  }

  //removes all goefences
  removeAll() {
    this.geofence.removeAll().then(() => {
      console.log("geofence data removed successfully");
      this.getGeofencedata();
    }, err => {
      console.log('Nothing to remove from geofence');
    });
  }

  //returns mapped goefence List
  getFenceList(rawfencelist) {
    return JSON.stringify(rawfencelist.filter(f => f).map(fence => {
      return fence = {
        id: fence._id,
        latitude: parseFloat(fence.geocoordinates.x),
        longitude: parseFloat(fence.geocoordinates.y),
        radius: parseFloat(fence.radiusinmeters),
        transitionType: 1,
        notification: {
          title: fence.notificationtitle,
          text: fence.notificationmessage,
          openAppOnClick: true
        }
      }
    }));
  }

  //get the current position of a user
  getUserCurrentPosition() {
    return new Promise((resolve) => {
      let locationOptions: GeolocationOptions = {
        timeout: 5000
      }
      // let johorLatLng = new google.maps.LatLng(1.6030303, 103.62153039999998);
      // let gentingLatLng = new google.maps.LatLng(3.4031248, 101.7815062);
      let johorLatLng = new google.maps.LatLng(1.6030303, 103.62153039999998);
      let gentingLatLng = new google.maps.LatLng(12.9586607, 77.6524882);
      this.geolocation.getCurrentPosition(locationOptions).then((resp) => {
        let currentLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        if (google.maps.geometry.spherical.computeDistanceBetween(currentLatLng, johorLatLng) <= 200 || google.maps.geometry.spherical.computeDistanceBetween(currentLatLng, gentingLatLng) <= 200) {
          this.canShowBluetoothPopUp = true;
        }
        resolve(true);
      }, err => {
        console.log(err, "error in fetching current position");
        resolve(false);
      });
    });
  }

  public locationStatus() {
    this.diagnostic.getLocationAuthorizationStatus().then(status => {
      switch (status) {
        case this.diagnostic.permissionStatus.NOT_REQUESTED:
          this.diagnostic.requestLocationAuthorization().then(isAuthorized => {
            if (this.diagnostic.permissionStatus.GRANTED == isAuthorized || this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE == isAuthorized) {
              this.initializeGeofence();
            } else {
              console.log("Permission was not granted");
            }
          }, err => {
            console.log("Not authorized")
          });
          break;
        case this.diagnostic.permissionStatus.DENIED:
          // console.log("Permission Denied, So request for permission")
          // this.requestLocationPermissionAlert();
          break;
        case this.diagnostic.permissionStatus.DENIED_ALWAYS:
          // console.log("Permission Denied Always, So request for permission")
          // this.requestLocationPermissionAlert();
          break;
        case this.diagnostic.permissionStatus.GRANTED:
          this.initializeGeofence();
          break;
        case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
          this.initializeGeofence();
          break;
      }
    });
  }

  initializeGeofence() {
    if (this.platform.is('cordova')) {
      this.geofence.initialize().then(() => {
        this.removeAll();
      }, err => {
        console.log(err, "error in initialization");
      });
      this.geofence.onTransitionReceived().subscribe(resp => {
        console.log("geofence on transition recieved", resp);
        // alert(JSON.stringify(resp));
        if (this.device.version >= "8") {
          // for (let i = 0; i < resp.length, i++;) {
            this.localNotifications.schedule({
              id: 1,
              title: resp[0].notification.title,
              text: resp[0].notification.text
            });
          // }
        }
      });
    }
  }

  // requestLocationPermissionAlert() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Allow Location',
  //     message: 'This app requires Location to function properly. Please allow location access to the app',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Ok',
  //         handler: () => {(
  //           this.openSettings.open('location').then(opened=>{
  //             console.log("opened location");
  //             setTimeout(() => {
  //               this.diagnostic.requestLocationAuthorization().then(isAuthorized=>{
  //                 if(this.diagnostic.permissionStatus.GRANTED ==  isAuthorized || this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE == isAuthorized){
  //                   this.initializeGeofence();
  //                 }else{
  //                   console.log("Permission was not granted");
  //                 }
  //               })
  //             }, 5000);
  //           },err=>{
  //             console.log('err in opening settings');
  //           })
  //         )}
  //       }
  //     ]
  //   });
  //   alert.present();
  // }
}