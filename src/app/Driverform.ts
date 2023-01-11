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