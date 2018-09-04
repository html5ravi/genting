
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular'
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JPO_STOREID, GHPO_STOREID } from '../../config';



@Injectable()
export class UserdataProvider {

  contentHeaders: any;
  userObj: any;
  selectedMall: any;
  selectMallLogo: any;
  selectMallId: any;
  mallLength: number;
  mallbeaconmajor: any;
  mallShareText: string;
  mallid: string;
  validToken: boolean;
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  isBannersSubject = new BehaviorSubject<boolean>(this.isBannerSet());
  isNavigationSubject = new BehaviorSubject<boolean>(this.isNavigationSet());
  // isCartSubject = new BehaviorSubject<boolean>(this.hasToken());
  isTokenValidSubject = new BehaviorSubject<boolean>(this.isTokenValid());
  headers: HttpHeaders;
  public bannerData: any = [];
  dataaa: string;
  navigationsData: any;


  constructor(private storage: Storage, public events: Events) {


    this.contentHeaders = new Headers();
    this.headers = new HttpHeaders();
  }

  contactDetail: any;

  saveBasicDetails(email: string, password: string) {
    localStorage.setItem('useremail', email);
    localStorage.setItem('userpassword', password);
  }
  removeBasicDetails() {
    localStorage.removeItem('useremail');
    localStorage.removeItem('userpassword');
  }

  public getEmail(): string {
    return localStorage.getItem('useremail');
  }
  public getPassword(): string {
    return localStorage.getItem('userpassword')

  }

  //Change the name and functionality later.

  setMJBasicDetails(userdetails) {

    localStorage.setItem('mjuserdetails', JSON.stringify(userdetails));
    console.log("mj user data set successfully");

  }


  getMJBasicDetails() {
    return JSON.parse(localStorage.getItem('mjuserdetails'));
  }

  logout(): void {
    localStorage.clear();
    // localStorage.removeItem('token');
    // localStorage.removeItem('cartData');
    this.removeBasicDetails();
    this.isLoginSubject.next(false);
    this.events.publish('fblogout', true);
  }

  login(token): void {
    localStorage.setItem('token', token);
    this.isLoginSubject.next(true);
    console.log("setted access token");
  }

  setUserId(userid) {
    localStorage.setItem('userid', userid);
  }

  setProfileId(profileId) {
    localStorage.setItem('profileId', profileId);
  }

  getProfileId() {
    return localStorage.getItem('profileId');
  }

  getUserId() {
    return localStorage.getItem('userid');
  }

  setUserInfoId(UserInfoId) {
    localStorage.setItem('UserInfoId', UserInfoId);
  }

