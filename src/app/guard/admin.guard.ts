import { AuthService } from './../auth.service';
import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';

export class  adminGuard implements CanActivateChild{
  constructor( ) {
  }

  canActivateChild(){
    // return true;
    window.alert("login to see product");
    return false;


    }
  }
