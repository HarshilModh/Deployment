import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { SignupComponent } from './signup/signup.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EdituserComponent } from './edituser/edituser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    SignupComponent,
    ListUserComponent,
    EdituserComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,CalcComponent]
})
export class AppModule { }
