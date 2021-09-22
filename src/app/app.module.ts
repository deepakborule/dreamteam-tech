import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EmployeeRolesComponent } from './employee-roles/employee-roles.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DeptRolesComponent } from './dept-roles/dept-roles.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FilterPipe,
    EmployeeRolesComponent,
    CreateEmployeeComponent,
    DeptRolesComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
