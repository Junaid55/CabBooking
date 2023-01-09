import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { VerifyEmailAddressComponent } from './verify-email-address/verify-email-address.component';

const routes: Routes = [
  {path:"", component:CustomerComponent},
  {path:"verify-email-address", component:VerifyEmailAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
