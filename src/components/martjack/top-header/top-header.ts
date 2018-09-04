import { Component } from '@angular/core';
import { UserdataProvider } from '../../../providers/userdata/userdata';
@Component({
  selector: 'top-header',
  templateUrl: 'top-header.html'
})
export class TopHeaderComponent {

  headerImg: any;

  constructor(private userdataProvider:UserdataProvider) {
    this.headerImg = this.userdataProvider.getSelectedMallLogo();
  }

}
