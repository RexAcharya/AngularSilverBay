import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastrModule} from 'ngx-toastr';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterSuperAdminComponent } from './register-super-admin/register-super-admin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeConsultantComponent } from './home-consultant/home-consultant.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeSuperAdminComponent } from './home-super-admin/home-super-admin.component';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAdminComponent,
    RegisterSuperAdminComponent,
   
    HomeConsultantComponent,
    HomeAdminComponent,
    HomeSuperAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'register', component:RegisterComponent},
      {path:'login', component:LoginComponent},
      {path:'register-admin',component:RegisterAdminComponent},
      {path:'register-superadmin', component:RegisterSuperAdminComponent}

    ]),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:18351"],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
