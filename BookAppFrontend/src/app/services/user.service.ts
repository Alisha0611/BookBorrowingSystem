import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../data-type';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  inValidUserAuth = new EventEmitter<Boolean>(false);
  constructor(private http: HttpClient, private route: Router) { }
  login(username: string, password: string): Observable<any>{
    return this.http.get<any>(`https://localhost:7263/api/User?username=${username}&password=${password}`)
  }
}
