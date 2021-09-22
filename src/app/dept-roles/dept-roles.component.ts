import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { DepartmentRoleCount } from '../department-role-count';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dept-roles',
  templateUrl: './dept-roles.component.html',
  styleUrls: ['./dept-roles.component.css']
})
export class DeptRolesComponent implements OnInit {
  departmentsRoleCount:DepartmentRoleCount[];

  constructor(private _location: Location, private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.getDepartmentsRoleCount();
  }

  private getDepartmentsRoleCount()
  {
    this.departmentService.getDepartmentsRoleCount().subscribe((data) => this.departmentsRoleCount=data);
  }

  onClick()
  {
    this._location.back();
  }

 

}
