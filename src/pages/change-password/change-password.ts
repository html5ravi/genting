import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { CustomValidators, PWD_PATTERN } from '../../validator/emailValid';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { LoaderProvider } from '../../providers/loader/loader';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  @ViewChild('passwordVerify') verifypassword;
  passChangeForm: FormGroup;
  private Password: AbstractControl;
  private NewPassword: AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public authProvider: AuthProvider,
    private alertProvider: AlertProvider,
    private excepProvider: ExceptionHandlerProvider,
    private userdataProvider: UserdataProvider,
    private loaderProvider: LoaderProvider) {
    this.passChangeForm = this.formBuilder.group({
      Password: ['', Validators.compose([Validators.required, Validators.pattern(PWD_PATTERN)])],
      NewPassword: ['', Validators.compose([Validators.required, Validators.pattern(PWD_PATTERN)])]
    },
      {
        validator: CustomValidators.Match('Password', 'NewPassword')
      });


    this.Password = this.passChangeForm.controls['Password'];
    this.NewPassword = this.passChangeForm.controls['NewPassword'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }
  showModal() {
    this.verifypassword.open();
  }
  closeModal() {
    this.verifypassword.close();
    this.userdataProvider.logout();
  }

  passwordChange() {
    console.log("password change", this.passChangeForm.value.Password);
    this.authProvider.validateToken().then(data => {
      console.log(data, '::::::::::::Validate Token:::::::::::::::');
      if (data == true) {
        this.authProvider.changePassword(this.passChangeForm.value.Password).subscribe(changePassword => {
          console.log(changePassword, "change password")
          if (changePassword.messageCode == '1004') {
            this.showModal();
          }
          else {
            let toast = this.alertProvider.presentToast(changePassword.Message);
            toast.present();
          }
        }, err => {
          this.excepProvider.excpHandler(err);
        })
      }
    })
  }

}
