import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';
import { VerifyEmailAddressComponent } from './verify-email-address/verify-email-address.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { DriverpanelComponent } from './driverpanel/driverpanel.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"verify-email-address", component:VerifyEmailAddressComponent},
  {path:"driver-register", component:DriverComponent},
  {path:"customer-register", component:CustomerComponent},
  {path:"book-ride", component:HomeComponent, canActivate:[AuthGuard] },
  {path:"driver-dashboard", component:DriverpanelComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
