import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate,CanActivateChild,CanLoad, Router, Route, UrlSegment, UrlTree, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  
  constructor(private jwtHelper : JwtHelperService, 
    private router: Router, private authservice: AuthService) {
      
     }

    canActivate(){
      const token = localStorage.getItem("jwt");
      const role = this.authservice.roleAs;

      if(token && !this.jwtHelper.isTokenExpired(token)){
       
        return true;
      }
      this.router.navigate(["login"]);
      return false;
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return true;
    }

    checkUserLogin(route:ActivatedRouteSnapshot, url:any):boolean{
      if(this.authservice.isLoggedIn()){
        const userRole = this.authservice.getRole();
        if(route.data.role && route.data.role.indexOf(userRole)===-1){
          this.router.navigate(['/home-consultant']);
          return false;
        }
        return true;
      }
      this.router.navigate(['/home-consultant']);
      return false;
    }




    
}
