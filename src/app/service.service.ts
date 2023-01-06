import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerForm } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url:string = "http://localhost:3000";
  constructor(public http:HttpClient) { }
  EmpPost(emp:CustomerForm){
    console.log(emp);
   return this.http.post<CustomerForm>(this.url+"/Customer",emp);
  }
}
