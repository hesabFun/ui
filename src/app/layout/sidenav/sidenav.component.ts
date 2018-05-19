import { Component, OnInit } from '@angular/core';
// import { NavigationStart, Router } from '@angular/router';
// import { SidenavService } from './slidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    //           private router: Router,
    //           private sidenavService: SidenavService
  ) {
  }

  menu = [
    {name: 'صفحه یک', link: 'page1'},
    {name: 'صفحه دو', link: 'page2'},
  ];

  ngOnInit() {
    // this.router.events
    //   .subscribe(event => {
    //     if (event instanceof NavigationStart) {
    //       this.sidenavService.close().then(() => {
    //       });
    //     }
    //   });
  }
}
