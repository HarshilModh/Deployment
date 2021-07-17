import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router,private toastr:ToastrService) {

   }
   employees:Array<Employee>  = [] 
  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(resp=>{
      this.employees=resp
      console.log(resp)
    })
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe(resp=>{
      this.toastr.error("Employee Deleted","", { timeOut:3000})
      this.employeeService.getAllEmployees().subscribe(resp=>{
        this.employees=resp
    })
  })

  }
}