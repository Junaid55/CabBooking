import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdmindriverComponent } from '../admindriver/admindriver.component';
import { AdminridesComponent } from '../adminrides/adminrides.component';
import { AdminusersComponent } from '../adminusers/adminusers.component';
import { AuthService } from '../shared/services/auth.service';
import { DriverService } from '../shared/services/driver.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {

  constructor(private cs:DriverService, public authService:AuthService,private dialog:MatDialog){}
  total_ride:number=0;
  total_amount=0;
  total_drivers=0;

  ngOnInit(){

    this.cs.getDrivers().subscribe({
      next:(res)=>{
        this.total_drivers=res.length
      }
    })
    this.cs.getallrides().subscribe(
    {
      next:(res)=>
      {
        this.total_ride=res.length
        res.forEach((item:any)=>
        {
            this.total_amount=this.total_amount+item.amount
        })
      }
    }
    )
  
  }

  onDriverOpen(){

    this.dialog.open(AdmindriverComponent,
      {
        width:'1000px',
        height:'400px'
      })

  }

  onRidesOpen(){

    this.dialog.open(AdminridesComponent,
      {
        width:'1000px',
        height:'400px'
      })

  }
  onCustOpen(){

    this.dialog.open(AdminusersComponent,
      {
        width:'1000px',
        height:'400px'
      })

  }
}


