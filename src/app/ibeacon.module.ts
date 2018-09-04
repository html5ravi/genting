import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IBeacon } from '@ionic-native/ibeacon';
import { BeaconProvider } from '../providers/beacon/beacon';



@NgModule({
    declarations: [],
    imports: [
        IonicPageModule.forChild(IBeacon)
    ],
    exports: [],
    providers:[IBeacon,BeaconProvider]
})

export class IBeaconModule{}