import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import {Ingredient} from '../../ingredient.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public rs: RecipeService) { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe) {
      console.log(recipe);

      this.rs.recipeSelected.emit(recipe);
  }

}
