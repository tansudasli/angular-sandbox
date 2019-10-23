import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { EmptyRecipeComponent } from './recipe/empty-recipe/empty-recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

/**
 * Sequencing is always important in root & child routes.
 */
const appRoutes: Routes = [
  { path: 'recipe', component: RecipeComponent, children: [
      {path: '', component: EmptyRecipeComponent},
      {path: 'create', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent},
    ] },
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
