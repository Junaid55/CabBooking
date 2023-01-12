import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private drivSer: DriverService,
    private route:Router
  ) {}

  custArr = [];
  hide = true;
  empForm!: FormGroup;
  ngOnInit(): void {
    this.empForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  OnSubmit() {
    let em = this.empForm.value['email'];

    if (em === 'admin') {
      this.authService.loginSubject.next(true);
      this.route.navigate(['admin-panel']);
    } else {
      if (this.empForm.valid) {
        this.custSer.getCustomer(em).subscribe((res) => {
          console.log('customer', res);
          if (res && res.length) {
            console.log(res[0].id);

            this.custSer.setCustomerData(res[0].id);

            this.authService.SignInCustomer(this.empForm.value);
          }
        });

        this.drivSer.getDriver(em).subscribe((res) => {
          console.log('driver', res);
          if (res && res.length) {
            this.drivSer.setDriverData(res[0].id);
            console.warn('Driver' + res[0].id);
            this.authService.SignInDriver(this.empForm.value);
          }
        });
      }
    }
  }
}
