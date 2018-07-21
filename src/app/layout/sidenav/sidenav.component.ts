import { Component, OnInit } from '@angular/core';
import { throwError } from "rxjs/index";
import { AuthHttp } from 'angular2-jwt';
import { ConfigService } from "../../shared/services";
import { Observable } from "rxjs/Rx";
import { MenuDataInterface } from "./interfaces/menu-data.interface";
// import { NavigationStart, Router } from '@angular/router';
// import { SidenavService } from './slidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private authHttp: AuthHttp,
              private configService: ConfigService,
              //           private router: Router,
              //           private sidenavService: SidenavService
  ) {
  }

  // let menu: Observable[MenuDataInterface];

  ngOnInit() {
    // this.router.events
    //   .subscribe(event => {
    //     if (event instanceof NavigationStart) {
    //       this.sidenavService.close().then(() => {
    //       });
    //     }
    //   });

    // var menu Observable[MenuDataInterface];


  }

  ngAfterContentInit() {
    let menu: Observable<MenuDataInterface[]>;

    menu = this.getMenu();
  }


  public getMenu(): Observable<MenuDataInterface[]> {
    return this.authHttp
      .get(`${this.configService.getApiUrl()}v1/companies/1/menu`)
      .map((response) => response.json())
      .catch((error: any) => {
        console.log("err get menu");
        return throwError(error.json().message || 'Invalid credentials');
      })
      ;
  }
}
