import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { noWhitespaceValidator } from '../../validator/profile';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';


@IonicPage({
  segment: 'contactus'
})
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',

})
export class ContactUsPage {
  @ViewChild("contactsuccess") ContactModal;
  @ViewChild("updateNumber") updateNumberModal;
  contactForm: FormGroup;
  inquiry_type: AbstractControl;
  message: AbstractControl;
  userProfileData: any = {};
  _auth_token: string;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private userdataProvider: UserdataProvider,
    private authProvider: AuthProvider, private alertProvider: AlertProvider,
    private excepProvider: ExceptionHandlerProvider,
    private analytics: AnalyticsProvider, private translate: TranslateService) {

    this.contactForm = this.formBuilder.group({
      inquiry_type: ['', Validators.compose([Validators.required, noWhitespaceValidator])],
      message: ['', Validators.compose([Validators.required, noWhitespaceValidator])],
    });
    this.inquiry_type = this.contactForm.controls['inquiry_type'];
    this.message = this.contactForm.controls['message'];
    this.analytics.fa.logEvent('ContactUsPage');
  }

  ionViewWillEnter() {
    this._auth_token = this.userdataProvider.getToken();
    if (this._auth_token)
      this.getProfileInfo();
  }

  getProfileInfo() {
    let userData = JSON.parse(localStorage.getItem('mjuserdetails'));
    this.userProfileData = {
      Name: this.userdataProvider.getFullName(),
      Email: localStorage.getItem('useremail'),
      Phone: ''
    }
    if (userData.mobile) {
      this.userProfileData.Phone = userData.mobile;
    } else {
      this.updateNumberModal.open();
    }
  }

  closeMobileModal() {
    this.navCtrl.setRoot("HomePage");
  }

  updateModal() {
    this.updateNumberModal.close();
    this.navCtrl.setRoot("MyAccountPage");

  }

  contactusForm() {
    this.authProvider.ContactForm(this.userProfileData.Email, this.userProfileData.Phone || '', this.contactForm.value).subscribe(res => {
      if (res[0].code == 200)
        this.ticketOpenModal();
      else {
        let toast = this.alertProvider.presentToast(res[0].message);
        toast.present();
      }
    }, err => this.excepProvider.excpHandler(err));
  }

  ticketOpenModal() {
    this.ContactModal.open();
  }

  closeTicketModal() {
    this.ContactModal.close();
    this.navCtrl.setRoot("HomePage");
  }

  goto(page) {
    this.navCtrl.setRoot(page);
  }

  gotoPage(page) {
    this.navCtrl.setRoot(page);
  }
}