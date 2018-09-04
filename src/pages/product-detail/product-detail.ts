import { Component } from '@angular/core';

import { ExceptionHandlerProvider } from '../../providers/exception-handler/exception-handler';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserdataProvider } from '../../providers/userdata/userdata';
import { ProductsProvider } from '../../providers/products/products';
import { LoaderProvider } from '../../providers/loader/loader';
import { AlertProvider } from '../../providers/alert/alert';
import { CartProvider } from '../../providers/cart/cart';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  variantColor: any = [];
  variantSize: any = [];
  selectedColor: string;
  selectedSize: string;
  requiredData: any = {
    selectedColor: '',
    selectedSize: ''
  }
  private variantProducts: any = [];
  private variantProperties: any = [];
  private variantProductsDup: any = [];
  private variantPropertiesDup: any = [];
  private sliderImages: any = [];
  private variantArray: any = [];
  itemno_increase: number = 0;
  productId: any;
  productDetails: any;
  addToCartBtn: string = 'add to bag';
  variantProductId: string;
  isVariantsAvailable: boolean = false;
  filters: any = [];
  isButtonDisabled: boolean = false;
  isVariantActive: boolean = false;
  localProduct: any;
  isProductAdded: boolean = false;

  constructor(private excepProvider: ExceptionHandlerProvider, private loaderProvider: LoaderProvider,
    private navCtrl: NavController, private navParams: NavParams, private productsProvider: ProductsProvider, private userdataProvider: UserdataProvider,
    private alertProvider: AlertProvider, private cartProvider: CartProvider, private commonProvider: CommonProvider) {
  }

  ionViewDidLoad() {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.productId = this.navParams.get("productDetails");
    if (this.navParams.get("productId")) {
      this.productId = this.navParams.get("productId");
    }
    if (this.navParams.get("productDetails")) {
      let productDetails = this.navParams.get("productDetails")
      this.productId = productDetails.ProductId;
    }
    this.cartProvider.getCartItemQuantity();
    console.log(JSON.parse(localStorage.getItem('cartData')), "cartdata after storage")
    if (this.productId) {
      this.productsProvider.fetchProductDetails(this.productId).subscribe(productDetails => {
        loader.dismiss();
        if (productDetails.MessageCode == '200' && productDetails.Product != null) {
          this.productDetails = productDetails.Product;
          // this.sliderImages = productDetails.Product.MultipleImages;
          this.getProductsFromStorage();
          if (productDetails.Product.VariantProperties && productDetails.Product.VariantProperties.length > 0) {
            this.variantProperties = productDetails.Product.VariantProperties;
            this.variantPropertiesDup = [...this.variantProperties];
            this.variantArray.push({ variantProperties: productDetails.Product.VariantProperties });
            this.variantArray.push({ variantProducts: productDetails.Product.VariantProducts });
            this.variantProductsDup = [...productDetails.Product.VariantProducts];
            this.isVariantsAvailable = true;
            if (this.isVariantsAvailable) {
              let defaultVariants = []
              for (let i = 0; i < this.variantPropertiesDup.length; i++)
                defaultVariants.push(this.variantPropertiesDup[i].VariantValues[0]);
              this.filters = [...defaultVariants];
              console.log(defaultVariants, "default variants");
              this.filterByVariants(defaultVariants);
              this.defaultActiveVariants()
            }
          } else {
            this.sliderImages = productDetails.Product.MultipleImages;
            console.log("coming to else., coz no variants");
            console.log(this.productDetails, "products details----");
            if (this.productDetails.Inventory <= 0) {
              this.addToCartBtn = 'Out of Stock';
              this.isButtonDisabled = true;
            }
          }
        }
      }, err => {
        loader.dismiss();
        this.excepProvider.excpHandler(err);
        let toast = this.alertProvider.presentToast(err);
        toast.present();
      });
    }
  }

  addToCart(product) {
    let loader = this.loaderProvider.presentLoadingCustom();
    if (this.navParams.get('productDetails')) {
      let productDetails = this.navParams.get('productDetails')
      let variantProductId = productDetails.VariantProductId;
      console.log(variantProductId, '========================VariantProductId========================');
      if (variantProductId != 0) {
        if (variantProductId != this.variantProducts[0]) {
          this.productsProvider.removeCartItems(productDetails).subscribe(removeData => {
            if (removeData.messageCode == '1004') {
              this.addCartItem(product);
            }
          }, err => {
            loader.dismiss();
            this.excepProvider.excpHandler(err);
            let toast = this.alertProvider.presentToast(err);
            toast.present();
          });
        }
      }
    } else {
      this.addCartItem(product);
    }
  }

  addCartItem(product) {
    let loader = this.loaderProvider.presentLoadingCustom();
    loader.present();
    this.cartProvider.addCartItems(product, this.variantProducts.length > 0 ? this.variantProducts[0] : '').then(cartStatus => {
      loader.dismiss();
      if (cartStatus['FailedItems'].length > 0) {
        this.isButtonDisabled = true;
        let status = cartStatus['FailedItems'].find(prop => prop.ProductId == product.ID);
        console.log(status.ProductId, '================================Status===================================');
        if (product.ID == status.ProductId) {
          let toast = this.alertProvider.presentToast(status.ListOfErrors[0].ErrorMessage);
          toast.present();
        }
      } else if (cartStatus['Carts'].CartItems.length > 0) {
        this.isProductAdded = true
        this.isButtonDisabled = true;
        if (localStorage.getItem('cartData')) {
          localStorage.removeItem('cartData');
          localStorage.setItem('cartData', JSON.stringify(cartStatus['Carts']));
          this.cartProvider.getCartItemQuantity()
          this.getProductsFromStorage();
        } else {
          localStorage.setItem('cartData', JSON.stringify(cartStatus['Carts']));
          this.cartProvider.getCartItemQuantity()
          this.getProductsFromStorage();
        }
      }
    }, err => {
      loader.dismiss();
      this.excepProvider.excpHandler(err);
      let toast = this.alertProvider.presentToast(err);
      toast.present();
    });
  }

  addToBag(product) {
    console.log(product, "added products");
  }

  goTo(page) {
    this.navCtrl.setRoot(page);
  }

  filterByVariants(variantdata) {
    this.variantProducts = [...[]];
    let isTrue: any = 0;
    for (let j = 0; j < this.variantProductsDup.length; j++) {
      isTrue = 0;
      for (let k = 0; k < this.variantProductsDup[j].VariantProperties.length; k++) {
        for (let i = 0; i < variantdata.length; i++) {
          if (this.variantProductsDup[j].VariantProperties[k].propertyvalue == variantdata[i].propertyvalue) {
            isTrue++
            if (this.variantProductsDup[j].VariantProperties.length == isTrue) {
              this.variantProducts.push(this.variantProductsDup[j]);
            }
          }
        }
      }
    }
    if (this.variantProducts[0].Inventory == 0) {
      this.addToCartBtn = "Out of Stock";
      this.isButtonDisabled = true;
    } else {
      this.addToCartBtn = "add to bag";
      this.isButtonDisabled = false;
    }
    console.log(this.variantProducts, "this.variantProducts")
    this.sliderImages = [...this.productDetails.MultipleImages.filter(img => {
      if (img.VariantProductId == this.variantProducts[0].VariantProductID)
        return img;
      else if (img.VariantProductId == 0) {
        return img;
      }
    })];
    console.log(this.sliderImages, "this.sliderImages from variants");
    console.log(this.variantProducts, "filtered Varints new");
    this.isProductAlreadyAdded();
  }

  changeFilters(variant) {
    this.showActiveVariants(variant);
    this.isVariantActive = true;
    let filter = this.filters.map(fil => {
      if (fil.PropertyName == variant.PropertyName)
        return fil = Object.assign({}, variant);
      else
        return fil;
    });
    this.filters = [...filter];
    this.filterByVariants(this.filters);
  }

  showActiveVariants(variant) {
    for (let i = 0; i < this.variantArray[0].variantProperties.length; i++) {
      for (let j = 0; j < this.variantArray[0].variantProperties[i].VariantValues.length; j++) {
        if (this.variantArray[0].variantProperties[i].VariantValues[j].PropertyName == variant.PropertyName && this.variantArray[0].variantProperties[i].VariantValues[j].propertyvalue == variant.propertyvalue) {
          this.variantArray[0].variantProperties[i].VariantValues[j].isActive = true;
        } else if (this.variantArray[0].variantProperties[i].VariantValues[j].PropertyName == variant.PropertyName && this.variantArray[0].variantProperties[i].VariantValues[j].propertyvalue != variant.propertyvalue) {
          this.variantArray[0].variantProperties[i].VariantValues[j].isActive = false;
        }
      }
    }
  }

  defaultActiveVariants() {
    for (let i = 0; i < this.variantArray[0].variantProperties.length; i++) {
      for (let j = 0; j < this.variantArray[0].variantProperties[i].VariantValues.length; j++) {
        this.variantArray[0].variantProperties[i].VariantValues[0].isActive = true;
      }
    }
  }

  isProductAlreadyAdded() {
    if (this.isVariantsAvailable) {
      if (this.localProduct && this.localProduct.CartItems.length > 0) {
        var data = this.localProduct.CartItems.filter(item => { return item.ProductId == this.productDetails.ID && item.VariantProductId == this.variantProducts[0].VariantProductID })
        if (data.length > 0) {
          this.isProductAdded = true;
        } else {
          this.isProductAdded = false;
        }
      }
    } else {
      if (this.localProduct && this.localProduct.CartItems.length > 0) {
        data = this.localProduct.CartItems.filter(item => item.ProductId == this.productDetails.ID);
        if (data.length > 0) {
          this.isProductAdded = true;
        } else {
          this.isProductAdded = false;
        }
      }
    }
  }

  getProductsFromStorage() {
    this.localProduct = JSON.parse(localStorage.getItem('cartData'));
    if (this.localProduct != null)
      this.isProductAlreadyAdded()
  }

  openSharing($event) {
    console.log($event, "$event");
    this.commonProvider.shareLink();
  }
}  
