export class Products{
    id:number;
    name:string;
    price:number;
    color:string;
    quantity:number;
    available:string;
    image:string;
    count: number;
}

export class User {
    id: number;
    username:string;
    password:string;
    name:string;
    email:string;
    phone:string;
    role:string;
    gender:string;
    status:boolean;
    address: any[] = [];
}

export class Address {
    id: number;
    addLine1: string;
    addLine2: string;
    city: string;
    state: string;
    zipCode: string;
    userId?: number;
}

export class Usercred{
    username:string;
    password:string
}

export class UserModel extends User{
    isDuplicate:boolean;
    userinfo:User
 }