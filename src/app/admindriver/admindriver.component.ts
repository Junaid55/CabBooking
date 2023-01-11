import { Component,OnInit } from '@angular/core';
import { DriverService } from '../shared/services/driver.service';

export interface DriverData {
  id: number;
  name: string;
  email: string;
  carno: string;
  mob:number
}



@Component({
  selector: 'app-admindriver',
  templateUrl: './admindriver.component.html',
  styleUrls: ['./admindriver.component.css']
})
export class AdmindriverComponent implements OnInit {
  constructor(private ds:DriverService){}
  displayedColumns: string[] = ['Driver Id', 'Name', 'Email', 'Car Number','Mobile'];
   ELEMENT_DATA: Array<any> = [];
  dataSource = this.ELEMENT_DATA;

  ngOnInit(){

    this.ds.getDrivers().subscribe(
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
