import { Component,OnInit } from '@angular/core';
import { DriverService } from '../shared/services/driver.service';
import {MatDialog} from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Driver } from '../shared/models';
import { AuthService } from '../shared/services/auth.service';


export interface PeriodicElement
{
  id:number;

  pickup:string;

  drop:string;

  amount:number;

  driver_id:number;

  user_id:number;

}

@Component({
  selector: 'app-driverpanel',
  templateUrl: './driverpanel.component.html',
  styleUrls: ['./driverpanel.component.css']
})
export class DriverpanelComponent implements OnInit{

  constructor(private cs:DriverService, public authService:AuthService,public dialog: MatDialog){


  }

  total_amount:number=0;
  total_ride:number=0;
  driver!:Driver;

  ELEMENT_DATA: Array<PeriodicElement>=[];
  displayedColumns: string[] = ['user_id', 'pickup', 'drop','amount'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(){
      this.cs.GetDriverById(1).subscribe({
        next:(res)=>{
          console.log(res);
          this.driver=res;

          console.log(this.driver);

        },
        error:(err)=>
        {

        }
      });
      this.cs.getallrides().subscribe(
        {
          next:(res)=>
          {
          
            //console.log(this.rides)
            console.log("this iiissss")
            res.forEach((element:any) => {
              if(element.driver_id==1)
              {
                this.rides.push(element)
                this.total_ride++;
                console.log(this.rides)
                this.ELEMENT_DATA=this.rides
                this.total_amount= this.total_amount+element.amount;
                
                this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
                this.dataSource.paginator = this.paginator;
              }
              
            })
            console.log(this.rides)
            console.log(this.ELEMENT_DATA)
          },
          error:(err)=>
          {

          }
        }
      )


    
  }

  
  ride=

  {
    id:undefined,

    pickup:undefined,

    drop:undefined,

    amount:undefined,

    driver_id:undefined,

    user_id:undefined

  }

  rides:Array<any>=[];

  find()
  {
    

  }
  
  // ShowHistory(){
  //   this.Message('1000ms','1500ms');
  // }
  // Message(enterAnimationDuration: string, exitAnimationDuration: string){
  //   this.dialog.open(DriverhistoryComponent,{
  //     height:'1000px',
  //     width:'1000px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });

 
}










