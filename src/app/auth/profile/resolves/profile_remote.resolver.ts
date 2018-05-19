import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/';
import { ProfileDataBackendInterface } from "../../../shared/services/interfaces";

@Injectable()
export class ProfileRemoteResolver implements Resolve<any> {
  /**
   * Constructor of the class.
   *
   * @param {AuthService} authService
   */
  public constructor(private authService: AuthService) {
  }

  /**
   * Resolve method to fetch current user profile data from remote server.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   *
   * @returns {Observable<ProfileDataBackendInterface>}
   */
  public resolve(route: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot): Observable<ProfileDataBackendInterface> {
    return this.authService.profile();
  }
}
