import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'size-select',
  templateUrl: 'size-select.html'
})
export class SizeSelectComponent {
  @Input() size;
  @Output() choosesize = new EventEmitter(); 

  constructor() {
    setTimeout(() => {
      console.log(this.size,'=======================Size Object=====================');
    }, 3000);
  }

  chooseSize() {
    this.choosesize.emit(this.size);
  }
}
