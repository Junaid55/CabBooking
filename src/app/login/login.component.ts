import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder, private authService:AuthService){}

  hide = true;
  empForm!:FormGroup;
  emailpattern!:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  ngOnInit(): void {
    this.empForm = this.fb.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required]],
    
    })
  }
  
  OnSubmit(){
    
    if(this.empForm.valid){
      this.authService.SignIn(this.empForm.value);
    }
  }
}
