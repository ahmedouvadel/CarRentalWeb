import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { jwtDecode } from "jwt-decode";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

   url:string="http://localhost:9090";

   isAuthenticated: boolean = false;
   roles:any;
   accessToken!: string;
   username: any;

  constructor( private http:HttpClient) { }

  public login(username: string, password: string) {
    const headers = new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded");
    
    const params = new HttpParams().set("username",username).set("password",password);
    return this.http.post(this.url +"/auth/login", params , {headers} );
  }

  loadProfile(res: any) {
    this.isAuthenticated=true
    this.accessToken=res['access-token']
    const decodeJwt:any = jwtDecode(this.accessToken)
    this.username=decodeJwt.sub
    this.roles=decodeJwt.scope
    console.log(this.roles,this.username)
    localStorage.setItem('username',decodeJwt.sub)
    localStorage.setItem('token',this.accessToken)
    localStorage.setItem('role',decodeJwt.scope)
    }

  /* logout() {
    this.isLoggedIn = false;
  } */

}
 