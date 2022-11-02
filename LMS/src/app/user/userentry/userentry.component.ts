import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userentry',
  templateUrl: './userentry.component.html',
  styleUrls: ['./userentry.component.scss']
})
export class UserentryComponent implements OnInit {

  showForm:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
