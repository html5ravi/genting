import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { VouchersProvider } from '../../providers/vouchers/vouchers';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { AlertProvider } from '../../providers/alert/alert';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { AuthProvider } from '../../providers/auth/auth';






@IonicPage({
  segment: 'specialpromo/:promoId',
  
})
@Component({
  selector: 'page-special-promo',
  templateUrl: 'special-promo.html'
})
export class SpecialPromoPage {

  private auth_key: string;
  private _userEmail: string; 
  private promotion: any = [];
  private promoId: any;
  private _redeemedVoucherList: any = [];
  private isAlreadyRedeemed: boolean = false;
  private redeemedVoucher: any;
  private _redeemedText: string = "redeem offer";
  // private promotion:any = []
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storesProvider: StoresProvider, private vouchersProvider: VouchersProvider,
              private events:Events, private userdataProvider:UserdataProvider, private barcodeScanner:BarcodeScanner, private alertProvider:AlertProvider, private excepProvider: ExceptionHandlerProvider,private authProvider:AuthProvider ) {

    this.promoId = this.navParams.get('promoId');
    this.promotion = this.navParams.get('promotion');
    if(this.promoId)
    this.getSpecialPromo(this.promoId)
    this.events.subscribe('redeemlist', isDataAvailable => {
      if (isDataAvailable) {
        if (this.promotion && this.promotion.experiencesidforvipoffersonly)
          this.isVoucherRedeemed(this.promotion.experiencesidforvipoffersonly);
      }  
   })
  }


  ionViewWillEnter(){
    // this.userdataProvider.getAuthToken().then(data=>{
    this.auth_key = this.userdataProvider.getCRMToken();
    this._userEmail = this.userdataProvider.getEmail();
      if (this.auth_key && this._userEmail) {
        this.getRedeemedVouchers(this._userEmail, this.auth_key);
      } else if (this._userEmail && !this.auth_key) {
        this.login(this._userEmail)
      } 
    // })
  }

  private getSpecialPromo(promoId) {
    this.storesProvider.getSpecialPromotions(promoId).subscribe(promotion => {
      this.promotion = promotion.data[0];
    })
  }
 
  private goToLoginPage() {
    this.navCtrl.setRoot("LoginPage");
  }

  isVoucherRedeemed(expId) {

    this.redeemedVoucher = this._redeemedVoucherList.filter(voucher => voucher.ExperienceId == expId);
    if (this.redeemedVoucher.length > 0) {
      this.isAlreadyRedeemed = true;
      this._redeemedText= "View Redemption Summary";    
    }
    else {
      this.isAlreadyRedeemed = false;
        
      }
  }


  getRedeemedVouchers(useremail,authKey) {
 
    this.vouchersProvider.getRedeemedVouchers(useremail,authKey).subscribe(res => {
      this._redeemedVoucherList = res[0].customer_vouchers;
      this.events.publish('redeemlist', true);
    })
  }


    // Issue Voucher using expId. success will call scanQrCode function  
    issueVoucher(expId) {
    
      this.vouchersProvider.issueVouchers(this._userEmail, expId,this.auth_key).subscribe(res => {
        if (res[0].code == 200) 
            this.redeemVoucher(res[0].coupon_code);
        else {
          let toast = this.alertProvider.presentToast(res[0].message)
          toast.present();
        }
        
      }, err => this.excepProvider.excpHandler(err))
  
    }
  
  
    redeemVoucher(couponcode) {


      this.vouchersProvider.redeemVouchers(this._userEmail, couponcode,this.auth_key).subscribe(redeemVoucher => {
        if (redeemVoucher[0].code == 200)
          this.navCtrl.push('PromotionReedemPage', { voucherdata: redeemVoucher[0].voucher_info, storedata:this.promotion, isalreadyredeemed:false})
        else {
          let toast = this.alertProvider.presentToast(redeemVoucher[0].message);
          toast.present();
        }
      }, err => this.excepProvider.excpHandler(err))
        
    }
    


    //Scan QrCode to check whether customer redeeming voucher in the right store . if success then call redeemVoucher
    scanQrCode(expId) {

      if (this.isAlreadyRedeemed) {
  
            this.navCtrl.push('PromotionReedemPage', { voucherdata: this.redeemedVoucher[0], storedata: this.promotion,isalreadyredeemed:true });
        
      } else {
        let barcodeOptions: BarcodeScannerOptions = {
          resultDisplayDuration: 0,
          prompt: 'Please scan the QR Code of the store. Place the QR Code within the viewfinder.'
        }
      
     
        this.barcodeScanner.scan(barcodeOptions).then((barcodeData) => {
          if (barcodeData.text == this.promotion.qrcodeidentifier)
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
  
  
    login(email){
    

      this.authProvider.verifyEmail(email).subscribe(crmloginData => {
        if (crmloginData[0].code == '200') {
          this.authProvider.sendOTP(email,true).subscribe(otpdata => {
            if (otpdata[0].code == '200') {
              this.authProvider.verifyOtp(email, '3636').subscribe(verifyOtp => {
                if (verifyOtp[0].code == '200') {
                  this.userdataProvider.setCRMToken(verifyOtp[0].auth_key);
                  this.auth_key = verifyOtp[0].auth_key;
                  this.getRedeemedVouchers(this._userEmail, this.auth_key);
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
