import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('scrambled egg', 'made w/ eggs', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1201452_12.jpg?itok=sEzruvF_'),
    // tslint:disable-next-line:max-line-length
    new Recipe('scrambled egg - traditional', 'made w/ eggs', 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('scrambled eggs w/ succuk', 'made w/ eggs', 'http://www.pinar.co.uk/wp-content/uploads/2018/04/Ozlem_Shot_38_0338_-1.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('just boiled eggs', 'made w/ eggs', 'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('menemen - turkish style', 'made w/ eggs and bacon', 'https://www.seriouseats.com/images/2014/09/20140923-menemen-recipe-14.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
      console.log(recipe);

      this.recipeSelected.emit(recipe);

  }

}
