import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';

import { ProfileDataBackendInterface, TokenDataInterface } from "../../shared/services/interfaces";
import { ConfigService, MessageService } from '../../shared/services/';
import { UsersService } from '../../shared/services/users.service';

@Injectable()
export class AuthService {
  /**
   * Constructor of the class.
   *
   * @param {Http}            http
   * @param {AuthHttp}        authHttp
   * @param {Router}          router
   * @param {UsersService}     userService
   * @param {MessageService}  messageService
   * @param {ConfigService}   configService
   */
  public constructor(private http: Http,
                     private authHttp: AuthHttp,
                     private router: Router,
                     private userService: UsersService,
                     // private usersService: UsersService,
                     private messageService: MessageService,
                     private configService: ConfigService) {
  }

  /**
   * Method to make login request to backend with given credentials.
   *
   * @param credentials
   * @returns {Observable<TokenDataInterface>}
   */
  public login(credentials): Observable<TokenDataInterface> {
    return this.http
      .post(`${this.configService.getApiUrl()}v1/auth/login`, credentials)
      .map((res) => res.json())
      .catch((error: any) => throwError(error.json() || 'Invalid credentials'))
      ;
  }

  /**
   * Method to logout current user
   *
   * @returns {Promise<boolean>}
   */
  public logout() {
    this.userService.erase();

    this.messageService.simple('Logged out successfully');

    return this.router.navigate(['auth/login']);
  }

  /**
   * Method to fetch user profile data from backend.
   *
   * @returns {Observable<ProfileDataBackendInterface>}
   */
  public profile(): Observable<ProfileDataBackendInterface> {
    return this.authHttp
      .get(`${this.configService.getApiUrl()}v1/auth/profile`)
      .map((res) => res.json())
      .catch((error: any) => {
        this.logout();

        return throwError(error.json().message || 'Invalid credentials');
      })
      ;
  }
}
