import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template:
  `
      <h2>Employee List</h2>
      <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
      </ul>

  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    {"id":1, "name": "Andrija", "age": 23},
    {"id":2, "name": "Teodora", "age": 23},
    {"id":3, "name": "Jovan", "age": 27},
    {"id":4, "name": "Ceca", "age": 24},
    

  ];


  constructor() { }

  ngOnInit() {
  }

}
