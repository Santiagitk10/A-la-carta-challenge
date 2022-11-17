import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IloginForm } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  loginUrl = "http://challenge-react.alkemy.org/"

  constructor(private http: HttpClient) { }


  logIn(credentials : IloginForm ): Observable<any>{
      return this.http.post<any>(this.loginUrl,credentials);
  }


}


// tutorial
// https://www.youtube.com/watch?v=4cO-3UFyfkY