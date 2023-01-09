export class CustomerForm{
    id:number; 
    name:string;
     email:string;
     password:string;
     mob:string;
     constructor(id:number,name:string,email:string,password:string,mob:string){
     this.id = id;
     this.name = name;
     this.email = email;
     this.password = password;
     this.mob = mob;
      }
    }