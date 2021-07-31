import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    const url = 'https://gorest.co.in/public/v1/users';
    return this.http.get<any>(url);
  }
}
