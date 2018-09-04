import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events,Platform } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { AuthProvider } from '../../providers/auth/auth';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { LoaderProvider } from '../../providers/loader/loader';



@IonicPage()
@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {

  filterdata: any;
  isCategoryFilterShowing: boolean = false;
  isPriceFilterShowing: boolean = false;
  isBrandFilterShowing: boolean = false;
  dualValue2: any = {lower:0,upper:0};
  dualValue: any = {};
  tagId: string;

  filterCategoryId: any = [];
  filterBrandId: any = [];
  appliedFilters:any = {
    maxprice: '',
    minprice:'',
    categoryId:[],
    brandId:[]
  }
  appliedSort: any = '';

  constructor(private navCtrl: NavController, private navParams: NavParams,private productsProvider:ProductsProvider,private events:Events,private platform:Platform,private nativePageTransitions:NativePageTransitions, private authProvider:AuthProvider,private loaderProvider:LoaderProvider) {
    this.filterdata = this.navParams.get('filters');
    this.tagId = this.navParams.get('tagId');

    this.getFilters(this.tagId)

  }

  ionViewDidLoad() {
   
  }

  showCategories() {
    return this.isCategoryFilterShowing = !this.isCategoryFilterShowing;
  }

  showBrands() {
    return this.isBrandFilterShowing = !this.isBrandFilterShowing;
  }

  showPrice() {
    return this.isPriceFilterShowing = !this.isPriceFilterShowing;
  }

  setSort(sortby) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.appliedSort = sortby;
    this.productsProvider.setSort(sortby);
    // this.productsProvider.setFilterSubject(true);
    setTimeout(() => {
      
      this.events.publish('sort-filter', true)
      loader.dismiss();      
      if (this.platform.is('android')) {
        let options: NativeTransitionOptions = this.authProvider.getTransitionOption('right');
        this.nativePageTransitions.slide(options);
      }  
      this.navCtrl.pop();
    }, 1000);
  }


  applyFilters() {
    let pricemin = this.dualValue2.lower;
    let pricemax = this.dualValue2.upper;

    this.appliedFilters = {
      maxprice: this.dualValue2.upper,
      minprice: this.dualValue2.lower,
      categoryId: this.filterCategoryId,
      brandId:this.filterBrandId
    }

   

    localStorage.setItem('filters', JSON.stringify(this.appliedFilters));
    setTimeout(() => {
      this.events.publish('sort-filter', true);
      if (this.platform.is('android')) {
        let options: NativeTransitionOptions = this.authProvider.getTransitionOption('right');
        this.nativePageTransitions.slide(options);
      }  
      this.navCtrl.pop();
    }, 1000);
  }

  setCategoryFilter(categoryId) {

   

    let i;
    let len = this.filterdata.Categories.length;
    for (i = 0; i < len; i++){
      if (this.filterdata.Categories[i].Id == categoryId) {
        this.filterdata.Categories[i].isSelected = !this.filterdata.Categories[i].isSelected;
        }
    }

    if (this.filterCategoryId.findIndex(cat => cat == categoryId) == -1) {
      this.filterCategoryId.push(categoryId);
      
    }
    else {
      let index = this.filterCategoryId.findIndex(cat => cat == categoryId);
      let splicedItem = this.filterCategoryId.splice(index, 1);
    }  
  }

  setBrandFilter(brandId) {
   


    let i;
    let len = this.filterdata.Brands.length;
    for (i = 0; i < len; i++){
      if (this.filterdata.Brands[i].Id == brandId) {
        this.filterdata.Brands[i].isSelected = !this.filterdata.Brands[i].isSelected;
        }
    }

    if (this.filterBrandId.findIndex(cat => cat == brandId) == -1) {
      this.filterBrandId.push(brandId);
      
    }
    else {
      let index = this.filterBrandId.findIndex(cat => cat == brandId);
      this.filterBrandId.splice(index, 1);
    }  
  }




  getAppliedFilters() {
    let filters = JSON.parse(localStorage.getItem('filters'));
    this.appliedFilters = {
      maxprice: filters?filters.maxprice:'',
      minprice: filters?filters.minprice:'',
      categoryId: filters?filters.categoryId:[],
      brandId: filters?filters.brandId :[]
    }
    this.filterdata.Categories.map(data => {
      let fil = this.appliedFilters.categoryId.filter(cat => cat === data.Id)
      if (fil.length > 0) {
        this.filterCategoryId.push(fil[0]);
        return data.isSelected = true;
      }
      else
        return data.isSelected = false;  
    }) 

    this.filterdata.Brands.map(data => {
      let fil = this.appliedFilters.brandId.filter(brand => brand === data.Id)
      if (fil.length > 0) {
        this.filterBrandId.push(fil[0]);
        return data.isSelected = true;
      }
      else
        return data.isSelected = false;  
    }) 

    if (this.appliedFilters.maxprice != '')
      this.dualValue2.upper = this.appliedFilters.maxprice;
      
    if (this.appliedFilters.minprice != '') 
    this.dualValue2.lower = this.appliedFilters.minprice;
    
  }

  getAppliedSort() {
    this.appliedSort = this.productsProvider.getSort();
  }

/*
  get all the filters for perticular tagId

  if success call getAppliedFilters and getAppliedSort method inorder to assign already selected value

*/

  getFilters(tagId) {
    this.productsProvider.getProductsFilters('', '', tagId, '').subscribe(filtersdata => {
      if (filtersdata.MessageCode === '200') {
        this.filterdata = filtersdata;

        if (this.filterdata.PriceRange.length > 0) {
          this.dualValue2.lower = this.filterdata.PriceRange[0].PriceMin;
          this.dualValue2.upper = this.filterdata.PriceRange[this.filterdata.PriceRange.length - 1].PriceMax;
          this.dualValue.lower = this.filterdata.PriceRange[0].PriceMin;
          this.dualValue.upper = this.filterdata.PriceRange[this.filterdata.PriceRange.length - 1].PriceMax;
        }

      
        this.getAppliedFilters();
        this.getAppliedSort();
      }
    }, err => {
      console.log(err, "err in getting filters");
      });

  }


}
