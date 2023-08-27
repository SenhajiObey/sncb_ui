import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {MapsComponent} from "../components/maps/maps.component";
import {GraphsComponent} from "../components/graphs/graphs.component";

const routes: Routes = [{ path: 'home', component: HomeComponent },
  { path: 'maps', component: MapsComponent },{ path: 'graphs', component: GraphsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
