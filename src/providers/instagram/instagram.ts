import { Injectable } from '@angular/core';
import { Instagram } from "ng2-cordova-oauth/core";
//import { LoginPage } from '../../pages/login/login';  
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class InstagramProvider {

  private oauth: OauthCordova = new OauthCordova();

  // Functional Provider for Generating Instagram Access Token //

  private instagramConfig: Instagram = new Instagram({
    clientId: "fc6263d1e36e4081a4a321feb3a89c97",      
    redirectUri: 'http://localhost',  // Let is be localhost for Mobile Apps
    responseType: 'token',   // Use token only 
    appScope: ['basic','public_content']  
});


  constructor(private httpClient:HttpClient) {
  }

 

  loginViaInstagram(){
    return new Promise((resolve, reject)=>{
      this.oauth.logInVia(this.instagramConfig).then((success) => {
        resolve(success);
      
      },err=>{
        reject(err);
      })
    })
  }

    

  getUserProfileDataViaInstagram(response) {
    let access_token = response.access_token;
    return this.httpClient.get(`https://api.instagram.com/v1/users/self/?access_token=${access_token}`)

  }

   
}
