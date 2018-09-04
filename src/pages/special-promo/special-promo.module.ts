import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialPromoPage } from './special-promo';
import { SharedModule } from '../../app/shared.module';
import { StoresProvider } from '../../providers/stores/stores';
import { VouchersProvider } from '../../providers/vouchers/vouchers';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@NgModule({
  declarations: [
    SpecialPromoPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialPromoPage),
    SharedModule
  ],
  providers:[StoresProvider,VouchersProvider,BarcodeScanner]
})
export class SpecialPromoPageModule {}
