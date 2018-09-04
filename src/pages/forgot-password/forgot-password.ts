import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EMAIL_REGEXP } from '../../validator/emailValid';
import { noWhitespaceValidator } from '../../validator/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { PWD_PATTERN } from '../../validator/emailValid';
import { AlertProvider } from '../../providers/alert/alert';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  @ViewChild('otp') verifyotpModal;
  @ViewChild("reset") resetModal;
  private forgotPassowrdForm: FormGroup;
  private username: AbstractControl;
  private _OTPForm: FormGroup;
  private passwordForm: FormGroup;
  private email: string;
  private otpdata: any;
  private _otp: AbstractControl;
  private Password: AbstractControl;
  private isOtpMatched: boolean = true;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, private authProvider: AuthProvider,
    private alertProvider: AlertProvider, private nativePageTransitions: NativePageTransitions, private platform: Platform) {
    this.forgotPassowrdForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP), noWhitespaceValidator])]
    });
    this.username = this.forgotPassowrdForm.controls['username'];
    this.email = this.navParams.get('email');
    if (this.email)
      this.forgotPassowrdForm.patchValue({
        username: this.email
      });

    this._OTPForm = formBuilder.group({
      _otp: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4), noWhitespaceValidator])]
    });
    this._otp = this._OTPForm.controls['_otp'];

    this.passwordForm = formBuilder.group({
      Password: ['', Validators.compose([Validators.required, Validators.pattern(PWD_PATTERN), Validators.minLength(6), Validators.maxLength(15)])]
    });

    this.Password = this.passwordForm.controls['Password'];

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  gotoPage(page) {
    this.navCtrl.push(page);
  }

  // sendOTP() {

  //   this.authProvider.sendOtpForgetPassword(this.forgotPassowrdForm.value.username).subscribe(otp => {

  //      if(otp.messageCode == '1004'){
  //        this.otpdata = otp.OTPCode;
  //        if (this.platform.is('android')) {
  //         let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
  //         this.nativePageTransitions.slide(options);
  //       } 
  //       this.navCtrl.push('OtpPage',{fromForgotPassword:'fromForgotPassword',username: this.forgotPassowrdForm.value.username,otpdata:this.otpdata})
  //      }
  //      else{
  //        console.log("error in send otp")
  //        let toast = this.alertProvider.presentToast(otp.Message);
  //        toast.present();
  //      }
  //   }, err => {
  //     console.log(err, "err");
  //   })
  // }
  ResetPasswordLink() {
    this.authProvider.setPasswordWithOtp(this.forgotPassowrdForm.value.username, this._OTPForm.value._otp, this.passwordForm.value.Password).subscribe(setpassword => {
      if (setpassword.messageCode == '1004') {
        if (this.platform.is('android')) {
          let options: NativeTransitionOptions = this.authProvider.getTransitionOption('right');
          this.nativePageTransitions.slide(options);
        }
        this.resetModal.open();
      }
      else {
        let toast = this.alertProvider.presentToast(setpassword.Message);
        toast.present();
      }
    })
  }

  closeModal() {
    this.resetModal.close();
    this.navCtrl.setRoot('LoginPage');
   
   
  }

  openResetModal() {
    this.navCtrl.setRoot('LoginPage');
  }


  validateOtp() {

    console.log(this._OTPForm.value._otp, "validate otp");
    // if (this.otpdata == this._OTPForm.value._otp) {
    this.verifyotpModal.close();
    this.isOtpMatched = false;
    // }
  }

  // submitPassword() {
  //   console.log(this.passwordForm.value.Password, "password value");
  //   console.log(this._OTPForm.value, "otp value");
  //   console.log(this.forgotPassowrdForm.value.username, "username value");
  //   this.authProvider.setPasswordWithOtp(this.forgotPassowrdForm.value.username, this._OTPForm.value._otp, this.passwordForm.value.Password,this.otpdata).subscribe(setpassword => {
  //     console.log(setpassword);

  //   })
  // }

}
