import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public _employees !: IEmployee[];

  _error !: any;

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployees()
    .subscribe(data => this._employees= data, 
               error => this._error = error
               );
  }

}
