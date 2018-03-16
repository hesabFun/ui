import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Subject } from 'rxjs/Subject';

import { ProfileDataJwtInterface, TokenDataInterface } from './interfaces/';

@Injectable()
export class UsersService {

  /**
   * an stream that contains data of user
   */
  userData$: Subject<ProfileDataJwtInterface | boolean>;

  /**
   * Constructor of the class.
   *
   * @param {LocalStorageService} localStorage
   * @param {JwtHelper}           jwtHelper
   */
  constructor(private localStorage: LocalStorageService,
              private jwtHelper: JwtHelper) {
    this.userData$ = new Subject();
  }

  /**
   * Method to store JWT token data to local storage.
   *
   * @param {TokenDataInterface} data
   */
  public storeTokens(data: TokenDataInterface): void {
    this.localStorage.store('token', data.token);
    this.localStorage.store('refreshToken', data.refresh_token);
  }

  /**
   * Method to get current user profile data from JWT data.
   *
   * @returns {ProfileDataJwtInterface|boolean}
   */
  public profile(): ProfileDataJwtInterface {
    return (this.loggedIn()) ? this.jwtHelper.decodeToken(this.localStorage.retrieve('token')) : false;
  }

  /**
   * Method to check if current user is logged in or not.
   *
   * @returns {boolean}
   */
  public loggedIn(): boolean {
    return tokenNotExpired('token', this.localStorage.retrieve('token'));
  }

  /**
   * Method to erase data from local storage.
   */
  public erase(): void {
    this.localStorage.clear();
  }

  /**
   *  sets the next value of userData$
   * @param {ProfileDataJwtInterface | boolean} value
   */
  setUserData(value: ProfileDataJwtInterface | boolean) {
    this.userData$.next(value);
  }

  /**
   *  returns userData$ subject
   */
  getUserData(): Subject<ProfileDataJwtInterface | boolean> {
    return this.userData$;
  }
}
