import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UsersService } from '../services/users.service';
import { Observer } from 'rxjs/Observer';

/**
 * This class implements a guard for routes that require successful authentication.
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {
  /**
   * Constructor of the class.
   *
   * @param {UsersService} userService
   * @param {Router}      router
   */
  constructor(private userService: UsersService,
              private router: Router) {
  }

  /**
   * Purpose of this guard is check that current user has been authenticated to application. If user is not
   * authenticated he/she is redirected to login page.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {Observable<boolean>}
   */
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      if (this.userService.profile()) {
        observer.next(true);
        observer.complete();
      } else {
        this.router
          .navigate(['auth/login'])
          .then(() => {
            observer.complete();
          });

        observer.next(false);
      }
    });
  }
}
