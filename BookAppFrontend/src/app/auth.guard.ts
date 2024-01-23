// import { CanActivateFn } from '@angular/router';
// import { UserService } from './services/user.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   constructor(private userService: UserService, private router: Router) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if (localStorage.getItem('user')) {
//         return true;
//       }
//       console.log('this.sellerService.isSellerLoggedIn');
//       return this.router.createUrlTree(['']);
//   }
// };


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('username')) {
        return true;
      }
      return this.router.createUrlTree(['']);
  }
  
}