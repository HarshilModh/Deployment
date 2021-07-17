import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private empployeeservice:EmployeeService,private toastr:ToastrService,private router:Router) { 

  }
  empid=0
  employee:Employee={id:-1,email:"",first_name:"",last_name:"",gender:"",password:""}


  ngOnInit(): void {
  this.empid=this.activatedroute.snapshot.params.id
  this.getEmployeeById();
  }
  getEmployeeById() {
    this.empployeeservice.getEmployeeById(this.empid).subscribe(resp => {
      this.employee = resp
    })
  }
  updateEmployee() {
    this.empployeeservice.updateEmployee(this.employee).subscribe(resp=>{
      this.router.navigateByUrl("/listemployee")      
    })
  }

}
