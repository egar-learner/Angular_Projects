import { EmployeeService } from './employee.service';
import { employee } from './employee';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practice-now';
  public employees!: employee[];

  constructor (private employeeService: EmployeeService) {

  }
  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees() : void {
    this.employeeService.getEmployee().subscribe(
      (Response : employee[])=>{
        this.employees = Response;
      },
      (Error: HttpErrorResponse) => {
        alert(Error.message);
      }
    );
  }
}
