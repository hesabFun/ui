import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
// import { UserService, ProfileDataJwtInterface } from '../../../services/';
import { UsersService } from "../../../shared/services/users.service";
import { ProfileDataJwtInterface } from "../../../shared/services/interfaces";

@Injectable()
export class ProfileLocalResolver implements Resolve<any> {
  /**
   * Constructor of the class.
   *
   * @param {UsersService} userService
   */
  public constructor(private userService: UsersService) {
  }

  /**
   * Resolve method to fetch current user profile data from local storage.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   *
   * @returns {ProfileDataJwtInterface}
   */
  public resolve(route: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot): ProfileDataJwtInterface {
    return this.userService.profile();
  }
}
