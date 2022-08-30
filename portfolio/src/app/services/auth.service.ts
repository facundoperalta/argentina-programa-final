import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //uri = 'https://portfolio-backend-arg.herokuapp.com/auth/';
  uri = 'http://localhost:8080/auth/';
  
  constructor(private httpClient: HttpClient) { }

  public newUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.uri + 'new', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.uri + 'login', loginUser);
  }
}
