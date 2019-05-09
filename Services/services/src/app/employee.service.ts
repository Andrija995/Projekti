import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';

import { catchError } from 'rxjs/operators';
//import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';

@Injectable()
 
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

    getEmployees(){
      return this.http.get<any>(this._url)
      .pipe(
       catchError(this.errorHandler)
      )

    }
    
    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server error");
    }
      

    
    
}
