import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { CustomerService } from '../shared/services/customer.service';
import { DriverService } from '../shared/services/driver.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private custSer: CustomerService,
    private drivSer: DriverService
  ) {}

  custArr = [];
  hide = true;
  empForm!: FormGroup;
  emailpattern!: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';
  ngOnInit(): void {
    this.empForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  OnSubmit() {
    let em = this.empForm.value['email'];
    if (this.empForm.valid) {
      this.custSer.getCustomer(em).subscribe((res) => {
        console.log('customer', res);
        if (res && res.length) {
          console.log(res[0].id)

          this.custSer.setCustomerData(res[0].id);

          this.authService.SignInCustomer(this.empForm.value);
        }
      });

      this.drivSer.getDriver(em).subscribe((res) => {
        console.log('driver', res);
        if (res && res.length) {
          this.drivSer.setDriverData(res[0].id);
          console.warn('Driver'+res[0].id);
          this.authService.SignInDriver(this.empForm.value);
        }
      })
    }
  }
}
