import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { AuthProvider } from '../../providers/auth/auth';
import { BANNER_IMG_BASE_URL } from '../../config'
import { Observable } from 'rxjs';
import { Slides } from 'ionic-angular';

@IonicPage({
  segment:'shop'
})
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild('mySlider') Slider:Slides;
  @ViewChild('scrollSegment') ScrollSegment: ElementRef;
  public ProductList: string;
  public bannerData: any = [];
  public navigation_items: any = [];
  public img_url: string;
  banner: Observable<boolean>;
  navigation: Observable<boolean>;
  tileImages: any; 
  sliders:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public userdataprovider: UserdataProvider,
    public authprovider: AuthProvider) {
    this.img_url = BANNER_IMG_BASE_URL;
    this.banner = this.userdataprovider.banner();
    this.banner.subscribe(banner => {
      if (banner) {
        this.bannerData = this.userdataprovider.getBannerData().Banners.filter(bannerdata=> bannerdata.StoreID == this.userdataprovider.mallid);
      } else {
        console.log("No banner data");
      }
    });
    this.navigation = this.userdataprovider.navigation();
    this.navigation.subscribe(navigation => {
      if (navigation) {
        this.navigation_items = this.userdataprovider.getNavigationsData().Navigation.items;
        this.ProductList = this.navigation_items[0].name;
      } else {
        console.log("No Navigation data");
      }
    });
    if(this.bannerData.length > 0) {
      this.tileImages = this.bannerData.filter(bannerdata=> bannerdata.TargetType =='Product Tag');
    }
  }

  goto(page, data) {
    let name;
    if (data.Name.includes('|')) {
      console.log('has pipe')
      name = data.Name.split('|')[1];
    } else {
      name = data.Name;
    }
    localStorage.removeItem('sort');
    localStorage.removeItem('filters');
    this.navCtrl.push(page, { 'tagId': data.TargetID, 'brandData': name});
  }

  go(page, data) {
    this.navCtrl.push(page);
  }




  checkImgTile(tileImg) {
    if (tileImg.RefCode == 'brand-tile' && this.ProductList.toLowerCase() == 'shop')
      return true
    return false;
  }

  segChange(event){
   
     this.ProductList = event._value;
     const selectedIndex = this.navigation_items.findIndex((item)=>{
           return item.name === event._value;
     });
    this.Slider.slideTo(selectedIndex);
    

  }

  onSlideChanged(slider){
    if(slider.getActiveIndex() <= this.navigation_items.length - 1){
    this.ProductList = this.navigation_items[slider.getActiveIndex()].name;
      if(slider.getActiveIndex() === this.navigation_items.length - 1)
        this.Slider._allowSwipeToNext = false;
        else
          this.Slider._allowSwipeToNext = true;

    }
  }
}
