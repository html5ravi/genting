import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { EMAIL_REGEXP, MOBILE_PATTERN, NAME_PATTERN } from '../../validator/emailValid';
import { noWhitespaceValidator } from '../../validator/profile';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { DatePicker } from '@ionic-native/date-picker';
import { Component, } from '@angular/core';
import moment from 'moment';

// Import All Providers.
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { CheckoutProvider } from '../../providers/checkout/checkout';
import { ProductsProvider } from '../../providers/products/products';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})
export class CheckOutPage {
  public checkout: any;
  shownGroup: boolean = false;
  editGroup: boolean = true;
  descriptionData: any;
  AuthPerson = [{ "name": "AUTHORISED PICK-UP PERSON" }];
  deliverySlots: any;
  orderTotal: any;
  paymentMode: any = [];
  userdata: any;
  isUserData: boolean = false;
  isAlternateData: boolean = false;
  editUserUpdate: FormGroup;
  isPrivacy: boolean = false;
  myDate: any;
  alternatepickupData: FormGroup;
  deliveryData: any;
  orderInfo: any;
  editUserFname: AbstractControl;
  editUserLname: AbstractControl;
  editUserMobnum: AbstractControl;
  editUserEmail: AbstractControl;
  alternateUserFname: AbstractControl;
  alternateUserLname: AbstractControl;
  alternateUserIcNo: AbstractControl;
  alternateUserMobNum: AbstractControl;
  alternateUserEmail: AbstractControl;
  deliveryDate: any;
  mallName: string;
  orderStatus: boolean = true;
  userEmail: any;


  constructor(private excepProvider: ExceptionHandlerProvider,
    private navCtrl: NavController, private http: Http,
    private inAppBrowser: InAppBrowser,
    private alertProvider: AlertProvider,
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private loaderProvider: LoaderProvider,
    private productsProvider: ProductsProvider,
    private checkoutProvider: CheckoutProvider,
    private userdataProvider: UserdataProvider,
    private datePicker: DatePicker,
    private authProvider: AuthProvider,
    private platform: Platform) {
    this.deliveryData = {};
    this.deliveryData.formatedData = '';
    this.editUserUpdate = this.formBuilder.group({
      editUserFname: ['', Validators.compose([Validators.required, Validators.pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
      editUserLname: ['', Validators.compose([Validators.required, Validators.pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
      editUserMobnum: ['', Validators.compose([Validators.required, noWhitespaceValidator, Validators.pattern(MOBILE_PATTERN)])],
      editUserEmail: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP), noWhitespaceValidator])]
    });
    this.editUserFname = this.editUserUpdate.controls['editUserFname'];
    this.editUserLname = this.editUserUpdate.controls['editUserLname'];
    this.editUserMobnum = this.editUserUpdate.controls['editUserMobnum'];
    this.editUserEmail = this.editUserUpdate.controls['editUserEmail'];
    this.alternatepickupData = this.formBuilder.group({
      alternateUserFname: ['', Validators.compose([Validators.required, Validators.pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
      alternateUserLname: ['', Validators.compose([Validators.required, Validators.pattern('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$')])],
      alternateUserIcNo: ['', Validators.compose([Validators.required, noWhitespaceValidator])],
      alternateUserMobNum: ['', Validators.compose([Validators.required, noWhitespaceValidator, Validators.pattern(MOBILE_PATTERN)])],
      alternateUserEmail: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP), noWhitespaceValidator])]
    });
    this.alternateUserFname = this.alternatepickupData.controls['alternateUserFname'];
    this.alternateUserLname = this.alternatepickupData.controls['alternateUserLname'];
    this.alternateUserIcNo = this.alternatepickupData.controls['alternateUserIcNo'];
    this.alternateUserMobNum = this.alternatepickupData.controls['alternateUserMobNum'];
    this.alternateUserEmail = this.alternatepickupData.controls['alternateUserEmail'];
    this.descriptionData = this.AuthPerson;
    if (localStorage.getItem("mallData")) {
      let data = JSON.parse(localStorage.getItem("mallData"));
      this.mallName = data.mallname;
    }
  }

  ionViewDidLoad() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.userdata = JSON.parse(localStorage.getItem('mjuserdetails'));
    this.checkout = 'Pickup';
    this.orderTotal = this.navParams.get('orderTotal');
    this.checkoutProvider.getDeliverySlots().subscribe(deliverySlots => {
      loader.dismiss();
      this.deliverySlots = deliverySlots;
    }, err => {
      loader.dismiss();
      this.excepProvider.excpHandler(err);
      let toast = this.alertProvider.presentToast(err);
      toast.present();
    });
    this.userEmail = localStorage.getItem('useremail');
  }

