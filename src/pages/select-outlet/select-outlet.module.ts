import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectOutletPage } from './select-outlet';
import { SharedModule } from '../../app/shared.module';
import { AuthProvider } from '../../providers/auth/auth';



@NgModule({
  declarations: [
    SelectOutletPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectOutletPage),
    SharedModule
  ],
  providers:[AuthProvider]
})
export class SelectOutletPageModule {}
