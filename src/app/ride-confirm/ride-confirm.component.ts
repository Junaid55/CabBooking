import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarVidComponent } from '../car-vid/car-vid.component';
import { RideDetails } from '../shared/models';
import { RideServiceService } from '../shared/services/ride-service.service';

@Component({
  selector: 'app-ride-confirm',
  templateUrl: './ride-confirm.component.html',
  styleUrls: ['./ride-confirm.component.css']
})
export class RideConfirmComponent implements OnInit{

  constructor(private ser:RideServiceService,private dialog:MatDialog){}

  showVid=false;

  ride:RideDetails=
  {
    pickup:undefined,
    drop:undefined,
    amount:undefined,
    driver_id:undefined,
    user_id:undefined
  }

  driverDetails=
  {
  
    
    name: "",
    carname: "",
    carno: ""

  }

  

  ngOnInit(): void {

    this.ser.id.subscribe((data)=>
    {
      console.log(data)
      if(data)
      {
        this.ser.getRideById(data).subscribe(
          {
            next:(res)=>
            {
                console.log(res)
                this.ride.pickup=res.pickup
                this.ride.drop=res.drop
                this.ride.amount=res.amount
                this.ride.user_id=res.user_id
                this.ride.driver_id=res.driver_id

                //for driver details

                this.ser.GetDriverById(this.ride.driver_id).subscribe(
                  {
                    next:(res)=>
                    {
                      console.log(res)
                      this.driverDetails.name=res.name
                      this.driverDetails.carname=res.carname
                      this.driverDetails.carno=res.carno
                    },
                    error:(err)=>
                    {
                      console.log(err)
                    }
                    
                  }
                )


            },
            error:(err)=>
            {
              console.log(err)
            }
          }
        )
      }
    }
      
    )
    
  }

  startRide(enterAnimationDuration:string,exitAnimationDuration:string)
  {
    this.dialog.closeAll()  
    this.dialog.open(CarVidComponent,
      {
        height:'400px',
        width:'900px',
        enterAnimationDuration,
        exitAnimationDuration
      
      })
  }

}
