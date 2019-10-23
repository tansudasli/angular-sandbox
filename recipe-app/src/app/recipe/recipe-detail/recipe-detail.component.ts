import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  selectedId: number;

  constructor(public rs: RecipeService,
              public route: ActivatedRoute) {

    // 1- at first load by router, then always cause we use route.navigate
    this.route.params.subscribe((params: Params) => {
      this.selectedId = params.id;

      console.log(`loaded from router: ${this.selectedId}`);

      this.selectedRecipe = this.rs.getRecipe(this.selectedId);
    });

    // 2- at first selection of recipe it is empty, then runs on selected a recipe
    // rs.recipeSelected.subscribe((recipe) => {
    //   console.log(`loaded from recipeSelected event: ${recipe.name}`);
    //
    //   this.selectedRecipe = recipe;
    // });
  }

  ngOnInit() {
  }


}
