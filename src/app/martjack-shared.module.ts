import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopHeaderComponent } from '../components/martjack/top-header/top-header';
import { BottomMenuComponent } from '../components/martjack/bottom-menu/bottom-menu';
import { BrandFilterComponent } from '../components/martjack/brand-filter/brand-filter';
import { BrandListComponent } from '../components/martjack/brand-list/brand-list';
import { ItemListComponent } from '../components/martjack/item-list/item-list'



@NgModule({
    declarations: [
      TopHeaderComponent,
      BottomMenuComponent,
      BrandFilterComponent,
      BrandListComponent,
      ItemListComponent
      
    ],
    imports: [
      IonicPageModule.forChild(TopHeaderComponent),
      IonicPageModule.forChild(BottomMenuComponent),
      IonicPageModule.forChild(BrandFilterComponent),
      IonicPageModule.forChild(BrandListComponent),
      IonicPageModule.forChild(ItemListComponent)
    ],
    exports:[
      TopHeaderComponent,
      BottomMenuComponent,
      BrandListComponent,
      BrandFilterComponent,
      ItemListComponent
    ]
  })

  export class MartJackSharedModule {}