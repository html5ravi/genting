



export class registrationModel  {

    FirstName:string;
    LastName:string;
    UserName:string;
    Password:string;
    ConfirmPassword:string;
    MobileNo:number;


    constructor(public register : any){

      
        this.FirstName = register.FirstName,
        this.LastName = register.LastName,
        this.UserName = register.UserName,
        this.Password = register.Password,
        this.ConfirmPassword = register.ConfirmPassword,
        this.MobileNo = register.MobileNo
        console.log(register,":::::::::register::::::::::::")




    }


}