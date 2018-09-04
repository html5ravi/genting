import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Events,Platform } from 'ionic-angular';
import { STTARTER_BASE_URL, EN, BEACON_UUID } from '../../config';
import {
       STORES, PROMOTIONS, STORECATAGORIES, STORENEWS, EVENTS, STORE_PROMOTIONS,

       ABOUTOUTLET, BEACON_CONFIG,AMENITES,BRANDS,HOME_BANNERS,SPECIAL_PROMOTIONS,ALL_SPECIAL_PROMOTIONS
} from '../../url';
import { UserdataProvider } from '../userdata/userdata';
import { StoresModel, StoresCategoryModel, Amenities, Brands, Promotions } from '../../models/storesModel';
import { LoaderProvider } from '../../providers/loader/loader';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class StoresProvider {


  storeList: Array<StoresModel> = null;

  beaconStoreList:any = [];
  storeCategoryList: Array<StoresCategoryModel> = null;
  aminitiesList: Array<Amenities> = null;

  brandsList:Array<Brands> = null;

  constructor(private http: Http, public userdataProvider: UserdataProvider, 
              private events:Events, private platform:Platform,private loaderProvider:LoaderProvider,private httpClient:HttpClient) {

    this.events.subscribe('changedOutlet', isOutLetChanged => {

              if (isOutLetChanged) {
                this.storeList = null;
                this.storeCategoryList = null;
                this.aminitiesList = null;
                this.beaconStoreList = [];
              }
      
          })

    this.platform.pause.subscribe(()=>{
      this.beaconStoreList = [];
    })

  }


  //return home banners

  public getHomeBanners() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    console.log(this.userdataProvider.selectedMall);
    return this.httpClient.get(STTARTER_BASE_URL + HOME_BANNERS + this.userdataProvider.selectedMall)
      .catch((err: Error) => Observable.throw(err))
      .finally(()=> this.loaderProvider.dismissLoader(loader))
  }


