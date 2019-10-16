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
    new Recipe('menemen - turkish style', 'made w/ eggs and bacon', 'https://www.seriouseats.com/images/2014/09/20140923-menemen-recipe-14.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('panncake - vegi', 'pancake made w/ vegetables', 'https://www.superhealthykids.com/wp-content/uploads/uploads/files/10735/large/Veggie%20Pancakes%20for%20Kids.png'),
    // tslint:disable-next-line:max-line-length
    new Recipe('shredded salad - vegi', 'zucchini filled with immune fighting Vitamin C made w/ vegetables', 'https://www.superhealthykids.com/wp-content/uploads/uploads/files/10730/large/shredded%20zucchini.png'),
    // tslint:disable-next-line:max-line-length
    new Recipe('shredded carrot - vegi', 'shredded finely carrots w/ vegetables', 'https://www.superhealthykids.com/wp-content/uploads/uploads/files/10731/large/shredded%20carrots.png'),
    new Recipe('corn',
           'corn that includes energizing Vitamin B',
           'https://www.superhealthykids.com/wp-content/uploads/uploads/files/10732/large/corn.png',
          ['2 cup zucchini', '2 cup grated carrot', '1 cup corn, canned',
                     '1 large egg', '1/8 cup yogurt, plain', '1/2 teaspoon salt',
                     '1/8 teaspoon black pepper, ground', '1/2 cup flour, whole wheat', '1/2 cup cornmeal, yellow',
                     '2 teaspoon baking powder', '1/2 cup cheddar cheese, shredded', '1 tablespoon olive oil'])

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
      console.log(recipe);

      this.recipeSelected.emit(recipe);

  }

}
