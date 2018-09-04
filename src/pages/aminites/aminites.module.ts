import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AminitesPage } from './aminites';
import { SharedModule } from '../../app/shared.module';
import { StoresProvider } from '../../providers/stores/stores';


@NgModule({
  declarations: [
    AminitesPage,
  ],
  imports: [
    IonicPageModule.forChild(AminitesPage),
    SharedModule
  ],
  providers:[StoresProvider]
})
export class AminitesPageModule {}
