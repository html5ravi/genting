import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealsPage } from './deals';
import { SharedModule } from '../../app/shared.module';
import { SortByPipe } from '../../pipes/sort-by/sort-by';
import { StoresProvider } from '../../providers/stores/stores';


@NgModule({
  declarations: [
    DealsPage,
    SortByPipe
  ],
  imports: [
    IonicPageModule.forChild(DealsPage),
    SharedModule,
  ],
  providers:[StoresProvider]
})
export class DealsPageModule {}
