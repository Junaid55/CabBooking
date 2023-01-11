import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from "./customer/customer.component";
import { MaterialModule } from './materialmodule';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverComponent } from './driver/driver.component';
import { DriverRegisteredDialogComponent } from './driver-registered-dialog/driver-registered-dialog.component';
import { DriverpanelComponent } from './driverpanel/driverpanel.component';


@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        DriverComponent,
        DriverRegisteredDialogComponent,
        DriverpanelComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
      
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
