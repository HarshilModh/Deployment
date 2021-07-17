import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogincheckGuard implements CanActivate {
  constructor(private router:Router,private toast:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isLoggedIn=localStorage.getItem("isLoggedIn") as string
      if(isLoggedIn==undefined||isLoggedIn==null){
        this.router.navigateByUrl("/login")
        this.toast.error("Please login before accessing any resource","",{timeOut:3000})
        return false
      }
      return true;
  }
  
}
