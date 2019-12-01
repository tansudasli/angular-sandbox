import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  private selectedRecipe: Recipe;
  private recipeSubscription: Subscription;

  constructor(public rs: RecipeService) {

    this.recipeSubscription = rs.recipeSelected.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  ngOnInit() { }

  // TODO: selectedRecipe should be cleared on destroy and newRecipe btn
  ngOnDestroy(): void {
    console.log('selectedRecipe cleaned !!');

    this.recipeSubscription.unsubscribe();
  }

}
