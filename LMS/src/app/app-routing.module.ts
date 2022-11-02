import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
import { AdminuserviewComponent } from './admin/adminuserview/adminuserview.component';
=======
import { AdminentryComponent } from './admin/adminentry/adminentry.component';
>>>>>>> 67d6158304a86a265eda9a11236aff10e45a48c0
import { LoginComponent } from './login/login.component';
import { UserentryComponent } from './user/userentry/userentry.component';
import { LoanapplicationComponent } from './loan/loanapplication/loanapplication.component';
import { LoandetailsComponent } from './loan/loandetails/loandetails.component';
import { CustomerentryComponent } from './customer/customerentry/customerentry.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';


const routes: Routes = [
  {path: '', redirectTo:'/userlogin',pathMatch:'full'},
  {path: 'userentry', component: UserentryComponent},
  {path: 'userlogin', component: LoginComponent},
<<<<<<< HEAD
  {path:'admin',component:AdminComponent},
  {path:'../viewaccount/{userId}',component:AdminuserviewComponent}
=======
  {path:'adminregistration',component:AdminentryComponent},
  {path:'loanapplication',component:LoanapplicationComponent},
  {path:'loandetails',component:LoandetailsComponent},
  {path:'customerregistration',component:CustomerentryComponent},
  {path:'customerhome',component:CustomerhomeComponent}
>>>>>>> 67d6158304a86a265eda9a11236aff10e45a48c0
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
