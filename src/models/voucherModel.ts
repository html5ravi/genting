

interface Voucher {

    ActivateStatus: number;
    ActivatedTime: string;
    AddedDate: string;
    Cap_RedeemStatus: number;
    Cap_VoucherCode: string;
    Cap_VoucherExpiry: string;
    ContactName: string;
    Description: string;
    ExperienceId: number;
    ExpiryDate: string;
    MasterCreativePath: string;
    RedeemBrand: number;
    RedeemStatus: number;
    RedeemUser: string;
    RemainingTime: number;
    Terms: string;
    Title: string;
    VendorCode: string;
    VendorDesc: string;
    VendorID: number;
    VendorName: string;
    VoucherCode: string;
    VoucherCost: number;
    VoucherId: number;
    epin_prefix: string;
    epin_suffix: string;
    images: Array<any>;
    is_completed: number;
    is_digital: number;
    is_loadcash: number;

}


export interface VouchersData extends Voucher {
    
    code: string;
    customer_vouchers: Array<Voucher>;
    status: string;

}