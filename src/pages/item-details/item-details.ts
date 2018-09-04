import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
  cartData: any = [];

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }
  
  ionViewDidEnter(){
    this.cartData = JSON.parse(localStorage.getItem('cartData'));
    console.log(this.cartData,'======================Item Details====================')
  }

}
