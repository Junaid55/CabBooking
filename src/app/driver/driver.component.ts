import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { DriverService } from '../shared/services/driver.service';
import {MatDialog} from '@angular/material/dialog';
import { DriverRegisteredDialogComponent } from '../driver-registered-dialog/driver-registered-dialog.component';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {

  constructor(private fb:FormBuilder,private cs:DriverService,public dialog: MatDialog,private router:Router){}

  driverForm!:FormGroup;
  hide = true;
  emailpattern!:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  passpatern!:"^[a-zA-Z0-9]";
  namepattern!:"^[a-zA-Z][a-zA-Z ]+";
  carnopattern!:"^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$";

  ngOnInit(): void {
    this.driverForm = this.fb.group({
      id:[''],
      name : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern(this.namepattern)]],
      email : ['',[Validators.required,Validators.email]],
      carname:['',[Validators.required]],
      carno:['',[Validators.required,Validators.pattern(this.carnopattern)]],
      rate:['',[Validators.required]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(this.passpatern)]],
      gender : ['',[Validators.required]],
      dob : ['',[Validators.required]],
      mob : ['',[Validators.required,Validators.minLength(10)]]
    })
  }

  OnSubmit(){
    
    //this.router.navigate(['driverpanel']);
    if(this.driverForm.valid){
      // this.cs.EmpPost(this.empForm.value).subscribe();
      //console.log(this.driverForm.value);
      this.cs.DriverPost(this.driverForm.value).subscribe();
      this.Message('1000ms','1500ms');
     // this.router.navigate(['driverpanel']);
      //alert("Succesfull");
    }
  }
  Message(enterAnimationDuration: string, exitAnimationDuration: string){
    this.dialog.open(DriverRegisteredDialogComponent,{
      height:'250px',
      width:'500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
