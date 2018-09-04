import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderHistoryPage } from './order-history';
import { SharedModule } from '../../app/shared.module';
@NgModule({
  declarations: [
    OrderHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderHistoryPage),
    SharedModule
  ],
})
export class OrderHistoryPageModule {}
