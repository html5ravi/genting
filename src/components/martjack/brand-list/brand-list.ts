import { Component, NgZone, Input } from '@angular/core';


@Component({
  selector: 'brand-list',
  templateUrl: 'brand-list.html'
})
export class BrandListComponent {
  @Input() productDisplay: any;

  constructor() {
  }
}
