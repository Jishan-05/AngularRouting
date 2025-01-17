import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
// import { CanComponentDeactivate } from './can-deactivate.guard.interface';


export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}


@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}



