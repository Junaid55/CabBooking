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
  constructor(private fb:FormBuilder, private authService:AuthService,private custSer:CustomerService){}


  custArr=[];
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

    
    let em=this.empForm.value['email']
    if(this.empForm.valid){

      this.custSer.getCustomer().subscribe(
        {
          next:(res)=>
          {
            console.log(res)
            this.custArr=res
            console.log(this.custArr)

            this.custArr.forEach((item:any)=>
              {
                if(item.email==this.empForm.value['email'])
                {
                  console.log(item)
                  this.custSer.setCustomerData(item.id)

                 
                }
              })
            
            
          }
        }
      )

      this.authService.SignIn(this.empForm.value);

    }
  }
}
