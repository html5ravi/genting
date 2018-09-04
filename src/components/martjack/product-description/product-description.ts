import { NavParams, NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-description',
  templateUrl: 'product-description.html'
})
export class ProductDescriptionComponent {
  @Input() productData: any;
  toggle: boolean = false;
  toggleSize: boolean = false;
  toggleMoreInfo: boolean = false;

  constructor(private navCtrl: NavController) {
  }

  toggleGroup() {
    this.toggle = !this.toggle;
  }
  toggleGroupSize() {
    this.toggleSize = !this.toggleSize;
  }

  toggleGroupMoreInfo() {
    this.toggleMoreInfo = !this.toggleMoreInfo;
  }

  navToViewImage(slideIndex) {
    this.navCtrl.push("ImageViewerPage", { imageIndex: slideIndex, sizeGuide: this.productData.OfferDescription });
  }
}
