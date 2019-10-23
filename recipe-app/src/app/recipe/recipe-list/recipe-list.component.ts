import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import {Ingredient} from '../../ingredient.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public rs: RecipeService, public router: Router) { }

  ngOnInit() { }

  /**
   * Before Router => handling w/ events and getting selected recipe andt accessing it anywhere
   * and After Router => esp. for child component routing, angular needs to route and we have to get values from router (via URL)
   * So we add getRecipeId method in recipe.service.
   *
   * @param recipe Recipe
   */
  onRecipeSelected(recipe: Recipe) {
      console.log(recipe);
      console.log(`recipe id: ${this.rs.getRecipeId(recipe)}`);

      this.rs.recipeSelected.emit(recipe);
      this.router.navigate([`/recipe/${this.rs.getRecipeId(recipe)}`]);
  }

}
