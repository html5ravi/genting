import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { VouchersProvider } from '../../providers/vouchers/vouchers';
import { AlertProvider } from '../../providers/alert/alert';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { AnalyticsProvider } from '../../providers/analytics/analytics';
import { TranslateService } from '@ngx-translate/core';
import { AuthProvider } from '../../providers/auth/auth';



@IonicPage()
@Component({
  selector: 'page-promotion-banner',
  templateUrl: 'promotion-banner.html',
  
})
export class PromotionBannerPage {

  auth_key:string;
  _userEmail:string
  promotion: any;
  _redeemedVoucherList: any = [];
  isAlreadyRedeemed: boolean = false;
  redeemedVoucher: any;
  _viewCode:any;
  _redeemedText: string = "redeem offer";
  

  constructor(private navCtrl: NavController, private navParams: NavParams, 
              private userdataProvider: UserdataProvider, private vouchersProvider: VouchersProvider,
              private alertProvider: AlertProvider, private excepProvider: ExceptionHandlerProvider,
              private barcodeScanner: BarcodeScanner,
              private events: Events,private analytics: AnalyticsProvider,private translate:TranslateService ,private authProvider:AuthProvider) {
                
              this.promotion = this.navParams.get("promotion");
    
             this.events.subscribe('redeemlist', isDataAvailable => {
               if (isDataAvailable) {
                 if (this.promotion && this.promotion.experiencesidforvipoffersonly)
                   this.isVoucherRedeemed(this.promotion.experiencesidforvipoffersonly);
               }  
            })
               
    this.analytics.fa.logEvent('PromotionDetailsPage');
    
  }


  //get User auth_key//
   
  ionViewWillEnter(){
    // this.userdataProvider.getAuthToken().then(data=>{
    
    this.auth_key = this.userdataProvider.getCRMToken();
    this._userEmail = this.userdataProvider.getEmail();
      if (this.auth_key &&  this._userEmail) {
        this.getRedeemedVouchers(this._userEmail, this.auth_key)
        console.log("crmToken available")
      } else if(this._userEmail && !this.auth_key) {
        this.login(this._userEmail);
        console.log("crmToken not available")
      } else {
        console.log("User Not Logged In");
      }
    // })

  }


  //If user not logged In
  goToLoginPage(){
    this.navCtrl.setRoot("LoginPage");
  }



  // Issue Voucher using expId. success will call scanQrCode function  
  issueVoucher(expId) {
    
    this.vouchersProvider.issueVouchers(this._userEmail, expId, this.auth_key).subscribe(res => {
      if (res[0].code == 200) 
          this.redeemVoucher(res[0].coupon_code);
      else {
        let toast = this.alertProvider.presentToast(res[0].message)
        toast.present();
      }
      
    }, err => this.excepProvider.excpHandler(err))

  }


  isVoucherRedeemed(expId) {

    this.redeemedVoucher = this._redeemedVoucherList.filter(voucher => voucher.ExperienceId == expId);
    console.log(this.redeemedVoucher, "this.redeemedVoucher");
    if (this.redeemedVoucher.length > 0) {
      this.isAlreadyRedeemed = true;
      this._redeemedText= "View Redemption Summary";    
    }
    else {
      this.isAlreadyRedeemed = false;
        
      }
  }



  //Scan QrCode to check whether customer redeeming voucher in the right store . if success then call redeemVoucher
  scanQrCode(expId) {

    if (this.isAlreadyRedeemed) {
      console.log(this.isAlreadyRedeemed, "this.isAlreadyRedeemed");
      console.log(this.redeemedVoucher[0],this.promotion,"ppppppppp-----------------------------------")
          this.navCtrl.push('PromotionReedemPage', { voucherdata: this.redeemedVoucher[0], storedata: this.promotion,isalreadyredeemed:true });
      
    } else {
      let barcodeOptions: BarcodeScannerOptions = {
        resultDisplayDuration: 0,
        prompt: 'Please scan the QR Code of the store. Place the QR Code within the viewfinder.'
      }
    
   
      this.barcodeScanner.scan(barcodeOptions).then((barcodeData) => {
        if (barcodeData.text == this.promotion.associatedstore[0].qrcodeidentifier)
          this.issueVoucher(expId);

        else {
          let toast = this.alertProvider.presentToast('Sorry, you are at a wrong store');
          toast.present();
        }

      }, (err) => {
         
        let toast = this.alertProvider.presentToast('error in scanning qrcode');
        toast.present();
          
      });
    }  
  }




// redeem a issued voucher 
  redeemVoucher(couponcode) {


    this.vouchersProvider.redeemVouchers(this._userEmail, couponcode, this.auth_key).subscribe(redeemVoucher => {
      if (redeemVoucher[0].code == 200)
        this.navCtrl.push('PromotionReedemPage', { voucherdata: redeemVoucher[0].voucher_info, storedata:this.promotion, isalreadyredeemed:false})
      else {
        let toast = this.alertProvider.presentToast(redeemVoucher[0].message);
        toast.present();
      }
    }, err => this.excepProvider.excpHandler(err))
      
  }
  



  
  
  
  getRedeemedVouchers(useremail,authKey) {
 
    this.vouchersProvider.getRedeemedVouchers(useremail,authKey).subscribe(res => {
      this._redeemedVoucherList = res[0].customer_vouchers;
      this.events.publish('redeemlist', true);
    })
  }

  viewReedem(code){
    this._viewCode == this.promotion.associatedstore[0].qrcodeidentifier;
    this.issueVoucher(code);
  }


  gotoPage(page) {
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
                this.auth_key = verifyOtp[0].auth_key;
                this.getRedeemedVouchers(email, this.auth_key);
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
