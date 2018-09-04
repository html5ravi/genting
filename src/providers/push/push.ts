import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Webengage, WebengageUser, WebengagePush, WebengageNotification } from '@ionic-native/webengage';
declare var webengage;

@Injectable()
export class PushProvider {

  constructor(public platform: Platform,
    private webengageNotification: WebengageNotification,
     private webengage: Webengage,
    private webengageUser: WebengageUser,
    private webengagePush: WebengagePush
  ) {
    console.log('Hello PushProvider Provider');
    this.pushEvent();
  }



  pushEvent() {
    this.platform.ready().then(() => {
      if (!this.platform.is('cordova')) {
        console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
        return;
      } else {
        if (this.platform.is("ios")) {
          webengage.engage();
        } else {
          this.webengage.engage();
        }
      }
    });
    // webengage.push.onClick((deeplink, customData) => {
    //   console.log("push clicked");
    //   console.log(deeplink);
    //   console.log(customData);
    // });
    // webengage.engage();
  }

  loginToWebengage(email) {
    console.log(email, '=====================Webengage Email data======================');
    console.log("Logged in to webengage");
    if (this.platform.is('ios')) {
      webengage.user.login(email);
    } else {
       this.webengageUser.login(email);
    }
  }

  saveCustomerInfoToWebengage(data) {
    console.log(data, '=====================Webengage Customer inFo data======================');
    if (this.platform.is("ios")) {
      setTimeout(() => {
        if (data.firstName)
          webengage.user.setAttribute('we_first_name', data.firstName);
        if (data.lastName)
          webengage.user.setAttribute('we_last_name', data.lastName);
        if (data.email)
          webengage.user.setAttribute('we_email', data.email);
        if (data.mobile)
          webengage.user.setAttribute('we_phone', data.mobile);
      }, 2000);
    } else {
      setTimeout(() => {
        if (data.firstName)
          this.webengageUser.setAttribute('we_first_name', data.firstName);
        if (data.lastName)
          this.webengageUser.setAttribute('we_last_name', data.lastName);
        if (data.email)
          this.webengageUser.setAttribute('we_email', data.email);
        if (data.mobile)
          this.webengageUser.setAttribute('we_phone', data.mobile);
      }, 2000);
    }
  }

  logoutWebengage() {
 
    console.log("Logged out of webengage");
    if (this.platform.is("ios")) {
      webengage.user.logout();
    } else {
      this.webengageUser.logout();
    }
  }
}
