import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [RecipeComponent, RecipeDetailComponent],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { }
