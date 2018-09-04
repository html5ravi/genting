import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutOutletPage } from './about-outlet';
import { SharedModule } from '../../app/shared.module';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { StoresProvider } from '../../providers/stores/stores';


@NgModule({
  declarations: [
    AboutOutletPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutOutletPage),
    SharedModule
  ],
  providers:[LaunchNavigator,StoresProvider]
})
export class AboutOutletPageModule {}
