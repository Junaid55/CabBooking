import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from "./customer/customer.component";
import { MaterialModule } from './materialmodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverComponent } from './driver/driver.component';
import { DriverRegisteredDialogComponent } from './driver-registered-dialog/driver-registered-dialog.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HomeComponent } from './home/home.component';
import { DialogBookingFormComponent } from './dialog-booking-form/dialog-booking-form.component';
import { CarVidComponent } from './car-vid/car-vid.component';
import { RideConfirmComponent } from './ride-confirm/ride-confirm.component';


@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        DriverComponent,
        DriverRegisteredDialogComponent,
        HomeComponent,
        DialogBookingFormComponent,
        CarVidComponent,
        RideConfirmComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
      
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        GoogleMapsModule,
        FormsModule
    ]
})
export class AppModule { }
