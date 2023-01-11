import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBookingFormComponent } from '../dialog-booking-form/dialog-booking-form.component';
import { RideConfirmComponent } from '../ride-confirm/ride-confirm.component';
import { AuthService } from '../shared/services/auth.service';
import { CustomerService } from '../shared/services/customer.service';
import { RideServiceService } from '../shared/services/ride-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent    {
  id=JSON.parse(localStorage.getItem('user')!);
  constructor(private dialog:MatDialog,private cser:CustomerService, public authService:AuthService){}
 
  


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {

    this.cser.setCustomerData(this.id)

    this.dialog.open(DialogBookingFormComponent, {
      width: '1000px',
      height:'400px',
      enterAnimationDuration,
      exitAnimationDuration,
      
    });
  }

  open()
  {
    this.dialog.open(RideConfirmComponent,
      {
        width: '1000px',
        height:'400px'
      })

  }
}
