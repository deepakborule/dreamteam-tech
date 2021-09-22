import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Employee } from '../employee';
import { RoleService } from '../services/role.service';
import { DepartmentService } from '../services/department.service';
import { EmployeeService } from '../services/employee.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Role } from '../role';
import { Department } from '../department';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  role:Role;
  selectedRoles:Role[]
  departments:Department[];
  selectedDepartment:string;
  employee:Employee = new Employee();
  roleDropdownList :Role[];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(private _location: Location, private roleService:RoleService, 
    private departmentService:DepartmentService, private employeeService:EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.employee.department = new Department();
    this.getRoles();
    this.getDepartments();
    this.setDropdownSettings();
  }

  private getRoles()
  {
    this.roleService.getRoles().subscribe((data) => this.roleDropdownList=data);
    
  }

  private getDepartments()
  {
    this.departmentService.getDepartments().subscribe((data) => this.departments=data);
  }

  private setDropdownSettings()
  {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'roleName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  

  onClick()
  {
    this._location.back();
  }

  onSubmit()
  {
    if(!this.employee.employeeName)
    {
      alert('Please Enter Employee Name');
      return;
    }
    if(!this.employee.roles)
    {
      alert('Please Select at least one Role');
      return;
    }
    if(!this.employee.department.id)
    {
      alert('Please Select Department');
      return;
    }

    console.log(this.employee);
    this.saveEmployee();
    
    //console.log(this.employee);
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onItemSelect(item: any) {
    this.employee.roles = this.selectedRoles;
    
  }
  onSelectAll(items: any) {
    this.employee.roles = this.selectedRoles;
    
  }

  onDepartmentSelected(item: any)
  {
    console.log(this.selectedDepartment);
    this.employee.department.id = +this.selectedDepartment;
    //console.log(this.selectedDepartment.id);
  }

}
