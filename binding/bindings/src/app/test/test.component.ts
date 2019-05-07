import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
 <h2>Welcome {{name}}</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  <h2 [style.color]="highlightColor">Style binding 2</h2>
  <h2 [ngStyle]="titleStyles">Style binding 3 </h2>
  <button (click)="onClick($event)">Greet</button><br>
  <button (click)="greeting= 'Dobrodosao Andrija'">Greet</button><br>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button><br>

  <input [(ngModel)]="name" type="text">
  {{name}}
  `,
  styles:[]
  
})
export class TestComponent implements OnInit {

  public name="";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange"
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";
  constructor() { }

  ngOnInit() {
  }

    greetUser(event){
      return "Hello " + this.name;
    }
      onClick(){
        console.log('Event')
        this.greeting = 'Dobrodosli na nas sajt'
      
      }
      logMessage(value){
        console.log(value);
      }

}
