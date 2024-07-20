import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUsers:string=environment.apiUsers;
  urlProduction:string | undefined;

  constructor(private http:HttpClient) {
   }

  public getAllUsers(): Observable<any>{
    const headers = new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded");
    return this.http.get(this.apiUsers,{headers});
  }
}
