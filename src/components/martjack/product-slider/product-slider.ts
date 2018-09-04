import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'product-slider',
  templateUrl: 'product-slider.html'
})
export class ProductSliderComponent {
  text: string;
  ProductList:any;
  @Input() sliderImage: any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    setTimeout(() => {
      console.log(this.sliderImage, "slider Image");
    }, 4000);
  }

  goBack(){
    this.navCtrl.pop()
  }

  gotoMybag(){
    this.navCtrl.setRoot('MyBagPage');
    this.ProductList = 'MyBag';  
  }

  navToViewImage(slideIndex) {
    this.navCtrl.push("ImageViewerPage", { imageIndex: slideIndex, sliderImage: this.sliderImage });
  }
}
