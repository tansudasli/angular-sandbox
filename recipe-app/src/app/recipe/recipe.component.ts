import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from './recipe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeSubscription: Subscription;

  constructor(public rs: RecipeService) {
    this.recipeSubscription = rs.recipeSelected.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    console.log('selectedRecipe cleaned !!');

    this.recipeSubscription.unsubscribe();
  }

}
