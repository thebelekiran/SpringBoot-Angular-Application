import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const AUTH_TOKEN = 'authToken'
export const AUTH_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  executeJWTAuthenticationService(username : string , password : string){
    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.post<any>(`${API_URL}/authenticate`, {username, password}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTH_USER, username)
            sessionStorage.setItem(AUTH_TOKEN, `Bearer ${data.token}`)
            return data;
          }
        )
      )
    //console.log(" Execute Hello World Bean Service")
  }

  executeAuthenticationService(username : string , password : string){
    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTH_USER, username)
            sessionStorage.setItem(AUTH_TOKEN, basicAuthHeaderString)
            return data;
          }
        )
      )
    //console.log(" Execute Hello World Bean Service")
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTH_USER)
  }
  
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(AUTH_TOKEN)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTH_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTH_USER)
    sessionStorage.removeItem(AUTH_TOKEN)
  }

}

export class AuthenticationBean{

  constructor(
    public message : string
  ){}

}