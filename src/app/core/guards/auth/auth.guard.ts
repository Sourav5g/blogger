import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,

  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
     // let googleUser = localStorage.getItem('googleToken');
      let currentUser = localStorage.getItem('num');
      //console.log('googleToken', googleUser);
      if (currentUser != null ) {
        //this.router.navigate(['/dashboard']);
        return true;
      }
      this.router.navigate(['/']);
      return false;

    }
  
  
}
