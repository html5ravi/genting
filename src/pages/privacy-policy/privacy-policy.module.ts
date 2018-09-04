import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivacyPolicyPage } from './privacy-policy';
import{ SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    PrivacyPolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivacyPolicyPage),
    SharedModule
  ],
})
export class PrivacyPolicyPageModule {}
