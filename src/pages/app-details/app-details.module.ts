import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppDetailsPage } from './app-details';
import { SharedModule } from '../../app/shared.module';
import { AppVersion } from '@ionic-native/app-version';


@NgModule({
  declarations: [
    AppDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppDetailsPage),
    SharedModule
  ],
  providers:[AppVersion]
})
export class AppDetailsPageModule {}
