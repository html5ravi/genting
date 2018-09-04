import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EMAIL_REGEXP } from '../../validator/emailValid';
import { noWhitespaceValidator } from '../../validator/profile';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';


@IonicPage()
@Component({
  selector: 'page-email-login',
  templateUrl: 'email-login.html',
})

export class EmailLoginPage {
  emailLoginForm: FormGroup;
  email: AbstractControl;
  _social_user_id: string;
  _social_channel: string;
  _isSocialChannelPresent: boolean;
  _useremail = null;

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authProvider: AuthProvider,
    private menuController: MenuController,
    private excepProvider: ExceptionHandlerProvider,
    private analytics: AnalyticsProvider, private translate:TranslateService) {

    this.emailLoginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP), noWhitespaceValidator])]
    });
    this.email = this.emailLoginForm.controls['email'];
    //get email from facebook
    this._useremail = this.navParams.get('useremail');
    this._social_user_id = this.navParams.get('social_user_id');
    this._social_channel = this.navParams.get('social_channel');
    this._isSocialChannelPresent = this.navParams.get('isSocialChannelPresent');
    this.analytics.fa.logEvent('EmailLoginPage');
  }

  ionViewWillEnter() {
    this.menuController.swipeEnable(false);
    if (this.menuController.isOpen())
      this.menuController.close();
  }

  // verifying email function: on success call send Otp and redirect to otp page
  verifyEmail() {
   
    this.authProvider.verifyEmail(this.emailLoginForm.value).subscribe(res => {
      console.log(res,"ressss")
      this.authProvider.sendOTP(this.emailLoginForm.value,false).subscribe(result => {
        if (result[0].code == 200) {
          if (this._social_user_id && this._social_channel && this._isSocialChannelPresent === false) {
            this.navCtrl.push("OtpPage", { email: this.emailLoginForm.value.email, isregistered: res[0].code == 200 ? true : false, social_user_id: this._social_user_id, social_channel: this._social_channel, isSocialChannelPresent: this._isSocialChannelPresent });
          }
          else
            this.navCtrl.push("OtpPage", { email: this.emailLoginForm.value.email, isregistered: res[0].code == 200 ? true : false });
        }
      }, err =>  this.excepProvider.excpHandler(err));
    }, err => this.excepProvider.excpHandler(err));
  }
}
