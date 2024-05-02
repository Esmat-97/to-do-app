import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  /*   */

  register(main:any) :Observable<any>{
console.log(main)
return this.http.post<any>(`${HOST_NAME}/api/register`,main)
  }


  /*   */


  login(main:any) :Observable<any>{
console.log(main)
 return this.http.post<any>(`${HOST_NAME}/api/login`,main)
      }
}
