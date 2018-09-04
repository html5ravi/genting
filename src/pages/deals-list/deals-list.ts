import { Component, ViewChild} from '@angular/core';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { IonicPage, NavController } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { TranslateService } from '@ngx-translate/core';
import { CommonProvider } from '../../providers/common/common'
import 'rxjs/add/operator/mergeMap';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';



import moment from 'moment';

declare var $:any;


@IonicPage({
  segment:"vipdeals"
})
@Component({
  selector: 'page-deals-list',
  templateUrl: 'deals-list.html',
})
export class DealsListPage {

  @ViewChild('ModalNonVIP') nonVIP;

  malllogo: any
  auth_token: string;
  dealsList: any = [];
  specialPromo:any = [];
  currentdate: any = moment().format('YYYY-MM-DD');
  _userEmail: string;
  

  constructor(private navCtrl: NavController,
              private userdataProvider: UserdataProvider,
              private storesProvider: StoresProvider,
              private analytics: AnalyticsProvider,private excepProvider:ExceptionHandlerProvider,private translate:TranslateService, private commonProvider:CommonProvider,private authProvider:AuthProvider,private alertProvider:AlertProvider
            ) {
     
    this.analytics.fa.logEvent('VipDealsPage');



   
  }



  ionViewWillEnter() {
    this.malllogo = this.userdataProvider.getSelectedMallLogo();
    this.auth_token = this.userdataProvider.getCRMToken();
    this._userEmail = this.userdataProvider.getEmail();
    this.getPromotions();
   if(this._userEmail && !this.auth_token) {
      this.login(this._userEmail);
      console.log("crmToken not available")
    } else if(!this._userEmail && !this.auth_token){
      this.nonVIP.open();
      $('.scroll-content').addClass('hideContent');
   } else {
     console.log("logged In");
    }
  
  }


  private getPromotions() {
    
    let specialPromo = this.storesProvider.getAllSpecialPromotions();
    let promotion = this.storesProvider.getAllPromotions(true);
    let promotionMerge = Observable.forkJoin(specialPromo,promotion);
    promotionMerge.subscribe(promotionList => {
      let specialPromotion = promotionList[0].data.filter(sp => {
        
        sp.isSpecial = true;
        if (sp.displaystartdate && sp.displayenddate && sp.isactive) {
          let isTrue = this.commonProvider.canDisplayData(sp.displaystartdate, sp.displayenddate);
          if (isTrue)
            return sp;  
        } else {
          if(sp.isactive)
          return sp;
        }
        
       

      });
      let dealsList = promotionList[1].data.filter(promo => {
      
        if (promo.displaystartdate && promo.displayenddate && promo.isactive) {
          let isTrue = this.commonProvider.canDisplayData(promo.displaystartdate, promo.displayenddate);
          if (isTrue)
            return promo;  
        } else {
          if(promo.isactive)
            return promo;
          }

      });
      this.dealsList = specialPromotion.concat(dealsList);
    }, err => {
      console.log(err);
      this.excepProvider.excpHandler(err);
    })
  }



  closeMdl() {
    this.nonVIP.close();
    this.navCtrl.setRoot('HomePage');
  }

  gotoPromotions(deals) {
    if (deals.isSpecial)
    this.navCtrl.push('SpecialPromoPage',{promotion:deals})
    else  
    this.navCtrl.push('PromotionBannerPage',{promotion:deals})
  }

  goTo(page){
    this.navCtrl.setRoot(page);
  }


  login(email){
    

    this.authProvider.verifyEmail(email).subscribe(crmloginData => {
      if (crmloginData[0].code == '200') {
        this.authProvider.sendOTP(email,true).subscribe(otpdata => {
          if (otpdata[0].code == '200') {
            this.authProvider.verifyOtp(email, '3636').subscribe(verifyOtp => {
              if (verifyOtp[0].code == '200') {
                this.userdataProvider.setCRMToken(verifyOtp[0].auth_key);
                this.auth_token = verifyOtp[0].auth_key;
              } else {
                let toast = this.alertProvider.presentToast('Please contact customer care');
                toast.present();
                }
              },err => {
                console.log(err,"err")
              })
            }
        },err => {
          console.log(err,"err")
        })
      }
    }, err => {
      console.log(err,"err")
    })

  }

  

 


}
