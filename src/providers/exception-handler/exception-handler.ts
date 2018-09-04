import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// Import Providers.
import { AlertProvider } from '../alert/alert';

@Injectable()
export class ExceptionHandlerProvider {

  constructor(private alertProvider: AlertProvider) {
  }

  SERVER_ERROR = `Please check your internet connectivity and restart the application.`;
  BAD_REQUEST = `Bad Request`;
  UNAUTHORIZED = `Unauthorized`;
  FORBIDDEN = `Forbidden`;
  NOT_FOUND = `Unable To Connect, Please Check Your Connection`;
  METHOD_NOT_ALLOWED = `Method Not Allowed`;
  REQUEST_TIME_OUT = `Request Timeout`;
  INTERNAL_SERVER = `Internal Server Error`;

  public excpHandler(err) {

    if (err.status == 400) {
      let alert = this.alertProvider.presentToast(this.BAD_REQUEST);
      alert.present();
      return;
    }
    if (err.status == 401) {
      let alert = this.alertProvider.presentToast(this.UNAUTHORIZED);
      alert.present();
      return;
    }
    if (err.status == 403) {
      let alert = this.alertProvider.presentToast(this.FORBIDDEN);
      alert.present();
      return;
    }
    if (err.status == 404) {
      let alert = this.alertProvider.presentToast(this.NOT_FOUND);
      alert.present();
      return;
    }
    if (err.status == 405) {
      let alert = this.alertProvider.presentToast(this.METHOD_NOT_ALLOWED);
      alert.present();
      return;
    }
    if (err.status == 408) {
      let alert = this.alertProvider.presentToast(this.REQUEST_TIME_OUT);
      alert.present();
      return;
    }
    if (err.status == 500) {
      let alert = this.alertProvider.presentToast(this.INTERNAL_SERVER);
      alert.present();
      return;
    }
  }
}