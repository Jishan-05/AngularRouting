import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  get isUserloggedin(){
    return false;
    // return true;
  }

}
