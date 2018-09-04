import { AlertController, ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AlertProvider {

  constructor(private toastCtrl: ToastController,
    private alertCtrl: AlertController) {
  }

  //alert
  presentAlert(title, subTitle, buttons, cssClass) {
   return this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: buttons,
      cssClass: cssClass
    });
  }

  //confirm
  presentConfirm(title, message, buttons, cssClass) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: buttons,
      cssClass: cssClass
    });
    alert.present();
  }

  //toast with delay 5 seconds delay
  presentToast(message) {
    return this.toastCtrl.create({
       message: message,
       duration: 4000,
       position: 'bottom',
       cssClass:"toast-wrapper",
     });
 
   }
}
