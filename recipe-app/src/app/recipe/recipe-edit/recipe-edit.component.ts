import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  selectedRecipe: Recipe;
  selectedId: number;

  editMode = false; // url can only be /recipe/create or /recipe/0/edit

  constructor(public rs: RecipeService,
              private route: ActivatedRoute) {

    route.params.subscribe((params: Params) => {
        this.editMode = params.id !== undefined;

        this.selectedId = params.id;
        this.selectedRecipe = this.rs.getRecipe(this.selectedId);

        console.log(params.id);
        console.log(`editMode: ${this.editMode}`);
    });

  }

  ngOnInit() {
  }

}