  toggleGroup(group) {
    if (this.shownGroup == true) {
      this.shownGroup = false;
      this.isGroupShown(this.shownGroup)
    } else {
      this.shownGroup = true;
      this.isGroupShown(this.shownGroup)
    }
  }

  toggleEdit() {
    if (this.editGroup == true)
      this.editGroup = false;
    else
      this.editGroup = true;
  }

  isGroupShown(group) {
    return this.shownGroup === group;
  }

  gotoPage(page) {
    if (page == 'PurchasedItemsPage') {
      this.navCtrl.push(page, { "orderdata": this.orderInfo.OrderId, "orderdate": '' });
    } else if (page == "MyBagPage") {
      this.navCtrl.setRoot(page);
    } else if (page == "ShopPage") {
      this.navCtrl.setRoot(page);
    } else {
      this.navCtrl.push(page);
    }
  }

  goTo(navigation) {
    if (navigation == 'pop')
      this.navCtrl.setRoot("MyBagPage");
    else if (navigation == 'terms')
      this.navCtrl.push("TermsofUsePage", { fromTermsofUsePage: 'fromTermsofUsePage' });
    else if (navigation == 'privacy')
      this.navCtrl.push("PrivacyPolicyPage", { fromPrivacyPolicyPage: 'fromPrivacyPolicyPage' });
  }

