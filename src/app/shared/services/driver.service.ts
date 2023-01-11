import { Injectable } from '@angular/core';
import { Observable, Observer,map,pipe, BehaviorSubject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { Driver } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  url:string = "http://localhost:3000";

  driverId= new BehaviorSubject(1);
  dId=this.driverId.asObservable()
  setDriverData(id:number)
  { 
    console.log(id)
      this.driverId.next(id)
      localStorage.setItem('did', JSON.stringify(id));
      console.log(this.driverId)
  }

  constructor(public http:HttpClient, private authService:AuthService,public dialog: MatDialog) { }
  DriverPost(drv:any){
    console.log(drv);
    
    this.authService.SignUp(drv.email, drv.password);
     
   return this.http.post<any>(this.url+"/Driverpost",drv);

  }

  GetDriverById(id:number)
  {
      return this.http.get<any>(this.url+"/Driverpost/"+id);
  }
  getallrides():Observable<any>
  {
      return this.http.get<any>(this.url+"/rideDB");
  }

  
  getDrivers():Observable<any>
  {
    return this.http.get<any>(this.url+'/Driverpost');
  }

  getDriver(email:string):Observable<any> {
    return this.http.get<any>(this.url + `/Driverpost?email=${email}`);
  }
}
