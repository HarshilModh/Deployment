import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  saveEmployee(employee:Employee):Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/users.json"
     return this.httpClient.post(url,employee);

  }
  getAllEmployees():Observable<any>{
    let url="http://restapi2020.herokuapp.com/api/users.json"
    return this.httpClient.get(url)
  }
  deleteEmployeeById(id:number):Observable<any>{
    let url="http://restapi2020.herokuapp.com/api/users/"+id+".json"
    return this.httpClient.delete(url)
  }
  getEmployeeById(empid:number):Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/users/"+empid+".json"
    return this.httpClient.get(url)

  }
  updateEmployee(emp:any):Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/users/"+emp.id+".json"
    return this.httpClient.put(url,emp)
  }

}