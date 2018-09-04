import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';


@Component({
  selector: 'mymodal',
  templateUrl: 'mymodal.html',
})

export class MymodalComponent {
  @Output() closeClicked = new EventEmitter();
  @ViewChild('myModal') modal;
  @Input('title') modalTitle: string;
  @Input() showclose:boolean = true;
  public title: string;
  public openModal: any;
  public state: any;

  constructor() {
    this.openModal = false;
    setTimeout(() => {
      console.log(this.showclose,"show close")
    }, 3000);
  }

  ngOnInit() {
    this.title = this.modalTitle;
    this.openModal = false;
    this.state = 'hide';

  }
  open() {
    this.openModal = true;
    this.state = 'show';
  }

  close() {
    this.openModal = false;
    this.state = 'hide';
  }

  closeCliked() {
    this.closeClicked.emit('true');
  }
}

