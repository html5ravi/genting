import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoresProvider } from '../../../providers/stores/stores';
import { ExceptionHandlerProvider } from '../../../providers/exception-handler/exception-handler';

@Component({
  selector: 'main-slider',
  templateUrl: 'main-slider.html'
})
export class MainSliderComponent {
  homeBannerData: any = [{ bannerimage: 'assets/images/findStores.png', linktype: 'InAppLink', destination: '/storedirectory' }, { bannerimage: 'assets/images/findDeals.png', linktype: 'InAppLink', destination: '/deals' }, { bannerimage: 'assets/images/navigateCentermap.png', linktype: 'InAppLink', destination: '/maps' }];

  constructor(private storesProvider: StoresProvider, private zone: NgZone, private excepProvider: ExceptionHandlerProvider, private navCtrl: NavController) {
    console.log('Hello MainSliderComponent Component');
    this.getHomeBanners();

  }

  getHomeBanners() {
    this.storesProvider.getHomeBanners().subscribe(homebanners => {
      this.zone.runOutsideAngular(() => {
        if (homebanners.data.length > 0) {
          this.homeBannerData.length = 0;
          setTimeout(() => {
            this.homeBannerData = [...homebanners.data];
          }, 100)
        }
      });
    }, err => {
      this.excepProvider.excpHandler(err)
      console.log(err);
    });
  }

  navTo(page) {
    this.navCtrl.setRoot(page);
  }
}
