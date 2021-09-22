import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TaskIndexComponent } from './task-index/task-index.component';
import { EmployeeRolesComponent } from './employee-roles/employee-roles.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeptRolesComponent } from './dept-roles/dept-roles.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'index',component:HeaderComponent},
  {path:'employee-roles',component:EmployeeRolesComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'dept-role-count',component:DeptRolesComponent},
  {path:'',redirectTo:'index',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }


export const routingComponents = [EmployeeListComponent,TaskIndexComponent,EmployeeRolesComponent,CreateEmployeeComponent,DeptRolesComponent,UpdateEmployeeComponent];
