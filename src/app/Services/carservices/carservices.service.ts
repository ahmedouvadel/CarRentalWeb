import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServicesService {
  url:string=environment.apiCars
  constructor(
    private http : HttpClient
  ) { }

  public saveCar(voitureDTO:any): Observable<any>{
    //const headers = new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded");
    return this.http.post(this.url,voitureDTO, )
  }

  public getAllCars() {
    const headers = new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded");
    return this.http.get(this.url,{headers})
  }
}
