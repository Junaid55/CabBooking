import { Component } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';

export interface UserData {
  id: number;
  name: string;
  email: string;
  mob: number;
}


@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent {
  constructor(private us:CustomerService){}
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Moblie'];
  ELEMENT_DATA: Array<any> = [];
  dataSource = this.ELEMENT_DATA;

  ngOnInit(){

    this.us.getCustomers().subscribe(
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
