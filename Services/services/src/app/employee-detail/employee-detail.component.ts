import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  template:
  `
  <h2>Employee Detail</h2>
      <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
     
      </ul>
  `,
  styles:[]
})
export class EmployeeDetailComponent implements OnInit {

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
