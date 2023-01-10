import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBookingFormComponent } from '../dialog-booking-form/dialog-booking-form.component';
import { RideConfirmComponent } from '../ride-confirm/ride-confirm.component';
import { RideServiceService } from '../shared/services/ride-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor(private dialog:MatDialog){}
  


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
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
