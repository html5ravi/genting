import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsofUsePage } from './termsof-use';
import{ SharedModule } from '../../app/shared.module'

@NgModule({
  declarations: [
    TermsofUsePage,
  ],
  imports: [
    IonicPageModule.forChild(TermsofUsePage),
    SharedModule
  ],
})
export class TermsofUsePageModule {}
