import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionserviceService {

  constructor(private httpClient:HttpClient) { }
  authenticate(email:string,password:string):Observable<any>{
    let url="http://restapi2020.herokuapp.com/api/login.json"
    let data={"email":email,"password":password}
    return this.httpClient.post(url,data)

  }
}
