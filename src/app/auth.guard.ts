import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService){

  }
  canActivate() {
    // logic
    // return false;
    if(this.authService.isUserloggedin){
      return true;
    }else{
      window.alert("You are not logged in");
      return false;

    }

  }


}

