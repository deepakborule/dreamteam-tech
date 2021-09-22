import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Role } from '../role';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl = 'http://localhost:8080/dreamteam/roles';

  constructor(private http:HttpClient) { }

  getRoles():Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl);
  }
}
