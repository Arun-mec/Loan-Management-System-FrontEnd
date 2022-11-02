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
import { UserlistingComponent } from './user/userlisting/userlisting.component';
import { LoanofficerComponent } from './loanofficer/loanofficer.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminentryComponent } from './admin/adminentry/adminentry.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminlistingComponent,
    AdminuserviewComponent,
    AdminloanofficerviewComponent,
    UserComponent,
    UserentryComponent,
    UserlistingComponent,
    LoanofficerComponent,
    LoginComponent,
    CustomerComponent,
    AdminentryComponent
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
