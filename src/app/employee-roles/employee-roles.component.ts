import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-employee-roles',
  templateUrl: './employee-roles.component.html',
  styleUrls: ['./employee-roles.component.css']
})
export class EmployeeRolesComponent implements OnInit {
  filteredString:string='';
  employees:Employee[];

  constructor(private employeeService:EmployeeService,private _location: Location) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees()
  {
    this.employeeService.getEmployees().subscribe((data) => this.employees=data);
  }

  onClick()
  {
    this._location.back();
  }

}
