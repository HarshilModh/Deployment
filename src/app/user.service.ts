import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users:Array<any>=[]
  saveuser(data:any){
    this.users.push(data)
    console.log(this.users)
  }
  getallusers():Array<any>{
    return this.users;
  }
  deleteUserByEmail(email:string){
    this.users=this.users.filter(u=>u.Email !=email)
  }
  getUserByEmail(email:string):any{
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].Email==email){
        return this.users[i]
      }
    }
    return null
  }
  updateUserByEmail(user:any){
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].Email==user.email){
        this.users[i]=user
      }
    }
    
  }
  constructor() { }
}
