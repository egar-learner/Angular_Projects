import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  //function() : returnType{
    //Function body
  //}
  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).
            catch(this.catchError);
  }

  catchError (error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
