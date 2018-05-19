import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable ,  Observer } from 'rxjs';

import { UsersService } from "../../shared/services/users.service";

/**
 * This class implements a guard for routes that require that user is not authenticated.
 */
@Injectable()
export class AnonymousGuard implements CanActivate {
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
   * Purpose of this guard is check that current user has not been authenticated to application. If user is
   * authenticated he/she is redirected to profile page.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {Observable<boolean>}
   */
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      if (!this.userService.profile()) {
        observer.next(true);
        observer.complete();
      } else {
        this.router
          .navigate(['auth/profile'])
          .then(() => {
            observer.complete();
          });

        observer.next(false);
      }
    });
  }
}
