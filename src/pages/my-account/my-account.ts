import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})

export class MyAccountPage {
  userProfileData: any = {};
  mobile: any;
  email: any;
  firstname: any;
  lastname: any;
  postalAddress: any;
  city: any;
  cityName: any;
  state: any;
  pin: any;
  country: any;
  countryName: any;
  birthDate: any;
  gender: any;
  tokenValid: string;
  guestUser: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userdataProvider: UserdataProvider, private authProvider: AuthProvider,
    private excepProvider: ExceptionHandlerProvider) {
   
  }

  ionViewWillEnter(){
    console.log(localStorage.getItem('token'),"::::::::::;;TOKEN::::::::::::::")
      if(localStorage.getItem('token') != null ){
      this.authProvider.validateToken().then(data => {
        console.log(data, '::::::::::::Validate Token:::::::::::::::');
        if (data == true) {
          console.log("token is coming", data)
          this.tokenValid = localStorage.getItem('token');
          this.profileDetails();
        }
        else{
          this.guestUser = true;
          console.log("token is not coming", data)
        }
      })
    }
    else{
      this.guestUser = true;
      console.log("token is not comingin else")
    }




    // this.tokenValid = localStorage.getItem('token');
    // console.log(this.tokenValid, ":::::::::::::token valid:::::::")
    // console.log(this.guestUser,"guestuser1")
    // if (this.tokenValid == '' || this.tokenValid == null) {
    //   this.guestUser = true;
    //   console.log(this.guestUser,"guestuser2")
    // }
    // else{
    //   this.profileDetails();
    // }
    
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyAccountPage');
  }

  goBack() {
    this.navCtrl.push('LoginPage');
  }

  gotoPage(page) {
    this.navCtrl.push(page, { userProfileData: this.userProfileData });
    // this.navCtrl.push(page,{mobile:this.mobile, email:this.email, firstname:this.firstname, lastname:this.lastname});
  }

  profileDetails() {
    this.authProvider.validateToken().then(data => {  ``
      console.log(data, '::::::::::::Validate Token:::::::::::::::');
      if (data == true) {
      this.authProvider.profileData().subscribe(profileData => {
        if (profileData.messageCode == '1004') {
          this.userProfileData = profileData.Customer;
          console.log(this.userProfileData, ":::::::::::::::::customerdetails:::::::::::::::::::")
        } else {
          console.log("no profile data")
        }
      }, err => {
        this.excepProvider.excpHandler(err);
      });
    }
  });
}
}
