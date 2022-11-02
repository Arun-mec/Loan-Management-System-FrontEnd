import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminuserviewComponent } from './admin/adminuserview/adminuserview.component';
import { LoginComponent } from './login/login.component';
import { UserentryComponent } from './user/userentry/userentry.component';

const routes: Routes = [
  {path: '', redirectTo:'/userlogin',pathMatch:'full'},
  {path: 'userentry', component: UserentryComponent},
  {path: 'userlogin', component: LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'../viewaccount/{userId}',component:AdminuserviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
