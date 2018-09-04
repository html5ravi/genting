import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events,Platform } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { ProductsProvider } from '../../providers/products/products';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { Observable } from 'rxjs/Observable';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop-products.html',
})
export class ShopProductsPage {
  @ViewChild('container') content;
  productData: any;
  productDetails: any = [];
  productId: any;
  categoryId: any;
  tagId: any;
  queryText: any;
  brandId: any;
  brandData: any;
  filterList: any = [];
  perPageData = 10;
  page = 1;
  maximumPages: any;
  filterSub: any;
  event: any;
  filterSubject: any;
  isLoaderShown: boolean;
  infi: any = null;
  isTriggeredCount: number = 0;
  hidebackbutton: any = null;
    
  

  constructor(private excepProvider: ExceptionHandlerProvider, private loaderProvider: LoaderProvider, private alertProvider: AlertProvider,
    private navCtrl: NavController, private navParams: NavParams, private productsProvider: ProductsProvider, private events: Events,private nativePageTransitions:NativePageTransitions,private platform:Platform,private authProvider:AuthProvider,private userdataProvider:UserdataProvider) {
    this.brandData = this.navParams.get('queryText') || this.navParams.get('brandData');
    this.tagId = this.navParams.get('tagId') || '';
    console.log(this.tagId, 'ionViewDidLoad ShopPage');
    this.queryText = this.navParams.get('queryText') || '';
    this.categoryId = this.navParams.get('categoryId') || '';
    this.brandId = this.navParams.get('brandId') || '';

    this.hidebackbutton = this.navParams.get('hidebackbutton') || null;
    if (this.tagId != '' || this.queryText != '' || this.categoryId != '' || this.brandId != '')
      this.getProductList();
    
    // console.log("Constructor executed%%%%%%%%%%%%%%%%%%%%%%5");
    
      // console.log('ionViewWillEnter');
      // this.event = this.events;
  
      // this.event.subscribe('sort-filter', this.applyFilter);
   
    this.events.subscribe('sort-filter', data => {
      console.log('subscribed to events');
      this.isTriggeredCount++;
      console.log(this.isTriggeredCount," this.isTriggeredCount++;")
      if (data && this.isTriggeredCount <= 1) {

        // if(this.content.scrollToTop())
        // this.content.scrollToTop();

        this.page = 1;
        this.getProductList();
        console.log(this.page, "page nui")
        this.productDetails = [...[]];
        console.log(this.infi, "this.infi");
        if (this.infi) {
          this.infi.enable(true);
        }
      }
    })   
   

  }

  ionViewWillEnter() {
    this.isLoaderShown = false;
    console.log("ionViewWillEnter executed%%%%%%%%%%%%%%%%%%%%%%5");
    // this.events.subscribe('sort-filter', data => {
    //   console.log('subscribed to events');
    //   if (data) {
    //     this.page = 1;
    //     this.getProductList();
    //     console.log(this.page, "page nui")
    //     this.productDetails = [...[]];
    //   }

    //   setTimeout(() => {
    //     console.log("settimeout, unsubscribe");
    //     this.events.unsubscribe('sort-filter', data => {
    //       console.log("unsubscribed from an event");
    //     })
    //   }, 2000);

    // });
    // this.filterSubject = this.productsProvider.getfilterSubject();
    // this.filterSubject.switchMap().subscribe(isFilterPresent => {
    //   console.log(isFilterPresent, "isFilterPresent");
    //   if (isFilterPresent) {
    //     this.page = 1;
    //     this.getProductList();
    //     console.log(this.page, "page nui")
    //     this.productDetails = [...[]];
    //   }
    // })
   
   
  }

 



  goto(page, data) {
    if (this.platform.is('android')) {
      let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
      this.nativePageTransitions.slide(options);
    }  
    this.navCtrl.push(page, { productId: data.ID });
  }

  getProductList(infiniteScroll?) {
    if (this.isLoaderShown == false) {
      var loader = this.loaderProvider.presentLoadingCustom();
      loader.present();
      this.isLoaderShown = true;
    }  
    let filters = JSON.parse(localStorage.getItem('filters'));
    this.categoryId = filters ? filters.categoryId : '';
    let minprice = filters ? filters.minprice : '';
    let maxprice = filters ? filters.maxprice : '';
    this.brandId = filters ? filters.brandId : '';
    this.productsProvider.fetchListofProducts(this.categoryId, this.brandId, this.tagId, this.queryText, this.productsProvider.getSort(), minprice, maxprice, this.page).subscribe(productDetails => {
      if(loader)
      loader.dismiss();
      this.productData = productDetails;
      this.maximumPages = this.getMaxPage(productDetails.TotalRecords);
      // this.productDetails = productDetails['Products'].filter(products => products.Inventory > 0);
      this.productDetails = this.productDetails.concat(productDetails['Products']);
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
      // this.productsProvider.getProductsFilters(this.categoryId, this.brandId, this.tagId, this.queryText).subscribe(filtersdata => {
      //   this.filterList = filtersdata;
      // });
    });
  }

  loadMore(infiniteScroll) {
    console.log(infiniteScroll, "infiniteScroll");
    console.log(this.page, "this.page");

    this.infi = infiniteScroll;
    if (this.page >= this.maximumPages) {
      infiniteScroll.enable(false);
    } else {
      this.page++;
      this.getProductList(infiniteScroll);
    }
  }

  openFiltersPage(ev) {
    if (this.platform.is('android')) {
      let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
      this.nativePageTransitions.slide(options);
    }  
    this.navCtrl.push('FiltersPage', { tagId: this.tagId });
  }

  getMaxPage(totalRecords) {
    return Math.ceil(totalRecords / this.perPageData);
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave")
    // this.applyFilterUnsub();  
    // this.filterSubject.unsubscribe();
    this.isTriggeredCount = 0;
    
  }

  applyFilter() {
    setTimeout(() => {

      console.log("event subscribed");
      this.page = 1;
     this.getProductList();
     console.log(this.page, "page nui")
     this.productDetails = [...[]];
      
    }, 2000);
  
    
  }

  private applyFilterUnsub() {
    console.log(this.event, " this.event")
    console.log(this.event._channels.changedOutlet, "this.event._channels.changedOutlet");
    this.event.unsubscribe('sort-filter', this.applyFilter);
  }

  ngOnDestroy() {
    // console.log("ngOnDestroy")
    // this.applyFilterUnsub();    
  }

  getError(err) {
    console.log(err);
  }

  gotoBack() {
    this.infi = null;
    this.navCtrl.pop();
  }



}
