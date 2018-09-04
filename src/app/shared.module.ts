import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
import { DecimalPipe } from '../pipes/decimal/decimal';


import { MymodalComponent } from '../components/mymodal/mymodal';
import { SafehtmlPipe } from '../pipes/safehtml/safehtml';
import { SortPipe } from '../pipes/sort/sort';
import { StringtodatePipe } from '../pipes/stringtodate/stringtodate';
import { HeaderComponent } from '../components/header/header';
import { AlertProvider } from '../providers/alert/alert';
import { ExceptionHandlerProvider } from '../providers/exception-handler/exception-handler';
import { ProductsProvider } from '../providers/products/products';


@NgModule({
imports:[
    IonicPageModule.forChild(MymodalComponent),
    IonicPageModule.forChild(SafehtmlPipe),
    IonicPageModule.forChild(SortPipe),
    IonicPageModule.forChild(HeaderComponent),
    IonicPageModule.forChild(SocialSharing),
    IonicPageModule.forChild(OpenNativeSettings),
    IonicPageModule.forChild(TranslateModule),
    IonicPageModule.forChild(StringtodatePipe),
    IonicPageModule.forChild(SafeUrlPipe),
    IonicPageModule.forChild(DecimalPipe)
],
declarations:[MymodalComponent,SafehtmlPipe,HeaderComponent,SortPipe,StringtodatePipe,SafeUrlPipe,DecimalPipe],
exports: [MymodalComponent, SafehtmlPipe, HeaderComponent,TranslateModule,SortPipe,StringtodatePipe,LazyLoadImageModule,SafeUrlPipe,DecimalPipe],
providers:[AlertProvider,ExceptionHandlerProvider,SocialSharing,OpenNativeSettings, ProductsProvider]
})

export class SharedModule{}
