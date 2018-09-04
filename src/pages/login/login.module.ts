import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { SharedModule } from '../../app/shared.module';
import { Facebook } from '@ionic-native/facebook';
import { InstagramProvider } from '../../providers/instagram/instagram';



@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    SharedModule
  ],
  providers:[Facebook,InstagramProvider]
})
export class LoginPageModule {


}
