import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { StoresProvider } from '../../providers/stores/stores';
import { AuthProvider } from '../../providers/auth/auth';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchParam: string = '';
  searchHistoryList = [];
  newStoreList = [];
  searchField: FormControl;
  searchList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storeProvider: StoresProvider, private authProvider: AuthProvider,private platform:Platform,private nativePageTransitions:NativePageTransitions) {
    this.getSearchedHistoryList();
  }

  onInput(ev) {
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(value => {
        this.autoSearchList();
      });
  }



  autoSearchList() {
    if (this.searchParam) {
      this.authProvider.searchSuggetion(this.searchParam.toLowerCase()).subscribe(list => {
        this.searchList = list.AllCategories;
      });
    } else {
      this.searchList = [...[]];
    }
  }

  setSearchTerm(term) {
    localStorage.removeItem('sort');
    localStorage.removeItem('filters');
    this.searchParam = term;
    this.checkSearch(term); 
    this.searchList = [...[]];
    if (this.platform.is('android')) {
      let options: NativeTransitionOptions = this.authProvider.getTransitionOption('left');
      this.nativePageTransitions.slide(options);
    }
    this.navCtrl.setRoot('ShopProductsPage', { queryText: this.searchParam , hidebackbutton:true});
  }

  getSearchedHistoryList() {
    this.searchHistoryList = this.getSearch();
  }


  getSearch() {
    return JSON.parse(localStorage.getItem('searchhistory'));
  }

  setSearch(serchkeywords) {
    localStorage.setItem('searchhistory', JSON.stringify(serchkeywords));
  }

  checkSearch(term) {
    let searchhistory = this.getSearch();
    if (searchhistory && searchhistory.length > 0) {

      let filtereddata = searchhistory.filter(s => s == term);
      if (filtereddata.length == 0 && searchhistory.length < 5) {
        searchhistory.unshift(term);
        this.setSearch(searchhistory);
      } else if (filtereddata.length == 0 && searchhistory.length >= 5) {
        searchhistory.splice(-1, 1);
        searchhistory.unshift(term);
        this.setSearch(searchhistory);
      }
    } else {
      let search = [];
      search.push(term);
      localStorage.setItem('searchhistory', JSON.stringify(search));
    }
  }
}  
