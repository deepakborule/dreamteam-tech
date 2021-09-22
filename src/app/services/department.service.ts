import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Department } from '../department';
import { DepartmentRoleCount } from '../department-role-count';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = 'http://localhost:8080/dreamteam/departments';

  constructor(private http:HttpClient) { }

  getDepartments():Observable<Department[]> {
    return this.http.get<Department[]>(this.baseUrl);
  }

  getDepartmentsRoleCount():Observable<DepartmentRoleCount[]> {
    return this.http.get<DepartmentRoleCount[]>(this.baseUrl+"/rolecount");
  }
}
