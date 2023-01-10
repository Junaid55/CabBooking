import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  url:string = "http://localhost:3000";
  constructor(public http:HttpClient,public dialog: MatDialog) { }
  DriverPost(drv:any){
   return this.http.post<any>(this.url+"/Driverpost",drv);
  }

  GetDriverById(id:number)
  {
      return this.http.get<any>(this.url+"/Driverpost/"+id);
  }
}
