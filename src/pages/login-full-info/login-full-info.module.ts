import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFullInfoPage } from './login-full-info';
import { SharedModule } from '../../app/shared.module';


@NgModule({
  declarations: [
    LoginFullInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginFullInfoPage),
    SharedModule
  ],
})
export class LoginFullInfoPageModule {}
