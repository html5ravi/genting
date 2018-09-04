//Importing Modules and Plugins
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule , Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { Diagnostic } from '@ionic-native/diagnostic';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { CommonModule } from './common.module';
import { SharedModule } from './shared.module';
import { IBeaconModule } from './ibeacon.module';
import { TranslateProvider } from '../providers/translate/translate';
import { MartjackauthConfigProvider } from '../providers/martjackauthcofig/martjackauthconfig';
import { ProductsProvider } from '../providers/products/products';
import { CartProvider } from '../providers/cart/cart';
import { CheckoutProvider } from '../providers/checkout/checkout';
import { Webengage, WebengageUser, WebengagePush, WebengageNotification } from '@ionic-native/webengage';
import { Crashlytics } from '@ionic-native/fabric';

export function setTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
 }



@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    IBeaconModule,
    IonicModule.forRoot(MyApp, {
      backButtonText:''
    }),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (setTranslateLoader),
        deps: [Http]
      }
    }),
    HttpModule,
    HttpClientModule,
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Diagnostic,
    TranslateProvider,
    MartjackauthConfigProvider,
    ProductsProvider,
    CartProvider,
    CheckoutProvider,
    Webengage,
    WebengageNotification,
    WebengageUser,
    WebengagePush,
    NativePageTransitions,
    Crashlytics
  ],
})
  
export class AppModule{

}