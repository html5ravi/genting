import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotionReedemPage } from './promotion-reedem';
import{ SharedModule } from '../../app/shared.module';
import { ToLocalTimePipe } from '../../pipes/to-local-time/to-local-time';

@NgModule({
  declarations: [
    PromotionReedemPage,
    ToLocalTimePipe
  ],
  imports: [
    IonicPageModule.forChild(PromotionReedemPage),
    SharedModule
  ],
})
export class PromotionReedemPageModule {}