//return All stores  
  public getAllStores():Observable<Array<StoresModel>> {
    if (this.storeList != null) {
      return Observable.of(this.storeList)
    }
    else {
      let loader = this.loaderProvider.presentLoadingCustom();
      loader.present();
      return this.httpClient.get(STTARTER_BASE_URL + STORES + EN + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
        .do((res) => {this.storeList = res['data'] })
        .map((storeList) => { return storeList['data'] })
        .catch((err: Error) => Observable.throw(err))
        .finally(()=>this.loaderProvider.dismissLoader(loader))
        
    }
   
  }

//returns generic Promotions  
  public getGenericPromotions():Observable<Array<Promotions>> {

    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(STTARTER_BASE_URL + PROMOTIONS + EN + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
      .catch((err: Error) => Observable.throw(err))
      .finally(()=>this.loaderProvider.dismissLoader(loader))
    
  }

  //Get Stores Promotions API call
  public getStorePromotions(storename) {
    // let loader = this.loaderProvider.presentLoadingCustom();
    // loader.present();
    return this.httpClient.get(STTARTER_BASE_URL + PROMOTIONS + STORE_PROMOTIONS + storename + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
    .catch((err: Error) => Observable.throw(err))
    .finally(()=>console.log("loaded promotions"))
  }


  //returns all special promotions

  public getAllSpecialPromotions() {
    // let loader = this.loaderProvider.presentLoadingCustom();
    // loader.present();
    return this.httpClient.get(STTARTER_BASE_URL + ALL_SPECIAL_PROMOTIONS + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
    .catch((err: Error) => Observable.throw(err))
    // .finally(()=>this.loaderProvider.dismissLoader(loader))
  }

  //returns special promotions
  public getSpecialPromotions(promoId) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(STTARTER_BASE_URL + SPECIAL_PROMOTIONS + promoId +'&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
    .catch((err: Error) => Observable.throw(err))
    .finally(()=>this.loaderProvider.dismissLoader(loader))
  }


//returns store category list  
  public getStoreCatagoryList() {

    if (this.storeCategoryList != null) {
      return Observable.of(this.storeCategoryList);
    }
    else {
      let loader = this.loaderProvider.presentLoadingCustom();
      loader.present();
      return this.httpClient.get(STTARTER_BASE_URL + STORECATAGORIES + EN)
              .do((result) => { this.storeCategoryList = result['data'] })
              .map((result) => { return result['data'] })
              .catch((err: Error) => Observable.throw(err))
              .finally(()=>this.loaderProvider.dismissLoader(loader))
      }
  }

  
  public getStoreNews() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(STTARTER_BASE_URL + STORENEWS)
        .catch((err: Error) => Observable.throw(err))
        .finally(()=>this.loaderProvider.dismissLoader(loader))
  }

  public getEventsDetails() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(STTARTER_BASE_URL + EVENTS)
    .catch((err: Error) => Observable.throw(err))
    .finally(()=>this.loaderProvider.dismissLoader(loader))
  }

//returns stores near to the beacon  
  public getBeaconStores(major, minor: any) {

    let attachToMinor = '0';          //In some case minor is 3 digits.If so add 0 at the begining;
    var minorModified;
    if (minor.toString().length == 3){
       minorModified = attachToMinor.concat(minor.toString());
    }
    else
      minorModified = minor;
    let url = `${STTARTER_BASE_URL}${BEACON_CONFIG}${EN}&uuid=$eq:${BEACON_UUID}&major=$eq:${major}&minor=$eq:${minorModified}&associatedmall=$eq:${this.userdataProvider.selectMallId}`;
      return new Promise((resolve, reject) => {
        if(this.beaconStoreList.length >= 1){
          let store = this.beaconStoreList.find(beaconstore => beaconstore.major == major && beaconstore.minor == minorModified)
          if(store){
            resolve(store)
          }else{
          this.httpClient.get(url).subscribe(res => {
          if(res['data'].length >= 1){
          this.beaconStoreList.push(res['data'][0]);
          resolve(res['data'][0]);
          }else{
            reject('null');
          }
        }, err => {
          reject(err);
        })
      }

        }else{
          this.httpClient.get(url).subscribe(res => {
           if(res['data'].length >= 1){
          this.beaconStoreList.push(res['data'][0]);
          resolve(res['data'][0]);
          }
        else{
          reject('null');
        }
        }, err => {
          reject(err);
        })

        }
       })
    
  }

//Returns a stores Promotions
  public getAllPromotions(vipoffer: boolean) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(STTARTER_BASE_URL + PROMOTIONS + EN + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall + '&hasvipoffer=$eq:' + vipoffer)
    .catch((err: Error) => Observable.throw(err))
    .finally(()=>this.loaderProvider.dismissLoader(loader))
  }

  
  // getting About the Outlet Details //
  public getOutletDetails() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(STTARTER_BASE_URL + ABOUTOUTLET)
    .catch((err: Error) => Observable.throw(err))
    .finally(()=>this.loaderProvider.dismissLoader(loader))
  }


  public getAmenites() {
    
    if (this.aminitiesList != null) {
      return Observable.of(this.aminitiesList);
    } else {
      let loader = this.loaderProvider.presentLoadingCustom();
      loader.present();
      return this.httpClient.get(STTARTER_BASE_URL + AMENITES + EN + '&associatedmall.mallname=$eq:' + this.userdataProvider.selectedMall)
        .do((res) => this.aminitiesList = res['data'])
        .map((res) => { return res['data'] })
        .catch((err: Error) => Observable.throw(err))
        .finally(()=>this.loaderProvider.dismissLoader(loader))
    }
  }


  public getBrands(){
    if (this.brandsList != null) {
      return Observable.of(this.brandsList);
    } else {
      let loader = this.loaderProvider.presentLoadingCustom();
      loader.present();
      return this.httpClient.get(STTARTER_BASE_URL + BRANDS)
      .do((res) => this.brandsList = res['data'])
      .map((res) => { return res['data'] })
      .catch((err: Error) => Observable.throw(err))
      .finally(()=>this.loaderProvider.dismissLoader(loader))
    }
  }




  



}
