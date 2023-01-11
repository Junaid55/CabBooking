import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideServiceService {

  id=new Subject()

  setId(id:any)
  {
    console.log('setId')
    console.log(id)
    this.id.next(id)
  }

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:3000"
  baseUrlRide="http://localhost:3000/rideDB"
  baseUrlDriver="http://localhost:3000/Driverpost"
  
  saveRide(ride:any):Observable<any>
  {
    return this.http.post<any>(this.baseUrlRide,ride)
  }

  getRideById(id:any):Observable<any>
  {
    return this.http.get<any>(this.baseUrlRide+'/'+id)
  }
  GetDriverById(id:any):Observable<any>
  {
      return this.http.get<any>(this.baseUrl+"/Driverpost/"+id);
  }
}
