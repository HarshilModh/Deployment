import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeservice:EmployeeService,private tostr:ToastrService,private router:Router) { }

  employee:Employee={ id:0,
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    gender:""}
  ngOnInit(): void {

  }
  saveEmployee(){
    console.log(this.employee)
    this.employeeservice.saveEmployee(this.employee).subscribe (resp=>{
      console.log(resp)
      this.tostr.success("Employee added","Success",{

        timeOut:3000
      })
      this.router.navigateByUrl("/listemployee")
    })

  }

}
