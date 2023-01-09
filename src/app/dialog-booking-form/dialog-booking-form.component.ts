import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RideDetails } from '../models/RideDetails';
import { RideConfirmComponent } from '../ride-confirm/ride-confirm.component';
import { RideServiceService } from '../services/ride-service.service';

@Component({
  selector: 'app-dialog-booking-form',
  templateUrl: './dialog-booking-form.component.html',
  styleUrls: ['./dialog-booking-form.component.css']
})

export class DialogBookingFormComponent implements AfterViewInit{

  
  showLoader:boolean

  @ViewChild('inputField1') 
  inputField1!:ElementRef

  @ViewChild('inputField2') 
  inputField2!:ElementRef


 

  autocomplete1:google.maps.places.Autocomplete|undefined;
  autocomplete2:google.maps.places.Autocomplete|undefined;


  ride:RideDetails=
  {
    pickup:undefined,
    drop:undefined,
    driver_id:undefined,
    user_id:1,
    amount:undefined
    
  }


 

  randomDriver() { 
    return Math.random() * (5 - 1) + 1;
}

randomAmount() { 
  return Math.random() * (350 - 100) + 100;
}

  lat1:any=0
  long1:any=0

  lat2:any=0
  long2:any=0

  

  constructor(private dialog : MatDialog,private ser:RideServiceService){
    this.showLoader=false;
  }
  ngAfterViewInit(): void {
    //places autocomplete api
    this.autocomplete1=new google.maps.places.Autocomplete(this.inputField1.nativeElement)
    this.autocomplete1.addListener('place_changed',()=>
    {
      const pickup=this.autocomplete1?.getPlace();
      console.log(pickup)
      console.log('lat is == == ' +pickup?.geometry?.location?.lat())
      this.lat1=pickup?.geometry?.location?.lat()
      this.long1=pickup?.geometry?.location?.lng()
      this.ride.pickup=pickup?.formatted_address
    
      
    })

    this.autocomplete2=new google.maps.places.Autocomplete(this.inputField2.nativeElement)
    this.autocomplete2.addListener('place_changed',()=>
    {
      const dest=this.autocomplete2?.getPlace();
      console.log(dest)

      this.lat2=dest?.geometry?.location?.lat()
      this.long2=dest?.geometry?.location?.lng()

      this.ride.drop=dest?.formatted_address
   
    })
    
  }

  
 

  

  proceedUser()
  {
    this.ride.driver_id =Math.round(this.randomDriver())
    this.ride.amount=Math.round(this.randomAmount())

    console.log(this.ride)

    
    //this.calDist()
    this.showLoader=true
    setTimeout(()=>
    {
      this.ser.saveRide(this.ride).subscribe(
        {
          next:(res)=>
          { 
            console.log(res)
            this.ser.setId(res.id)

            

          },
          error:(err)=> {

            console.log(err)
            
          }
        }
      ) 
      this.dialog.closeAll()
      this.dialog.open(RideConfirmComponent,{
        width: '1000px',
        height:'400px',
      })
    },3000)
  }

}
