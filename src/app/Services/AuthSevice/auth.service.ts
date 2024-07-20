import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { jwtDecode } from "jwt-decode";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

   urlLogin:string=environment.apiUrlLogin;
   urlProduction:string | undefined;

   isAuthenticated: boolean = false;
   roles:any;
   accessToken: string | any;
   username: any;

  constructor( private http:HttpClient,
    private route:Router,
  ) {}

  public login(username: string, password: string) {
    const headers = new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded");
    
    const params = new HttpParams().set("username",username).set("password",password);
    return this.http.post(this.urlLogin, params , {headers} );
  }

  loadProfile(res: any) {
    this.isAuthenticated=true
    this.accessToken=res['access-token']
    const decodeJwt:any = jwtDecode(this.accessToken)
    this.username=decodeJwt.sub
    this.roles=decodeJwt.scope
    console.log(this.roles,this.username)
    window.localStorage.setItem('username',decodeJwt.sub)
    window.localStorage.setItem('token',this.accessToken)
    window.localStorage.setItem('role',decodeJwt.scope)
    }

   logout() {
    window.localStorage.clear()
    this.route.navigateByUrl('/login')
  } 

}
 