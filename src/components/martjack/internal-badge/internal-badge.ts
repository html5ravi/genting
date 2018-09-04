import { Component,Output,EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartProvider } from '../../../providers/cart/cart';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'internal-badge',
  templateUrl: 'internal-badge.html'
})
export class InternalBadgeComponent {

  text: string;
  ProductList: any;
  @Output() share = new EventEmitter();

  constructor(private navCtrl: NavController, public cartProvider: CartProvider, public socialSharing: SocialSharing) {
    console.log('Hello InternalBadgeComponent Component');
    this.text = 'Hello World';
    console.log(this.cartProvider.getCartItemQuantity(), "cart")
  }

  gotoMybag() {
    this.navCtrl.setRoot('MyBagPage');
    this.ProductList = 'MyBag';
  }

  socialShare() {
    this.share.emit('openshare');
  }

}
