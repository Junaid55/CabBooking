import { Component } from '@angular/core';
import { DriverService } from '../shared/services/driver.service';

export interface UserData {
  id: number;
  pickup: string;
  drop: string;
  amount: number;
  user_id:number;
  driver_id:number;
}


@Component({
  selector: 'app-adminrides',
  templateUrl: './adminrides.component.html',
  styleUrls: ['./adminrides.component.css']
})
export class AdminridesComponent {
  constructor(private ds:DriverService){}
  displayedColumns: string[] = ['Id', 'Pickup', 'Drop', 'Amount','Driver Id','User Id'];
   ELEMENT_DATA: Array<any> = [];
  dataSource = this.ELEMENT_DATA;

  ngOnInit(){

    this.ds.getallrides().subscribe(
      {
        next:(res)=>
        {
          console.log(res)
          this.ELEMENT_DATA=res      
          this.dataSource = this.ELEMENT_DATA;
          console.log(this.ELEMENT_DATA)      
        }
      }
    )
   

}
}
