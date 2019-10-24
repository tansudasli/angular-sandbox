import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'nav', component: NavComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: '', redirectTo: 'index', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
