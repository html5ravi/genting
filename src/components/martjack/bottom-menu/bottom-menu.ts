import { Component, NgZone, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../../providers/cart/cart';

@Component({
  selector: 'bottom-menu',
  templateUrl: 'bottom-menu.html'
})
export class BottomMenuComponent {
  @Input('pagename') pageName:string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private zone: NgZone, public cartProvider :CartProvider) {
    console.log(this.cartProvider.getCartItemQuantity(),"cart")
  }

  goto(page) {
      this.navCtrl.setRoot(page);
  }
}
