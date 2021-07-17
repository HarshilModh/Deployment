import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CalcComponent } from './calc/calc.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { LogincheckGuard } from './logincheck.guard';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"Calc",component:CalcComponent},
  {path:"Sign Up",component:SignupComponent,canActivate:[LogincheckGuard]},
  {path:"listusers",component:ListUserComponent,canActivate:[LogincheckGuard]},
  {path:"edituser/:email",component:EdituserComponent,canActivate:[LogincheckGuard]},
  {path:"addemployee",component:AddEmployeeComponent,canActivate:[LogincheckGuard]},
  {path:"listemployee",component:ListEmployeeComponent,canActivate:[LogincheckGuard]},
  {path:"editemployee/:id",component:EditEmployeeComponent,canActivate:[LogincheckGuard]},
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[LogincheckGuard]},
  {path:"logout",component:LogoutComponent},
  {path:"menu",component:MenuComponent,canActivate:[LogincheckGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
