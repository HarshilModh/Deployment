import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users:Array<any>=[]
  constructor(private userservice:UserService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.users=this.userservice.getallusers()
    console.log(this.users)
  }
  deleteUser(email:string){
    this.userservice.deleteUserByEmail(email)

    this.users=this.userservice.getallusers()
    this.toastr.error("Deleted","",{
      timeOut:3000
    })
    
  }

}
