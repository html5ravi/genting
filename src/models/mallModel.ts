

export interface mall extends location {

    _id?: string;
    addressline?: string;
    addressline2?: string;
    beaconmajor?: string;
    centerhours?: string;
    city?: string;
    country?: string;
    createdAt?: string;
    description?: string;
    facebookurl?: string;
    fax?: string;
    featureimage?: string;
    instagramurl?: string;
    ismallactive?: true;
    location?: location;
    mallemail?: string;
    malllogo?: string;
    mallname?: string;
    sharetext?: string;
    tel?: string;
    updatedAt?: string;
    websiteurl?: string;

}

 interface location {

    x?: string
    y?: string
}