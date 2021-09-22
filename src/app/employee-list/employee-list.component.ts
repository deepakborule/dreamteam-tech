import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  filteredString:string='';
  employees:Employee[];

  
  constructor(private employeeService:EmployeeService,private _location: Location,private router: Router) { }

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

  updateEmployee(id : number)
  {
    this.router.navigate(['update-employee', id]);
  }

  
}
