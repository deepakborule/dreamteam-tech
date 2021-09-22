import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DepartmentService } from '../services/department.service';
import { EmployeeService } from '../services/employee.service';
import { Department } from '../department';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../services/role.service';
import {Location} from '@angular/common';
import { Role } from '../role';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  departments:Department[];
  selectedDepartment:string;
  employee:Employee = new Employee();
  
  //department : Department = new Department();
  //roles :Role[];

  constructor(private _location: Location, private departmentService:DepartmentService, 
    private employeeService:EmployeeService,private router: Router, private route:ActivatedRoute,
    private roleService:RoleService) { }


  ngOnInit(): void {
    this.employee.department = new Department();
    this.getDepartments();
    this.getEmployeeById();
    //this.department = this.employee.department;
    //this.getRoles();
  }

  /*private getRoles()
  {
    this.roleService.getRoles().subscribe((data) => this.roles=data);
    
  }*/

  onClick()
  {
    this._location.back();
  }


  private getDepartments()
  {
    this.departmentService.getDepartments().subscribe((data) => this.departments=data);
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  private getEmployeeById()
  {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {this.employee=data},
    error => console.log(error));
    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onDepartmentSelected(item: any)
  {
    console.log(this.selectedDepartment);
    this.employee.department.id = +this.selectedDepartment;
    //console.log(this.selectedDepartment.id);
  }

}
