import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CheckoutProvider } from '../../../providers/checkout/checkout'

@Component({
  selector: 'item-list',
  templateUrl: 'item-list.html'
})
export class ItemListComponent {

  @Input('product') orderDetail: any;
  @Input('merchantid') merchantId: string;
  @Output() findstore = new EventEmitter();
  private variants: any = [];
  private status: string;


  constructor(private checkoutProvider:CheckoutProvider) {
    let regex = /\((.*)\)/;

   
    setTimeout(() => {
      console.log(this.orderDetail,"this.orderDetail")

      if (this.orderDetail) {
          this.getStatus(this.orderDetail.DerivedStatusCode)
        if(this.orderDetail.ProductTitle.includes('(') && this.orderDetail.ProductTitle.includes(')')){
            let customdata = this.orderDetail.ProductTitle.match(regex)[1].split(';');
            this.orderDetail.ProductTitle = this.orderDetail.ProductTitle.split('(')[0];
            this.variants = customdata.map(variant => {
              return {
                key: variant.split('=')[0],
                value: variant.split('=')[1]
              }
            })
        
          }
      }
      
    }, 10);

    
    
  }

  findAssociatedStore(vendorId) {
    this.findstore.emit(vendorId);
  }

  getStatus(status) {

    this.status = this.checkoutProvider.getOrderStatus(status);
    
  }

  

}
