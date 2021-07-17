import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionserviceService } from '../sessionservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string=""
  password:string=""
  constructor(private sessionservice:SessionserviceService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  login(){
    this.sessionservice.authenticate(this.email,this.password).subscribe(resp=>{
      this.toastr.success("Log in succsess","",{timeOut:3000})
      localStorage.setItem("isLoggedIn","yes")
      this.router.navigateByUrl("/menu")

    },err=>{
      this.toastr.error("Invalid Credentials","",{timeOut:3000})

    })
    
  }
}
