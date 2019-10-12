import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {AppModule} from '../app.module';



@NgModule({
  declarations: [RecipeComponent, RecipeDetailComponent, RecipeListComponent],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class RecipeModule { }
