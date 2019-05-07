import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
  <h2>Codevolution</h2>
  </ng-template>

    <ng-template #elseBlock>
    <h2>Hidden</h2>
    </ng-template>

    <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red</div>
    <div *ngSwitchCase="'blue'">You picked blue</div>
    <div *ngSwitchCase="'green'">You picked green</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>

      <div *ngFor="let color of colors; odd as o"> 
      <h2>{{o}} {{color}}</h2>                       
      </div>

          <h2>{{"Hello " + name}}</h2><br>
            <button (click)="fireEvent()">Send Event</button>
    
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();



  public colors = ["red", "blue", "green", "yellow"];

  displayName = true;


  constructor() { }

  public color = "orange";

  ngOnInit() {
  }

    fireEvent(){
      this.childEvent.emit('Hey Andrija');
    }



}
