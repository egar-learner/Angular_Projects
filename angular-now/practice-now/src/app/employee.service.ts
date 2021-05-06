import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployee(): Observable<employee[]>{
    return this.http.get<employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(emp: employee): Observable<employee>{
    return this.http.post<employee>(`${this.apiServerUrl}/employee/add`, emp);
  }

  public updateEmployee(emp: employee): Observable<employee>{
    return this.http.put<employee>(`${this.apiServerUrl}/employee/update`, emp);
  }

  public deleteEmployee(empId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${empId}`);
  }
}
