import { Injectable } from '@angular/core';
import { LoadingController, Platform, AlertController,App } from 'ionic-angular';

import 'rxjs/add/operator/map';


// Import Providers.
//import { AlertProvider } from '../alert/alert';

@Injectable()  
export class LoaderProvider {

  public loading: any;
  public backPressed: any = false;
  constructor(private loadingCtrl: LoadingController, 
              private platform: Platform, 
              private appCtrl: App, 
              private alertCtrl: AlertController) {
    
    this.presentBackOptions();
    
  }

  //loader
  presentLoadingCustom() {
    return this.loadingCtrl.create({
      spinner: 'hide',
      content: `<figure><img src="assets/images/loader.gif" /></figure>`,
      duration: 20000,
    });
  }

  //dismiss loader 
  dismissLoader(loader) {
    loader.dismiss();
    }
  

  presentBackOptions() {
    this.platform.ready().then(() => {
       this.platform.registerBackButtonAction(() => {
         let nav = this.appCtrl.getActiveNavs()[0];
         let active = nav.getActive();
         if (nav.canGoBack()) { //Can we go back?
           nav.pop();
         }
         else if (active.id == 'LoginPage' || active.id == 'HomePage' || active.id == "SelectOutletPage") {

          
          let exitalert = this.alertCtrl.create({
            title: 'Exit App?',
            enableBackdropDismiss: false,
            cssClass: '',
            message: 'Are you sure you want to exit the app?',
            buttons: [{
              text: 'Cancel',
              cssClass: '',
              handler: () => {
                exitalert.dismiss();
              }
            }, {
              text: 'Ok',
              cssClass: '',
              handler: () => {
                exitalert.dismiss().then(() => {
                  this.platform.exitApp();
                });
              }
            }]
          });
          exitalert.present();
           
         }
         else {
           
           nav.setRoot('HomePage');
         }
      })
       
    })

   
  }

}
