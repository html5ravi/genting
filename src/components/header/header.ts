import { Component, Input, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';


@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {



  private img: string;
  @Input() canShowMenu: boolean;
  @Input() showBackButton: boolean = false;
  @Input() showProfileIcon: boolean = false;


  private activePage: any;

  constructor(private userdataProvider: UserdataProvider, private navCtrl: NavController, private zone: NgZone) {


    let isSubscribed = this.navCtrl.viewDidLoad.subscribe(data => {
      this.activePage = data.id;
      console.log(this.activePage, "active page");
      this.showMallLogo()
    });


    let unsub = this.navCtrl.viewWillLeave.subscribe(() => {
      isSubscribed.unsubscribe();

      unsub.unsubscribe();
    })






  }


  showMallLogo() {
    this.zone.runOutsideAngular(() => {

      if (this.activePage == 'LoginPage' || this.activePage == 'SelectOutletPage' || this.activePage == 'OtpPage' || this.activePage == 'LoginFullInfoPage' || this.activePage == 'EmailLoginPage' || this.activePage == 'ForgotPasswordPage') {
        this.img = 'assets/images/outerlogo.svg';
      }else if (this.activePage == 'Login' || this.activePage == 'SelectOutlet' || this.activePage == 'Otp' || this.activePage == 'LoginFullInfo' || this.activePage == 'EmailLogin') {
        this.img = 'assets/images/outerlogo.svg';
      } else {
        this.img = this.userdataProvider.selectMallLogo;
      }

    });

  }






  navTo(page) {
    this.navCtrl.setRoot(page);
  }

  goBack() {
    if (this.navCtrl.canGoBack())
      this.navCtrl.pop();
    else
      this.navCtrl.setRoot('HomePage');

  }




}
