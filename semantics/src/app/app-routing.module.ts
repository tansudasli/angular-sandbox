import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  { path: '', component: AppComponent,  data: { title: 'Index' } },
  { path: 'nav', component: NavComponent,  data: { title: 'Navigator' }},
  // { path: '', redirectTo: 'index', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
