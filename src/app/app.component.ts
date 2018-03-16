import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ng2-webstorage';
import { SidenavService } from './layout/sidenav/slidenav.service';
import { UsersService } from './shared/services/users.service';
import { Subscription } from 'rxjs/Subscription';
import { ProfileDataJwtInterface } from './shared/services/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  public user: any;

  userSubscription: Subscription;

  public constructor(private sidenavService: SidenavService,
                     private localStorage: LocalStorageService,
                     private translate: TranslateService,
                     private usersService: UsersService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('fa');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.localStorage.retrieve('language') || 'fa');
  }

  /**
   * OnInit life cycle hook
   */
  public ngOnInit(): void {

    this.userSubscription = this.usersService.getUserData().subscribe((data: ProfileDataJwtInterface | boolean) => {
      this.user = data;
    });

    this.user = this.usersService.profile();

    // Store sidenav to service
    this.sidenavService
      .setSidenav(this.sidenav);
  }
}
