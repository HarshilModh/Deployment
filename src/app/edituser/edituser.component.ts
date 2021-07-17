import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userservice:UserService,private router:Router,private toastr:ToastrService) { }
  user:User={Email:"",FirstName:"",Password:""}
  ngOnInit(): void {
    this.user.Email = this.route.snapshot.params.email  
    console.log("email => "+this.user.Email);
    this.user =  this.userservice.getUserByEmail(this.user.Email);
 }
 
  updateUser() {
    console.log(this.user);
    
    this.userservice.updateUserByEmail(this.user.Email);
    //this.toastr.success("Edited","Success",{
      //timeOut:3000
    //})
    this.toastr.info("Edited","",{
      timeOut:3000
    })
   
    this.router.navigateByUrl("/listusers")
   
  }


}
