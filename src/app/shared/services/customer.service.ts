import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CustomerForm } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string = "http://localhost:3000";

  customerId= new BehaviorSubject(1);
  ncId=this.customerId.asObservable()
  setCustomerData(id:number)
  { 
    console.log(id)
      this.customerId.next(id)
      localStorage.setItem('uid', JSON.stringify(id));
      console.log(this.customerId)
  }

  constructor(public http:HttpClient, private authService:AuthService) { }

  CustomerPost(emp:CustomerForm){
    console.log(emp);
    
    this.authService.SignUp(emp.email, emp.password);
     
   return this.http.post<CustomerForm>(this.url+"/Customer",emp);
  }

  getCustomers():Observable<any>
  {
    return this.http.get<any>(this.url+'/Customer');
  }

  getCustomer(email:string):Observable<any> {
    return this.http.get<any>(this.url + `/Customer?email=${email}`);
  }

}
