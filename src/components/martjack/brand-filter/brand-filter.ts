import { Component, Input,EventEmitter, Output } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'brand-filter',
  templateUrl: 'brand-filter.html'
})
export class BrandFilterComponent {
  @Input() text: string;
  @Output() openfilters = new EventEmitter();

  constructor(private navParams:NavParams) {
  }

  openFilters() {
    console.log('open');
    //this.navCtrl.push('FiltersPage');
     this.openfilters.emit(true);
  }

  
}
