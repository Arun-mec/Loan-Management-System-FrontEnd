import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    //Global variable
    formUserData: User = new User();

    // list of users -- retrieve all records
    customers: User[];
    officers: User[];
    roles: Role[];

  constructor(private httpClient:HttpClient) { }

  bindGetAllCustomersList(){
    this.httpClient.get(environment.apiUrl+'/customers')
    .toPromise()
    .then((response)=>{
      console.log(response);
      this.customers = response as User[];
    }).catch((error)=>{
      console.log(error); 
    })
  }
  bindGetAllLoanOfficersList(){
    this.httpClient.get(environment.apiUrl+'/loanofficers')
    .toPromise()
    .then((response)=>{
      console.log(response);
      this.officers = response as User[];
    }).catch((error)=>{
      console.log(error); 
    })
  }
  
}
