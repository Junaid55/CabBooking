import { Injectable } from '@angular/core';
import { Observable, Observer,map,pipe } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  url:string = "http://localhost:3000";
  constructor(public http:HttpClient,public dialog: MatDialog) { }
  DriverPost(drv:any){
    console.log(drv);
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
}
