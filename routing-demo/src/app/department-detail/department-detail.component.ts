import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>

    <p>
      <button routerLink="overview"><b>Overview</b></button>
      </p>
      <p>
      <button routerLink="contact"><b>Contact</b></button>
    </p>

    <router-outlet></router-outlet>

    
    <p>
    <button (click)="goPrevious()"><b>Previous</b></button>
    </p>
    <p>
    <button (click)="goNext()"><b>Next</b></button>
    </p>
    
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;

    });
    
    
  }
  
  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId])

  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId])

  }
  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }


}
