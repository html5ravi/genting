import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, MenuController, Events, Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { InstagramProvider } from '../../providers/instagram/instagram';
import { CommonProvider } from '../../providers/common/common';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { AlertProvider } from '../../providers/alert/alert';
import { AuthProvider } from '../../providers/auth/auth';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EMAIL_REGEXP } from '../../validator/emailValid';
import { NAME_PATTERN } from '../../validator/emailValid';
import { MOBILE_PATTERN } from '../../validator/emailValid';
import { noWhitespaceValidator } from '../../validator/profile';
import { CustomValidators, PWD_PATTERN } from '../../validator/emailValid';
import { MERCHANT_ID } from '../../config';
import { PushProvider } from '../../providers/push/push';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


//Import model
import { registrationModel } from '../../models/registrationModel';
import { LoaderProvider } from '../../providers/loader/loader';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  @ViewChild('otp') otpModal;
  @ViewChild('terms') termsModal;
  @ViewChild('termsguest') termsGuestModal;
  @ViewChild('password') loginPass:ElementRef;
  private fbId = null;
  private email = null;
  private LoginTab: any;
  private loginDetails: any = {};
  isLoggedIn: boolean;
  public LoginDetails: any;
  private loginForm: FormGroup;
  _OTPForm: FormGroup;
  private registerForm: FormGroup;
  private username: AbstractControl;
  private password: AbstractControl;
  private FirstName: AbstractControl;
  private LastName: AbstractControl;
  private UserName: AbstractControl;
  private Password: AbstractControl;
  private ConfirmPassword: AbstractControl;
  private MobileNo: AbstractControl;
  private mj_user: boolean = false;
  getuserdata: any = [];
  _otp: AbstractControl;
  rewardId: any;
  rewardsID: any

  constructor(private navCtrl: NavController, private loaderProvider: LoaderProvider,
    private facebook: Facebook, private instagramProvider: InstagramProvider,
    private commonProvider: CommonProvider, private authProvider: AuthProvider,
    private excepProvider: ExceptionHandlerProvider, private pushProvider: PushProvider,
    private alertProvider: AlertProvider, private userdataProvider: UserdataProvider,
    private menuController: MenuController, private analytics: AnalyticsProvider,
    public events: Events, translate: TranslateService, private platform: Platform,
    private formBuilder: FormBuilder, private nativePageTransitions:NativePageTransitions) {
    this.analytics.fa.logEvent('LoginPage');
    this.events.subscribe('fblogout', islogout => {
      this.facebook.logout().then(() => {
        console.log("successfully logged out of facebook ");
      }, err => {
        console.log("error in logging out of facebook ");
      });
      this.userdataProvider.isLoggedIn().subscribe(isLoggedInOrNot => {
        this.isLoggedIn = isLoggedInOrNot;
        console.log(isLoggedInOrNot, "isLoggedInOrNot");
      });
    });
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP), noWhitespaceValidator])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(PWD_PATTERN)])]
    });
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];

    this.registerForm = this.formBuilder.group({
      FirstName: ['', Validators.compose([Validators.required, Validators.pattern(NAME_PATTERN), noWhitespaceValidator])],
      LastName: ['', Validators.compose([Validators.required, Validators.pattern(NAME_PATTERN), noWhitespaceValidator])],
      UserName: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP), noWhitespaceValidator])],
      Password: ['', Validators.compose([Validators.required, Validators.pattern(PWD_PATTERN)])],
      ConfirmPassword: ['', Validators.compose([Validators.required, noWhitespaceValidator])],
      MobileNo: ['', Validators.compose([Validators.required, Validators.pattern(MOBILE_PATTERN), noWhitespaceValidator])],
      rewards: ['']
    }, {
        validator: CustomValidators.Match('Password', 'ConfirmPassword')
      });

    this.FirstName = this.registerForm.controls['FirstName'];
    this.LastName = this.registerForm.controls['LastName'];
    this.UserName = this.registerForm.controls['UserName'];
    this.Password = this.registerForm.controls['Password'];
    this.ConfirmPassword = this.registerForm.controls['ConfirmPassword'];
    this.MobileNo = this.registerForm.controls['MobileNo'];
    this.rewardsID = this.registerForm.controls['rewards'];
  }

  ionViewWillEnter() {
    this.menuController.swipeEnable(false);
    if (this.menuController.isOpen())
      this.menuController.close();
  }

  ionViewDidLoad() {
    this.LoginTab = 'Login';
  }

  loginWithEmail() {
    this.navCtrl.push("EmailLoginPage");
  }

  declineModal() {
    this.termsModal.close();
    let toast = this.alertProvider.presentToast('Sorry cannot register without accepting terms and conditions');
    toast.present();

  }

  acceptTerms() {
    this.termsModal.close();
    this.register();
  }

  openTermsModal() {
    this.termsModal.open();
  }

  // Login with facebook
  loginWithFacebook() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.facebook.login(['public_profile', 'user_friends', 'email']).then((response: FacebookLoginResponse) => {
      console.log(response, "response fb");
      this.facebook.api('me?fields=id,first_name,last_name,email', []).then(profile => {
        console.log("Login response fro facebook", response);
        console.log("Profile response fro facebook", profile);
        this.fbId = { userId: profile['id'] };
        this.email = { userEmail: profile['email'] };
        let fbData = {
          "merchantId": MERCHANT_ID,
          "provider": "fb",
          "profileId": this.fbId.userId,
          "email": '',
          "firstName": profile['first_name'],
          "lastName": profile['last_name'],
          "gender": '',
          "loginId": '',
          "mobileNo": ''
        }
        if (this.email.userEmail) {
          fbData.email = this.email.userEmail;
          fbData.loginId = this.email.userEmail;
        }
        this.authProvider.loginWithFB(fbData).subscribe(fbResponse => {
          loader.dismiss();
          if (fbResponse.messageCode == '1004') {
            this.userdataProvider.setProfileId(this.fbId.userId);
            localStorage.setItem('useremail', profile['email']);
            let webEngageData = {
              firstName: profile['first_name'],
              lastName: profile['last_name'],
              email: this.email.userEmail
            }
            if (this.platform.is('cordova')) {
              this.pushProvider.loginToWebengage(this.email.userEmail);
              this.pushProvider.saveCustomerInfoToWebengage(webEngageData);
            }
            let options: NativeTransitionOptions = this.authProvider.getTransitionOption('up');
            this.nativePageTransitions.slide(options);
            this.navCtrl.setRoot('SelectOutletPage');
          } else {
            let toast = this.alertProvider.presentToast(fbResponse.Message);
            toast.present();
          }
        }, err => {
          let toast = this.alertProvider.presentToast(err);
          toast.present();
        });
      }, err => {
        let toast = this.alertProvider.presentToast('Failed to get user data from Facebook');
        toast.present();
      });
    }, err => {
      let toast = this.alertProvider.presentToast(err.errorMessage);
      toast.present();
    });
  }

  loginWithGuest() {

    this.termsGuestModal.close();

    if (this.platform.is('android')) {
      let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
      this.nativePageTransitions.slide(options);
    }  
    this.navCtrl.setRoot('SelectOutletPage');
  }

  gotoPage(page) {
    this.navCtrl.push(page);
  }

  gotoForgetPassword() {
    if (this.platform.is('android')) {
      let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
      this.nativePageTransitions.slide(options);
    } 
    this.navCtrl.push('ForgotPasswordPage', { email: this.loginForm.value.username });
  }

  login() {
    this.authProvider.login(this.loginForm.value).subscribe(loginData => {
      if (loginData['messageCode'] == '1004') {
        if (this.isLoggedIn) {
          let options: NativeTransitionOptions = this.authProvider.getTransitionOption('up');
          this.nativePageTransitions.slide(options);
          this.navCtrl.setRoot('SelectOutletPage');
        }
      } else if (loginData['messageCode'] == '1003') {
        let toast = this.alertProvider.presentToast('Incorrect password. Please try again or use Forgot password option to reset your password.');
        toast.present();
      } else {
        let toast = this.alertProvider.presentToast('Invalid email or password');
        toast.present();
      }
    }, err => {
      this.excepProvider.excpHandler(err);
    })
  }

  usernameValue(username) {
    this.mj_user = false;
  }

  passwordValue(password) {
    if (this.loginForm.controls.username.status == 'INVALID') {
      this.mj_user = false;
    }
  }

  search_user() {
    if(this.mj_user == false){
        this.loginForm.controls['password'].reset();
    }
    if (this.loginForm.value.username != '' && (this.loginForm.value.password == '' || this.loginForm.value.password == null) && this.mj_user == false) {
      this.authProvider.searchMartjack(this.loginForm.value.username).subscribe(searchData => {
        if (searchData.messageCode == '1004' && searchData.Customers != null) {
          let user = searchData.Customers.find(user => user.UserName == this.loginForm.value.username)
          this.mj_user = true;
        } else {
          this.authProvider.verifyEmail(this.loginForm.value.username).subscribe(searchData => {
            if (searchData[0].code == '200' && searchData[0].customer_data.customer[0].email == this.loginForm.value.username) {
              this.getuserdata = {
                UserName: this.loginForm.value.username,
                FirstName: searchData[0].customer_data.customer[0].firstname,
                LastName: searchData[0].customer_data.customer[0].lastname,
                MobileNo: searchData[0].customer_data.customer[0].mobile
              }
              this.authProvider.sendOTP(this.loginForm.value.username, false).subscribe(otpData => {
                if (otpData[0].code == '200') {
                  this.navCtrl.push('OtpPage', { getuserdata: this.getuserdata })
                } else {
                  console.log("otp not sent")
                }
              })
            } else {
              let toast = this.alertProvider.presentToast('The username is not registered with us. Please sign up');
              toast.present();
            }
          })
        }
      })
    } else if (this.loginForm.value.username != '' && this.loginForm.value.password != '' && this.mj_user == true) {
      this.login();
    }
  }

  register() {
    this.authProvider.verifyEmail(this.registerForm.value.UserName).subscribe(searchData => {
      if (searchData[0].code == '200' && searchData[0].customer_data.customer[0].email == this.registerForm.value.UserName) {
        let toast = this.alertProvider.presentToast('This email address is already registered. Please visit the Login page to continue');
        toast.present();
      } else {
        this.authProvider.register(this.registerForm.value).subscribe(registerData => {
          if (registerData['messageCode'] == '1004') {
            let register_Data = new registrationModel(this.registerForm.value);
            let reg_data = registerData;
            this.userdataProvider.saveBasicDetails(this.registerForm.value.UserName, this.registerForm.value.Password);
            let loginData = {
              username: this.userdataProvider.getEmail(),
              password: this.userdataProvider.getPassword()
            }
            this.authProvider.login(loginData).subscribe(loginsuccess => {
              if (loginsuccess['messageCode'] == '1004') {
                let options: NativeTransitionOptions = this.authProvider.getTransitionOption('up');
                this.nativePageTransitions.slide(options);
                this.navCtrl.setRoot('SelectOutletPage');
              }
              else if (loginsuccess['messageCode'] == '1003') {
                let toast = this.alertProvider.presentToast(loginsuccess['Message']);
                toast.present();
              }
              else {
                let toast = this.alertProvider.presentToast(loginsuccess['Message']);
                toast.present();
              }
            }, err => {
              this.excepProvider.excpHandler(err);
            });
          } else {
            let toast = this.alertProvider.presentToast('This email address is already registered. Please visit the Login page to continue');
            toast.present();
          }
        },
        err => {
          this.excepProvider.excpHandler(err);
        })
      }
    })
  }

  termsAndConditions() {
    this.navCtrl.push('TermsofUsePage',  { hidebackbutton: true});
  }

  PrivacyPolicyPage() {
    this.navCtrl.push('PrivacyPolicyPage',  { hidebackbutton: true})
  }

  signUp() {
    this.LoginTab = 'Signup';
  }

  openGuestModal() {
    this.termsGuestModal.open();
  }  

  declineGuestModal() {
    this.termsGuestModal.close();
    let toast = this.alertProvider.presentToast('Please accept the Terms and Conditions to continue');
    toast.present();
  }
}  
