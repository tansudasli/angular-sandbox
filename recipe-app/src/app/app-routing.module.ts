import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';

const appRoutes: Routes = [
  { path: 'recipe', component: RecipeComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: '',   redirectTo: '/recipe', pathMatch: 'full' },  // at fist load
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
