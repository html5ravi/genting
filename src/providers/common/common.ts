import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Events, Platform } from 'ionic-angular';
import { STTARTER_BASE_URL, EN } from '../../config';
import { TERMS, MALL } from '../../url'
import { AlertProvider } from '../../providers/alert/alert';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { AuthProvider } from '../../providers/auth/auth';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Terms } from "../../models/termsModel";
import { mall } from "../../models/mallModel";
import { PushProvider } from '../../providers/push/push';
import { LoaderProvider } from '../loader/loader';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import moment from 'moment';

@Injectable()
export class CommonProvider {
  _chooseMall: Array<mall>;
  _selectedMall: any;
  _noOfMalls: any;
  termsList: Array<Terms> = null;
  public totalProfileFields: number = 17;
  isBluetoothModalShown: number = 0;
/*  */
 
 
  _ageList = [
    { name: "13 to 17", value: "13 to 17" },
    { name: "18 to 24", value: "18 to 24" },
    { name: "25 to 34", value: "25 to 34" },
    { name: "35 to 44", value: "35 to 44" },
    { name: "45 to 54", value: "45 to 54" },
    { name: "55 to 64", value: "55 to 64" },
    { name: "65 to 74", value: "65 to 74" },
    { name: "75+", value: "75+" }
  ];
  _viplounge = [
    { name: 'Search Engine', value: 'Search Engine' },
    { name: 'Another Website', value: 'Another Website' },
    { name: 'Magazine or Newspaper', value: 'Magazine or Newspaper' },
    { name: 'Radio or TV', value: 'Radio or TV' },
    { name: 'While at outlet center', value: 'While at outlet center' },
    { name: 'Friend or Word of Mouth', value: 'Friend or Word of Mouth' },
    { name: 'Facebook', value: 'Facebook' },
    { name: 'Other', value: 'Other' }
  ];
  _household = [
    { name: 'Under RM 24000', value: 'Under RM 24000' },
    { name: 'RM 24000 to RM 35999', value: 'RM 24000 to RM 35999' },
    { name: 'RM 36000 to RM 59999', value: 'RM 36000 to RM 59999' },
    { name: 'RM 60,000 to RM 99999', value: 'RM 60,000 to RM 99999' },
    { name: 'Over RM 100000', value: 'Over RM 100000' },
    { name: 'I prefer not to answer', value: 'I prefer not to answer' }
  ];
  countryList: any =[];
  stateList: any =[];
  cityList: any =[];

  constructor(private http: Http, public alertProvider: AlertProvider,
    private userdataProvider: UserdataProvider, private events: Events, private authProvider: AuthProvider, public socialSharing: SocialSharing, private platform: Platform, private pushProvider: PushProvider, private loaderProvider: LoaderProvider, private httpClient: HttpClient) {
    this.platform.ready().then(() => {
      // this.chooseMall().then((malldata) => {
      //   this._noOfMalls = malldata;
      //   if (this._noOfMalls == 1) {
      //     this.selectMall(0);
      //   }
      //   this.events.publish('isMallPresent', true, this._noOfMalls);
      // }, err => {
      // });
    });
  //JSON
  }

  getCountryList(){
    fetch('../../assets/country-list.json').then(response => {
      console.log(response.json(),"responejson")
      return response.json();
    })
    .then(data => {
      this.countryList = data.countryList;
      console.log(this.countryList,"::::::::::::::Country list:::::::::::::::::");
      //return this.countryList;
    }).catch(err => {
      // Do something for an error here
    });
    return this.countryList;
  }

  getStateList(){
    fetch('../../assets/state-list.json').then(response => {
      return response.json();
    }).then(data => {
      this.stateList = data.stateList;
      console.log(data.stateList,"::::::::::::::State list:::::::::::::::::");
      return this.stateList;
    }).catch(err => {
      // Do something for an error here
    });
  }

  getCityList(){
    fetch('../../assets/city-list.json').then(response => {
      return response.json();
    }).then(data => {
      this.cityList = data.cityList;
      console.log(data.cityList,"::::::::::::::City list:::::::::::::::::");
      return this.cityList;
    }).catch(err => {
      // Do something for an error here
    });
  }
  

  //Choose mall api call  
  chooseMalls(): Observable<Array<mall>> {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    return this.httpClient.get(STTARTER_BASE_URL + MALL + EN)
      .catch((err: Error) => Observable.throw(err))
      .finally(() => this.loaderProvider.dismissLoader(loader))
  }

  chooseMall() {
    return new Promise((resolve, reject) => {
      this.chooseMalls().subscribe(res => {
        this._chooseMall = res['data'].filter(mall => mall.ismallactive == true);
        resolve(this._chooseMall.length);
      }, err => {
        let toast = this.alertProvider.presentToast('something went wrong');
        toast.present();
        reject(false);
      });
    });
  }