  getUserInfoId() {
    return localStorage.getItem('UserInfoId')
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  public setCRMToken(token) {
    localStorage.setItem('crmToken', token);
  }

  public getCRMToken() {
    return localStorage.getItem('crmToken');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  setBannerData(bannerData): void {
    this.bannerData = bannerData;
    this.isBannersSubject.next(true);
  }

  getBannerData() {
    return this.bannerData;
  }

  private isBannerSet(): boolean {
    return this.bannerData;
  }

  banner(): Observable<boolean> {
    return this.isBannersSubject.asObservable();
  }

  setNavigationsData(navigationsData) {
    this.navigationsData = navigationsData;
    this.isNavigationSubject.next(true);
  }

  getNavigationsData() {
    return this.navigationsData;
  }

  private isNavigationSet(): boolean {
    return this.navigationsData;
  }

  navigation(): Observable<boolean> {
    return this.isNavigationSubject.asObservable();
  }

  setIsTokenValid(isValid: boolean) {
    this.validToken = isValid;
    this.isTokenValidSubject.next(isValid);
  }

  isTokenValid(): boolean {
    return this.validToken;
  }

  setLocationId(locationId) {
    localStorage.setItem('locationId', locationId);
  }

  getLocationId() {
    return localStorage.getItem('locationId');
  }

  getLocationAddress() {
    if (this.mallid == GHPO_STOREID) {
      let GHPO_ADD = {
        CurrencyCode: "MYR",
        billFirstName: "Genting Highlands Premium Outlets",
        shipCity: GHPO_STOREID,
        shipState: "MY67",
        shipCountry: "MY"
      }
      return GHPO_ADD;
    } else if (this.mallid == JPO_STOREID) {
      let JPO_ADD = {
        CurrencyCode: "MYR",
        billFirstName: "Wisma Genting, 28, Jalan Sultan Ismail, Kuala Lumpur, 50450",
        shipCity: JPO_STOREID,
        shipState: "MY60",
        shipCountry: "MY"
      }
      return JPO_ADD;
    } else {
      console.log("Invalid location");
      return '';
    }
  }

  // return the header
  getHeader() {
    return this.contentHeaders;
  }

  // returns http header
  getHttpHeader() {
    return this.headers;
  }

  // sets the http header with access-token
  setHttpHeader() {
    this.getAuthToken().then(data => {
      this.headers.set('Authorization', data);
    });
  }

  // sets the header with access-token
  setHeader() {

    this.getAuthToken().then(data => {
      this.contentHeaders.set('Authorization', data);
    });
  }

  //sets the auth- token
  setAuthToken(authToken) {
    return this.storage.set('auth_token', authToken);
  }

  // returns auth-Token
  getAuthToken() {
    return this.storage.get('auth_token');
  }

  //remove auth_token
  removeAuthToken() {
    return this.storage.remove('auth_token');
  }


  //sets the user details object;
  setUser(userdata) {
    this.userObj = userdata;
    console.log(this.userObj)
  }

  //set selected mall
  setSelectedMall(mall) {
    localStorage.setItem('mallData', JSON.stringify(mall));
    return this.storage.set('selectedMall', JSON.stringify(mall));

  }

  //returns selected mall
  getSelectedMall() {
    console.log("==============GetSelectedMall======================")
    // return this.storage.get('selectedMall')
  }

  //remove selected mall
  removeSelectedMall() {
    return this.storage.remove('selectedMall')
  }

  //return select mall logo
  getSelectedMallLogo() {
    return this.selectMallLogo;
  }

  //returns user firstname 
  getUserFirstName() {
    // return this.userObj.customer[0].firstname;
    let data = this.getMJBasicDetails();
    return (data.firstName)?data.firstName:'';
  }

  //returns user lastname
  getUserLastName() {
    let data = this.getMJBasicDetails();
    return (data.lastName)?data.lastName:'';
  }

  getFullName() {
    return this.getUserFirstName() + ' ' + this.getUserLastName();
  }

  //returns user gender
  getUserGender() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let gender = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'gender')
      if (gender && gender.value != null)
        return gender.value;
      else
        return '';
    } else
      return '';
  }


  //returns user Age Group
  getUserAgeGroup() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let age = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'age_group')
      if (age && age.value != null)
        return age.value;
      else
        return '';
    } else
      return '';
  }

  //returns user Address
  getUserAddress() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let address = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'address_line')
      if (address && address.value != null)
        return address.value;
      else
        return '';
    } else
      return '';
  }

  //returns user Postcode
  getUserPostcode() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let postcode = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'address_postalcode')
      if (postcode && postcode.value != null)
        return postcode.value;
      else
        return '';
    } else
      return '';
  }

  getUserState() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let address_state = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'address_state')
      if (address_state && address_state.value != null)
        return address_state.value;
      else
        return '';
    } else
      return '';
  }

  //returns user City
  getUserCity() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let city = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'address_city')
      if (city && city.value != null)
        return city.value;
      else
        return '';
    } else
      return '';
  }

  //returns user Country of Origin
  getUserCountryOfOrigin() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let country = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'address_country')
      if (country && country.value != null)
        return country.value;
      else
        return '';
    } else
      return '';
  }


  //returns user email id from userdata
  getUserEmailId() {
    if (this.userObj.customer[0].email != null)
      return this.userObj.customer[0].email;
    else
      return '';
  }

  //sets user email in storage

  // setUserEmail(emailId) {
  //   return this.storage.set('useremail', emailId);
  // }

  //returns user email from storage
  // getUserEmail() {
  //   return this.storage.get('useremail')
  // }

  //remove user email from storage
  // removeUserEmail() {
  //   return this.storage.remove('useremail')
  // }

  //returns user mobile number
  getUserMobileNo() {
    let data = this.getMJBasicDetails();
    return (data.mobile)?data.mobile:'';
  }

  //returns user date-of-birth
  getUserDob() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let dob = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'dob')
      if (dob && dob.value != null)
        return dob.value;
      else
        return '';
    } else
      return '';
  }


  getUserHouseholdIncome() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let household_income = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'household_income')
      if (household_income && household_income.value != null)
        return household_income.value;
      else
        return '';
    } else
      return '';
  }


  getUserVIPLounge() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let referral_source = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'referral_source')
      if (referral_source && referral_source.value != null)
        return referral_source.value;
      else
        return '';
    } else
      return '';
  }

  getUserPreferredBrandOne() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let preferred_brand_one = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'preferred_brand_one')
      if (preferred_brand_one && preferred_brand_one.value != null)
        return preferred_brand_one.value;
      else
        return '';
    } else
      return '';
  }

  getUserPreferredBrandTwo() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let preferred_brand_two = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'preferred_brand_two')
      if (preferred_brand_two && preferred_brand_two.value != null)
        return preferred_brand_two.value;
      else
        return '';
    } else
      return '';
  }

  getUserPreferredBrandThree() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let preferred_brand_thre = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'preferred_brand_thre')
      if (preferred_brand_thre && preferred_brand_thre.value != null)
        return preferred_brand_thre.value;
      else
        return '';
    } else
      return '';
  }

  getUserPreferredBrandFour() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let preferred_brand_four = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'preferred_brand_four')
      if (preferred_brand_four && preferred_brand_four.value != null)
        return preferred_brand_four.value;
      else
        return '';
    } else
      return '';
  }

  getUserReferralSource() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let referral_source = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'referral_source')
      if (referral_source && referral_source.value != null)
        return referral_source.value;
      else
        return '';
    } else
      return '';
  }

  getSubscribe() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let subscribe = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'subcribe_thirdparty')
      if (subscribe && subscribe.value != null)
        return subscribe.value;
      else
        return '';
    } else
      return '';
  }

  getOtherBrands() {
    if (this.userObj.customer[0].custom_fields.field != null && this.userObj.customer[0].custom_fields.field.length > 0) {
      let otherbrands = this.userObj.customer[0].custom_fields.field.find(data => data.name == 'otherbrands')
      if (otherbrands && otherbrands.value != null)
        return otherbrands.value;
      else
        return '';
    } else
      return '';
  }


  //set total profile percentage
  setTotalProfileField(percentage) {
    this.storage.set('filledProfile', percentage);
  }

  //returns total profile percentage
  getTotalProfileField() {
    return this.storage.get('filledProfile');
  }

  //removes total profile percentage from storage
  removeTotalProfileField() {
    this.storage.remove('filledProfile');
  }




}


