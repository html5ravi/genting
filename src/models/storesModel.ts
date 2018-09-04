
import { mall } from './mallModel'

export interface StoresModel {
    _id?: string;
    createdAt?: any;
    updatedAt?: any;
    storename?: string;
    brandimage?: string;
    description?: string;
    storehours?: string;
    locationincenter?: string;
    associatedmall?: any;
    bestentrance?: string;
    phone?: string;
    unitnumber?: string;
    floorlevel?: any;
    storecategory?: any;
    qrcodeidentifier?: string;
    brandlogo?: string;
}

export interface StoresCategoryModel {
    associatedmall: any;
    categoryname: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
}

export interface Amenities{
    associatedmall: any;
    description: string,
    icon: string;
    title: string;
    _id: string;
}

export interface Brands{
    brandsList:any;
}


export interface Promotions extends mall, StoresModel{
    _id: string;
    associatedmall?: Array<mall>;
    associatedstore?: Array<StoresModel>;
    bannerimage?: string;
    createdAt?: string;
    displayenddate?: string;
    displaystartdate?: string;
    experiencesidforvipoffersonly?: string;
    hasvipoffer?: boolean;
    isactive?: boolean;
    promotiondescription?: string;
    promotiontitle?: string;
    updatedAt?: string;
    vipmemberoffer?: string;
}

