import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  gettasks() :Observable<any[]>{
return this.http.get<any[]>(`${HOST_NAME}/api/tasks`)
  }

  inserttasks(main:any) :Observable<any>{
console.log(main)

    return this.http.post<any>(`${HOST_NAME}/api/tasks`,main)
      }
}
