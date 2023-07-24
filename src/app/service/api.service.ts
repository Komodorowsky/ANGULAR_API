import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlapi='https://api.escuelajs.co/api/v1/users';
  
  constructor(private http: HttpClient) { }

  public getDat(): Observable<any>{
    return this.http.get<any>(this.urlapi);
  }
}