  openCalender() {
    this.deliveryDate = '';
    console.log(moment().format("DD/MM/YYYY"), '====================Today Day===================================')
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      minDate: moment().format("DD/MM/YYYY"),
      maxDate: moment().add(30, 'days').format("DD/MM/YYYY"),
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date => {
        if (date) {
          let slotId;
          let today = moment(date);
          let currentDate = moment();
          let restrictedDate = moment().add(30, 'days');
          let selectedDate = new Date(date);
          let formatedData = moment(selectedDate).format('MM/DD/YYYY');
          let slots = this.deliverySlots.DeliverySlots;
          if (moment(today).isSameOrBefore(moment(restrictedDate)) && today.isSameOrAfter(currentDate, 'day')) {
            for (let i = 0; i < slots.length; i++) {
              if (formatedData.toString() == moment(slots[i].SlotDay, 'DD/MM/YYYY').format('MM/DD/YYYY').toString()) {
                if (slots[i].SlotTime.length > 0) {
                  slotId = slots[i].SlotTime[0].DeliverySlotId;
                  this.deliveryData = {
                    "formatedData": formatedData,
                    "slotId": slotId
                  };
                  this.deliveryDate = formatedData;
                } else {
                  let toast = this.alertProvider.presentToast("The selected slot is not available. Please select some other day.");
                  toast.present();
                }
              }
            }
          } else {
            let toast = this.alertProvider.presentToast("Choose a date within 30 days");
            toast.present();
          }
        }
      },
      err => console.log('Error occurred while getting date: ', err));
  }

  editUserData(data) {
    if (data == 'user') {
      this.isUserData = true;
      if (this.userdata) {
        if (this.userdata.mobile) {
          this.editUserUpdate.setValue({
            editUserFname: this.userdata.firstName,
            editUserLname: this.userdata.lastName,
            editUserEmail: this.userEmail,
            editUserMobnum: this.userdata.mobile,
          });
        } else {
          this.editUserUpdate.patchValue({
            editUserFname: this.userdata.firstName,
            editUserLname: this.userdata.lastName,
            editUserEmail: this.userEmail,
            editUserMobnum: this.userdata.mobile,
          });
        }
      }
    } else if (data == 'alternate') {
      this.isAlternateData = false;
    }
  }

  changeUserData() {
    this.isUserData = false;
  }

  addAlternateData() {
    this.isAlternateData = true;
  }

  getPaymentOptions() {
    let cartValue = [];
    let userInfo;
    if (this.deliveryData.formatedData != '') {
      let loader = this.loaderProvider.presentLoadingCustom();
      loader.present();
      this.productsProvider.validateToken(localStorage.getItem("token")).subscribe(isTokenValid => {
        if (isTokenValid.messageCode == '1004' && isTokenValid.SessionValid == 'true') {
          if (this.editUserUpdate.value.editUserMobnum || this.userdata.mobile) {
            if (this.editUserUpdate || this.alternatepickupData) {
              this.checkoutProvider.removeAllCartItems().subscribe(data => {
                if (data.messageCode == '1004') {
                  if (localStorage.getItem('cartData')) {
                    let cartData = JSON.parse(localStorage.getItem('cartData'))
                    for (let i = 0; i < cartData.CartItems.length; i++) {
                      let data = {
                        ProductID: cartData.CartItems[i].ProductId,
                        VariantProductID: cartData.CartItems[i].VariantProductId,
                        LocationID: this.userdataProvider.mallid,
                        Quantity: cartData.CartItems[i].Quantity,
                        Status: "A",
                        CartReferenceKey: "00000000-0000-0000-0000-000000000000"
                      }
                      cartValue.push(data);
                    }
                    let locationInfo = this.userdataProvider.getLocationAddress();
                    if (this.editUserUpdate.value.editUserFname != '') {
                      userInfo = {
                        "alternatePickupFirstName": this.alternatepickupData.value.alternateUserFname,
                        "alternatePickupLastName": this.alternatepickupData.value.alternateUserLname,
                        "alternatePickupMobile": this.alternatepickupData.value.alternateUserMobNum,
                        "alternatePickupEmail": this.alternatepickupData.value.alternateUserEmail,
                        "alternatePickupIcNo": this.alternatepickupData.value.alternateUserIcNo,
                        "isPickupStore": "true",
                        "CurrencyCode": locationInfo['CurrencyCode'],
                        "billFirstName": locationInfo['billFirstName'],
                        "shipCity": locationInfo['shipCity'],
                        "shipState": locationInfo['shipState'],
                        "shipCountry": locationInfo['shipCountry'],
                        "pickupEmail": this.editUserUpdate.value.editUserEmail,
                        "pickupFirstName": this.editUserUpdate.value.editUserFname,
                        "pickupLastName": this.editUserUpdate.value.editUserLname,
                        "pickupMobile": this.editUserUpdate.value.editUserMobnum
                      }
                    } else if (this.userdata) {
                      userInfo = {
                        "alternatePickupFirstName": this.alternatepickupData.value.alternateUserFname,
                        "alternatePickupLastName": this.alternatepickupData.value.alternateUserLname,
                        "alternatePickupMobile": this.alternatepickupData.value.alternateUserMobNum,
                        "alternatePickupEmail": this.alternatepickupData.value.alternateUserEmail,
                        "alternatePickupIcNo": this.alternatepickupData.value.alternateUserIcNo,
                        "isPickupStore": "true",
                        "CurrencyCode": locationInfo['CurrencyCode'],
                        "billFirstName": locationInfo['billFirstName'],
                        "shipCity": locationInfo['shipCity'],
                        "shipState": locationInfo['shipState'],
                        "shipCountry": locationInfo['shipCountry'],
                        "pickupEmail": this.userdataProvider.getEmail(),
                        "pickupFirstName": this.userdata.firstName,
                        "pickupLastName": this.userdata.lastName,
                        "pickupMobile": ''
                      }
                      if (this.userdata.mobile) {
                        userInfo.pickupMobile = this.userdata.mobile;
                      } else {
                        loader.dismiss();
                        let toast = this.alertProvider.presentToast("Please fill in the Mobile Number");
                        toast.present();
                      }
                    } else {
                      let toast = this.alertProvider.presentToast("Please fill in the user details");
                      toast.present();
                    }
                    this.productsProvider.addCartItems(cartValue, localStorage.getItem("token"), userInfo).subscribe(cartStatus => {
                      if (cartStatus.messageCode == '1004' && (cartStatus.Carts.CartItems.length > 0)) {
                        if (localStorage.getItem('cartData')) {
                          localStorage.removeItem('cartData');
                          localStorage.setItem('cartData', JSON.stringify(cartStatus.Carts));
                        } else {
                          localStorage.setItem('cartData', JSON.stringify(cartStatus.Carts));
                        }
                        this.checkoutProvider.setDeliverySlot(this.deliveryData.formatedData, this.deliveryData.slotId).subscribe(slotData => {
                          loader.dismiss();
                          if (slotData.messageCode == '1004') {
                            this.checkoutProvider.getPaymentMethods().subscribe(paymentMethods => {
                              this.checkout = 'Payment';
                              if (paymentMethods.messageCode == '1004' && (paymentMethods.PaymentOptionsChannel.length > 0)) {
                                this.paymentMode = paymentMethods.PaymentOptionsChannel;
                              }
                            }, err => {
                              loader.dismiss();
                              this.excepProvider.excpHandler(err);
                              let toast = this.alertProvider.presentToast(err);
                              toast.present();
                            });
                          } else {
                            let toast = this.alertProvider.presentToast("The selected slot is not available. Please select some other day.");
                            toast.present();
                          }
                        }, err => {
                          loader.dismiss();
                          this.excepProvider.excpHandler(err);
                          let toast = this.alertProvider.presentToast(err);
                          toast.present();
                        });
                      }
                    }, err => {
                      loader.dismiss();
                      this.excepProvider.excpHandler(err);
                      let toast = this.alertProvider.presentToast(err);
                      toast.present();
                    });
                  } else {
                    loader.dismiss();
                    let toast = this.alertProvider.presentToast("Itseems there are no items in your cart. Please add some items to the cart and try again!!!");
                    toast.present();
                  }
                }
              }, err => {
                loader.dismiss();
                this.excepProvider.excpHandler(err);
                let toast = this.alertProvider.presentToast(err);
                toast.present();
              });
            }
          } else {
            loader.dismiss();
            let toast = this.alertProvider.presentToast("Please fill in the Mobile Number");
            toast.present();
          }
        } else {
          let toast = this.alertProvider.presentToast("Something went wrong!!!!. Please go to My Bag and try again");
          toast.present();
        }
      }, err => {
        loader.dismiss();
        this.excepProvider.excpHandler(err);
        let toast = this.alertProvider.presentToast(err);
        toast.present();
      });
    } else {
      let toast = this.alertProvider.presentToast("Please select the pick-up date to continue!!!");
      toast.present();
    }
  }

  makePayment(paymentData) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.productsProvider.validateToken(localStorage.getItem("token")).subscribe(isTokenValid => {
      if (isTokenValid.messageCode == '1004' && isTokenValid.SessionValid == 'true') {
        this.checkoutProvider.placeOrder(paymentData).subscribe(paymentStatus => {
          if (paymentStatus.messageCode == "1004") {
            localStorage.removeItem('cartData');
            if (paymentData.PaymentType != 'COD') {
              loader.dismiss()
              this.setPaymentType(paymentData.Paymentoption, paymentStatus.OrderCreationResponse.OrderID)
            } else {
              loader.dismiss()
              this.fetchOrdeInfo(paymentStatus.OrderCreationResponse.OrderID);
            }
          }
        });
      } else {
        let toast = this.alertProvider.presentToast("Something went wrong!!!!. Please go to My Bag and try again");
        toast.present();
      }
    }, err => {
      loader.dismiss();
      this.excepProvider.excpHandler(err);
      let toast = this.alertProvider.presentToast(err);
      toast.present();
    });
  }

  fetchOrdeInfo(orderId) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.checkoutProvider.getOrderInfo(orderId).subscribe(orderInfo => {
      loader.dismiss();
      if (orderInfo.messageCode == '1004') {
        if (orderInfo.Orders[0].Status == "A") {
          this.orderInfo = orderInfo.Orders[0];
          this.checkout = 'Done';
        } else if (orderInfo.Orders[0].Status == "P") {
          this.orderInfo = orderInfo.Orders[0];
          this.checkout = 'Done';
        } else if (orderInfo.Orders[0].Status == "F") {
          this.orderStatus = false;
        }
      } else {
        this.orderStatus = false;
      }
    }, err => {
      loader.dismiss();
      this.excepProvider.excpHandler(err);
      let toast = this.alertProvider.presentToast(err);
      toast.present();
    });
  }

  setPaymentType(paymentOption, orderId) {
    let inAppOpt: InAppBrowserOptions = {
      clearcache: 'yes',
      hardwareback: 'yes',
      location: 'no'
    }
    this.platform.ready().then(() => {
      let url = `http://www.shop.premiumoutlets.com.my/MPay.aspx?OrderID=${orderId}&Provider=${paymentOption}`;
      const browser = this.inAppBrowser.create(url, '_blank', inAppOpt)
      let that = this;
      browser.on('loadstop').subscribe((event) => {
        if (event.url == "https://www.shop.premiumoutlets.com.my/MResponse.aspx?gatewayopt=MAYBANKEBPG") {
          browser.close();
          that.fetchOrdeInfo(orderId);
        }
      });
    });
  }


}