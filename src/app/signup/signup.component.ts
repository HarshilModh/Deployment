import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice:UserService,private router: Router,private toastr:ToastrService) { }
  firstName:any=""  
  Email:any=""
  Password:any=""
  
  ngOnInit(): void {
  }
   saveUser(){
     //console.log(this.firstName)
     let user={"FirstName":this.firstName,"Email":this.Email,"Password":this.Password}
     //this.userservice.users.push(user)
     this.userservice.saveuser(user);
     this.toastr.success("Signup Done","Success",{
      timeOut:3000
    })
     this.router.navigateByUrl("/listusers")
     console.log(this.userservice.users)
   //  console.log(user)


   }


}
