import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  constructor(private fb:FormBuilder,private cs:ServiceService){}

  hide = true;
  empForm!:FormGroup;
  emailpattern!:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  passpatern!:"^[a-zA-Z0-9]";
  ngOnInit(): void {
    this.empForm = this.fb.group({
      id:[''],
      name : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(this.passpatern)]],
      mob : ['',[Validators.required,Validators.minLength(10)]],
    
    })
  }
  
  OnSubmit(){
    
     if(this.empForm.valid){
     this.cs.EmpPost(this.empForm.value).subscribe();
      console.log(this.empForm.value);
      alert("Record added");
    }
  }
}