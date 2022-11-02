import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Loan } from './loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
    //Global variable
    formLoanData: Loan = new Loan();

    // list of users -- retrieve all records
    users: Loan[];

  constructor(private httpClient:HttpClient) { }

  getAllLoans(): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/loans');
  }

}