  selectMall(mallData) {
    return new Promise((resolve, reject) => {
      this.userdataProvider.setSelectedMall(mallData).then(() => {
        // console.log('====================Inside Setselected mall============================')
        // this.userdataProvider.getSelectedMall().then(mall => {
          // console.log('====================Inside getSelectedMall mall============================')
          // if (mall && mall != null) {
            let mal = JSON.parse(localStorage.getItem('mallData'));
            this.userdataProvider.selectedMall = mal.mallname;
            this.userdataProvider.selectMallLogo = mal.malllogo;
            this.userdataProvider.selectMallId = mal._id;
            this.userdataProvider.mallbeaconmajor = mal.beaconmajor;
            this.userdataProvider.mallShareText = mal.sharetext;
            this.userdataProvider.mallid = mal.mallid;
            this.userdataProvider.setLocationId(mal.mallid);
            this.authProvider.fetchBanners(this.userdataProvider.mallid).subscribe(bannerData => {
              console.log(bannerData,'=======================================Bannerdata=========================');
              if (bannerData['MessageCode'] == '200') {
                this.userdataProvider.setBannerData(bannerData);
              }
            },err => {
              console.log(err);
            });
            this.authProvider.navigationLevels(this.userdataProvider.mallid).subscribe(navigationsData => {
              console.log(navigationsData,'=======================================navigationsData=========================')
              if (navigationsData['MessageCode'] == '200') {
                this.userdataProvider.setNavigationsData(navigationsData);
              }
            }, err => {
               console.log(err);
            });
            this.events.publish('changedOutlet', true);
            resolve(true);
          // } else
          //   resolve(false);
        // });
      }).catch(err => {
        alert(err)
        let toast = this.alertProvider.presentToast('Error in choosing mall');
        toast.present();
        reject(err);
      });
    });
  }

  //sets user data; 
  setUserData(auth_token, userdata) {
    this.userdataProvider.setAuthToken(auth_token).then(() => {
      this.userdataProvider.setHeader();
      this.userdataProvider.setHttpHeader();
      this.userdataProvider.setUser(userdata[0].customer_data);
      // this.userdataProvider.setUserEmail(userdata[0].customer_data.customer[0].email)
    });
  }



  getAgeList() {
    return this._ageList;
  }

  getVipLounge() {
    return this._viplounge;
  }

  getHouseHold() {
    return this._household;
  }

  //api calls for getting userdata
  // public getUserData(auth_token: string) {
  //   let loader = this.loaderProvider.presentLoadingCustom();
  //   loader.present();
  //   this.userdataProvider.getUserEmail().then(useremail => {
  //     this.authProvider.verifyEmail({ email: useremail }).subscribe(userdata => {
  //       this.loaderProvider.dismissLoader(loader);
  //       if (userdata[0].code == 200) {
  //         this.setUserData(auth_token, userdata);
  //       }
  //     }, err => {
  //       this.loaderProvider.dismissLoader(loader);
  //     });
  //   }, err => {
  //     this.loaderProvider.dismissLoader(loader);
  //   });
  // }



  //Sharing Via Social Media
  shareViaSocailMedia(message) {
   

    if (this.platform.is('cordova'))
      this.socialSharing.share(message).then(() => {
      }, err => {
        console.log("error is sharing msg");
      });
  }


  shareLink() {
    if (this.platform.is('cordova')) {
      // let link = new URL('premiumoutletsmalaysia://premiumoutlets.com.my');

      let message = "Check Premium Outlets App";
      let link = 'http://onelink.to/gentingsimon';
      this.socialSharing.share(message,"","",link).then(() => {
      }, err => {
        console.log("error is sharing msg", err);
      });
    }
  }

  // getting Terms And Condition //
  public getTermsAndConditions(): Observable<Array<Terms>> {
    if (this.termsList != null) {
      return Observable.of(this.termsList)
    } else {
      let loader = this.loaderProvider.presentLoadingCustom();
      loader.present();
      return this.httpClient.get(STTARTER_BASE_URL + TERMS)
        .do((result) => this.termsList = result['data'])
        .map((result) => result['data'])
        .catch((err: Error) => Observable.throw(err))
        .finally(() => this.loaderProvider.dismissLoader(loader))
    }
  }

  public canDisplayData(startDate: string, endDate: string): boolean {
    let sDate = moment(startDate).format('YYYY-MM-DD');
    let eDate = moment(endDate).format('YYYY-MM-DD');
    let psMoment = moment(sDate);
    let peMoment = moment(eDate)
    let currenMoment = moment().format('YYYY-MM-DD');
    if (moment(psMoment).isSameOrBefore(currenMoment) && moment(peMoment).isSameOrAfter(currenMoment)) {
      return true;
    } else {
      return false;
    }
  }

  // ======================================MartJack===========================================================



}
