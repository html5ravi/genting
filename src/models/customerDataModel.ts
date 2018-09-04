export interface Customer extends customerDetails {
    code?: string;
    customer_data?: customerDetails;
    response?: string;
    status?: string;
}

interface CustomerData {
    coupons?: any;
    current_nps_status?: string;
    current_slab?: string;
    custom_fields?: string;
    email?: string;
    expiry_schedule?: any;
    extended_fields?: any;
    external_id?: string;
    firstname?: string;
    fraud_details?: string;
    gender?: string;
    identifiers?: any;
    item_status?: any;
    lastname?: string;
    lifetime_points?: number;
    lifetime_purchases?: number;
    loyalty_points?: number;
    mobile?: string;
    next_slab?: string;
    next_slab_description?: string;
    next_slab_serial_number?: number;
    notes?: any;
    points_summary?: any;
    registered_by?: string;
    registered_on?: string;
    registered_store?: any;
    registered_till?: any;
    source?: string;
    tier_expiry_date?: string;
    trackers?: string;
    transactions?: any;
    type?: string;
    updated_on?: string;
}

//Multiple customer data
interface customerDetails extends CustomerData {

    customer?: Array<CustomerData>;

}
//single customer Data
interface customerDetail extends CustomerData{
    customer?:CustomerData
}




export interface ValidateOtp extends customerDetails {

    auth_key?: string;
    code?: string;
    customerexists?: string;
    customer_data?: customerDetails;
    message?: string;
    status?: string;
}

export interface SendOtp {
    code?: string;
    customerexists?: string;
    response?: string;
    status?: string;
}

export interface ProfileData {

    brand_identifier: string;
    first_name: string;
    last_name: string;
    mobile: string;
    email: string;
    identifier_value: string;
    identifier_key: string;
    custom_fields?: any;
    social_user_id?: string;
    social_channel?: string;

}

export interface UpdateProfile extends customerDetail{
    code?: string;
    customerdata?: customerDetail;
    detail_message?: string;
    is_updated?: string;
    message?: string;
    status?: string;
}