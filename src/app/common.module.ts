import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../providers/network/network';
import { FlurryAnalytics } from '@ionic-native/flurry-analytics';
import { AnalyticsProvider } from '../providers/analytics/analytics';
import { GeofenceProvider } from '../providers/geofence/geofence';
import { PushProvider } from '../providers/push/push';
import { UserdataProvider } from '../providers/userdata/userdata';
import { LoaderProvider } from '../providers/loader/loader';
import { AuthProvider } from '../providers/auth/auth';
import { CommonProvider } from '../providers/common/common';






@NgModule({
    declarations: [],
    imports: [],
    providers:[Geolocation,Geofence,GeofenceProvider,LocalNotifications,Device,Network,NetworkProvider,FlurryAnalytics,AnalyticsProvider,PushProvider,UserdataProvider,LoaderProvider,AuthProvider,CommonProvider]
})

export class CommonModule {}