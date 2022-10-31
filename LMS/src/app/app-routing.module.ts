import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserentryComponent } from './user/userentry/userentry.component';
import { AdminentryComponent } from './admin/adminentry/adminentry.component';
import { CustomerentryComponent } from './customer/customerentry/customerentry.component';

const routes: Routes = [
  {path: '', redirectTo:'/userlogin',pathMatch:'full'},
  {path: 'userentry', component: UserentryComponent},
  {path: 'userlogin', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
