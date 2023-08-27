import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "./router/router.module";
import { HomeComponent } from './components/home/home.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { MapsComponent } from './components/maps/maps.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphsComponent,
    MapsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgbModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
