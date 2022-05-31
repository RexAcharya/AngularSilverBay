import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';
import { RegisterAdmin } from '../models/register-admin.model';
import { RegisterSuperAdmin } from '../models/register-super-admin.model';
@Injectable({
  providedIn: 'root'
})
export class SilverBayApiAppService {

  readonly authURL = "http://localhost:2832/api/Authentication";
  
  constructor(private http:HttpClient) { }

  loginData: Login = new Login();
  registerData: Register = new Register();
  registerAdminData: RegisterAdmin = new RegisterAdmin();
  registerSuperAdminData: RegisterSuperAdmin = new RegisterSuperAdmin();

  refreshList(){
    
  }
  loginUser(){
    return this.http.post(`${this.authURL}/login`, this.loginData,{
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    });
    }
    registerUser(){
      return this.http.post(`${this.authURL}/register`,this.registerData, {
        headers:new HttpHeaders({
          "Content-Type":"application/json"
        })
      });
    }

    registerAdminUser(){
      return this.http.post(`${this.authURL}/register-admin`,this.registerAdminData,{
        headers:new HttpHeaders({
          "Content-Type":"application/json"
        })
      });
    }

    registerSuperAdminUser(){
      return this.http.post(`${this.authURL}/register-superadmin`,this.registerSuperAdminData,{
        headers:new HttpHeaders({

          "Content-Type":"application/json"
        })
      });
    }
  

  
}
