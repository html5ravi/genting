import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsProvider } from '../../../providers/products/products';
import { UserdataProvider } from '../../../providers/userdata/userdata';

@Component({
  selector: 'bag-list',
  templateUrl: 'bag-list.html'
})
export class BagListComponent {
  @Input() cartdetails: any;
  @Output() cartEvent = new EventEmitter();
  @Input() quantityValue: any;
  @Output() quantityEvent = new EventEmitter();

  quantity: number;

  constructor(private navCtrl: NavController, private productsProvider: ProductsProvider, private userdataProvider: UserdataProvider) {
    setTimeout(() => {
      this.quantity = this.cartdetails.Quantity;
      // console.log(this.cartdetails, '====================Cart Details Quantity======================');
    }, 3000);
  }

  goto(cartdetails) {
    this.navCtrl.push("ProductDetailPage", { "productDetails": cartdetails });
  }

  deleteCartItem(cartdetails) {
    this.cartEvent.emit(cartdetails);
  }

  emitQuantity() {
    console.log(this.quantity, '====================Quantity======================');
    if (this.quantity != this.cartdetails.Quantity) {
      let data = {
        "cartReferenceKey": this.cartdetails.CartReferenceKey,
        "quantity": this.quantity
      }
      this.quantityEvent.emit(data);
    }
  }


}
