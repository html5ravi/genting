import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailLoginPage } from './email-login';
import { SharedModule } from '../../app/shared.module';


@NgModule({
  declarations: [
    EmailLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailLoginPage),
    SharedModule
  ],
})
export class EmailLoginPageModule {}
