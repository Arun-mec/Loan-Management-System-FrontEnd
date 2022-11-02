import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminlistingComponent } from './admin/adminlisting/adminlisting.component';
import { AdminuserviewComponent } from './admin/adminuserview/adminuserview.component';
import { AdminloanofficerviewComponent } from './admin/adminloanofficerview/adminloanofficerview.component';
import { UserComponent } from './user/user.component';
import { UserentryComponent } from './user/userentry/userentry.component';
import { LoanofficerComponent } from './loanofficer/loanofficer.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { AdminentryComponent } from './admin/adminentry/adminentry.component';
=======
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { LoanofficerhomeComponent } from './loanofficer/loanofficerhome/loanofficerhome.component';
import { LoanapplicationComponent } from './loan/loanapplication/loanapplication.component';
import { LoandetailsComponent } from './loan/loandetails/loandetails.component';
>>>>>>> 67d6158304a86a265eda9a11236aff10e45a48c0

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminlistingComponent,
    AdminuserviewComponent,
    AdminloanofficerviewComponent,
    UserComponent,
    UserentryComponent,
    LoanofficerComponent,
    LoginComponent,
    CustomerComponent,
<<<<<<< HEAD
    AdminentryComponent
=======
    CustomerhomeComponent,
    LoanofficerhomeComponent,
    LoanapplicationComponent,
    LoandetailsComponent
>>>>>>> 67d6158304a86a265eda9a11236aff10e45a48c0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
