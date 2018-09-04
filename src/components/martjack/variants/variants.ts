import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'variants',
  templateUrl: 'variants.html'
})
export class VariantsComponent {
  // @Input() color: string;
  // @Output() choosevariants = new EventEmitter();
  // @Input() propertyId: string;
  // @Input() propertyName: string;
  // @Input() propertyValueId: string;
  // @Input() isDisplaysWatch: boolean;
  // @Input() propertyValue: string;
  // @Input() propertyValueDescription: string;
  // @Input() rank: string;
  // @Input() sequence: string;
  // @Input() swatchImage: string;
  @Input() VariantProperties: string[];
  @Input() VariantProducts: string[];



  constructor() {
    setTimeout(() => {
      console.log(this.VariantProperties, "recieved VariantProperties");
      console.log(this.VariantProducts, "recieved VariantProducts");
    }, 3000);
  }

  chooseVariants() {
    // this.choosevariants.emit({
    //   propertyid: this.propertyId,
    //   PropertyName: this.propertyName,
    //   propertyvalue:this.propertyValue,
      
    // });
  }
}
