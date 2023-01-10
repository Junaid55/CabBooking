import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerForm } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string = "http://localhost:3000";
  constructor(public http:HttpClient, private authService:AuthService) { }

  CustomerPost(emp:CustomerForm){
    console.log(emp);
    
    this.authService.SignUp(emp.email, emp.password);
     
   return this.http.post<CustomerForm>(this.url+"/Customer",emp);
  }
}
