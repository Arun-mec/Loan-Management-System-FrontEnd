import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UserService } from '../../shared/user.service'

@Component({
  selector: 'app-adminlisting',
  templateUrl: './adminlisting.component.html',
  styleUrls: ['./adminlisting.component.scss']
})
export class AdminlistingComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.bindGetAllCustomersList();
    this.userService.bindGetAllLoanOfficersList();
  }
}
