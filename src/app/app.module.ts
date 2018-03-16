import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/routing.module';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SidenavService } from './layout/sidenav/slidenav.service';
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [
    SidenavService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
