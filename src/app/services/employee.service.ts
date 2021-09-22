import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Employee } from '../employee';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/dreamteam/employees';

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    
    return this.http.post<Employee>(this.baseUrl, employee, httpOptions);
  }

  getEmployeeById(id: number): Observable<Employee> {
    

    //return this.http.get<Employee>(`${this.baseUrl}/${id}`, httpOptions);
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }
}
