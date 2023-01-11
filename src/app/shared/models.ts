export class CustomerForm {
  id: number;
  name: string;
  email: string;
  password: string;
  mob: string;
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    mob: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.mob = mob;
  }
}

export class Driver{
  id:number;
  name:string;
  gender:string;
  carname:string;
  carno:number;
  dob:Date;
  email:string;
  password:string;
  mob:number;
  rate:number;
  constructor(id:number,name:string,gender:string,carname:string,carno:number,dob:Date,email:string,password:string,mob:number,rate:number)
  {
      this.id= id;
      this.name=name;
      this.gender=gender;
      this.carno=carno;
      this.carname=carname;
      this.dob=dob;
      this.email=email;
      this.password=password;
      this.mob=mob;
      this.rate=rate;

  }

}

export interface RideDetails {
  driver_id: number | undefined;
  user_id: number | undefined;
  pickup: string | undefined;
  drop: string | undefined;
  amount: number | undefined;
}

export interface LoginUser {
  email:string,
  password:string
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
