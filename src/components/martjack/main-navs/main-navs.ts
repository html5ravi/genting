import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'main-navs',
  templateUrl: 'main-navs.html'
})
export class MainNavsComponent {

  constructor(private navCtrl:NavController, private navParms:NavParams,
  public navParams: NavParams, ) {
 
  }

  goto(page){
    this.navCtrl.setRoot(page);
  }

}
