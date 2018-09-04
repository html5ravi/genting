import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPasswordPage } from './forgot-password';
import { SharedModule } from '../../app/shared.module'

@NgModule({
  declarations: [
    ForgotPasswordPage,
    
  ],
  imports: [
    IonicPageModule.forChild(ForgotPasswordPage),
    SharedModule
  ],
})
export class ForgotPasswordPageModule {}
