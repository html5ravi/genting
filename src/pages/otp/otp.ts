import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,Platform } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { CommonProvider } from '../../providers/common/common';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { noWhitespaceValidator } from '../../validator/profile';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';
import { CustomValidators, PWD_PATTERN } from '../../validator/emailValid';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';





@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  @ViewChild('terms') modalTerm;
  // @ViewChild("reset") resetModal;
  _OTPForm: FormGroup;
  passwordForm: FormGroup;
  _email: string;
  _isRegistered: boolean;
  _otp: AbstractControl;
  _social_user_id: string;
  _social_channel: string;
  _loginButton: string;
  _isSocialChannelPresent: boolean;
  private UserName: any = [];
  private otpvalue: number;
  otp_bool: boolean = false;
  private Password: AbstractControl;
  private ConfirmPassword: AbstractControl;
  private getuserdata :any = [];
  fromForgotPassword: any;
  username: any;
  private otpdata: any;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private alertProvider: AlertProvider,
    private authProvider: AuthProvider,
    private commonProvider: CommonProvider,
    private excepProvider: ExceptionHandlerProvider,
    private userdataProvider: UserdataProvider,
    private menuController: MenuController,
    public formBuilder: FormBuilder,
    private analytics: AnalyticsProvider, private translate: TranslateService,private nativePageTransitions:NativePageTransitions,private platform:Platform) {


    this._OTPForm = formBuilder.group({
      _otp: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4), noWhitespaceValidator])]
    });

    this._otp = this._OTPForm.controls['_otp'];
 this.getuserdata = this.navParams.get('getuserdata')

    this.passwordForm = formBuilder.group({
      Password: ['', Validators.compose([Validators.required, Validators.pattern(PWD_PATTERN)])],
      ConfirmPassword: ['', Validators.compose([Validators.required])]},
       {
        validator: CustomValidators.Match('Password', 'ConfirmPassword')
      });

    this.Password = this.passwordForm.controls['Password'];
    this.ConfirmPassword = this.passwordForm.controls['ConfirmPassword'];
  
     this.fromForgotPassword =  this.navParams.get('fromForgotPassword');
    //  this.username = this.navParams.get('username');
     this.otpdata = this.navParams.get('otpdata');
  }

  ionViewWillEnter() {
    this.menuController.swipeEnable(false);
    if (this.menuController.isOpen()){
      this.menuController.close();}
      // this.otpModal.open();
  }

  validateOtp() {
    if( this.fromForgotPassword  != 'fromForgotPassword'){
    this.authProvider.verifyOtp(this.getuserdata.UserName, this._OTPForm.value._otp).subscribe(verifyOtp => {
      if (verifyOtp[0].code == '200') {
        this.otp_bool = true;
      }
      else {
        let toast = this.alertProvider.presentToast('Incorrect OTP');
        toast.present();
      }
    })
  }
  // else{
  //    if (this.otpdata == this._OTPForm.value._otp) { 
  //     this.otp_bool = true;
  //    }
  //   else{
  //     let toast = this.alertProvider.presentToast('Incorrect OTP');
  //     toast.present();
  //   }
  // }
  }

  resendOtp() {
    if( this.fromForgotPassword  != 'fromForgotPassword'){
    this.authProvider.sendOTP(this.getuserdata.UserName,false).subscribe(otpData => {
      if (otpData[0].code == '200') {
        console.log("otp sent", otpData);
        let toast = this.alertProvider.presentToast('Resend OTP successful.Please check your email.');
        toast.present();
      }
      else {
        console.log("otp not sent")
      }
    })
  }
    // else{
    //   console.log("fromforgotpasswordpage")
    //   this.authProvider.sendOtpForgetPassword(this.username).subscribe(otp => {
        
    //      if(otp.messageCode == '1004'){
    //        this.otpdata = otp.OTPCode;
  
    //        this.authProvider.forwardMartJackOtp(this.username, this.otpdata).subscribe(isOtpSent => {
    //          console.log(isOtpSent, "is otp forwarded");
    //          if (isOtpSent[0].code == 200) {
    //            console.log("resend OTP for forgot password")
    //            let toast = this.alertProvider.presentToast('Resend OTP successful.Please check your email.');
    //            toast.present();
          
    //          } else {
    //            console.log("otp not sent");
    //          }
    //        })
    //      }
    //      else{
    //        console.log("error in send otp")
    //      }
    //   }, err => {
    //     console.log(err, "err");
    //   })

    // }
  }

  passwordSubmit() {
    if( this.fromForgotPassword  != 'fromForgotPassword'){
    let registerData = {
      FirstName: this.getuserdata.FirstName,
      LastName: this.getuserdata.LastName,
      UserName: this.getuserdata.UserName,
      Password: this.passwordForm.value.Password,
      ConfirmPassword: this.passwordForm.value.ConfirmPassword,
      MobileNo: this.getuserdata.MobileNo || ''
    }
    this.authProvider.register(registerData).subscribe(registerData => {
      if (registerData['messageCode'] == '1004') {
        console.log("::::::::::::REgister successful with otp and password:::::::")

        this.userdataProvider.saveBasicDetails( this.getuserdata.UserName, this.passwordForm.value.Password);
        let loginData = {
          username: this.userdataProvider.getEmail(),
          password: this.userdataProvider.getPassword()
        }
        this.authProvider.login(loginData).subscribe(loginsuccess => {
          if (loginsuccess['messageCode'] == '1004') {

            if (this.platform.is('android')) {
              let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
              this.nativePageTransitions.slide(options);
            } 
            this.navCtrl.setRoot('SelectOutletPage');
          } else {
            console.log(loginsuccess, "login error after register sucessfull");
          }
        }, err => {
          this.excepProvider.excpHandler(err);
        })
      } else {
        let toast = this.alertProvider.presentToast(registerData.Message);
        toast.present();
      }
    }, err => {
      this.excepProvider.excpHandler(err);
    })
  }

// else{
//   this.authProvider.setPasswordWithOtp(this.username, this._OTPForm.value._otp, this.passwordForm.value.Password).subscribe(setpassword => { 
//         if (this.platform.is('android')) {
//           let options: NativeTransitionOptions = this.authProvider.getTransitionOption('right');
//           this.nativePageTransitions.slide(options);
//              // this.resetModal.open();
//         } 
//         let toast = this.alertProvider.presentToast('There is some problem in resetting your password. Please try after sometime.');
//         toast.present();
//         this.navCtrl.setRoot('LoginPage');
//   })
// }

}
  
// closeModal(){
//   this.resetModal.close();
//   this.navCtrl.setRoot('LoginPage');
// }
    
}

