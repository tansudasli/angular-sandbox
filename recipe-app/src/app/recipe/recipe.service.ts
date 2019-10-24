import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../ingredient.model';
import {Subject} from 'rxjs';

/**
 * data
 * event
 *   subscribe to event to get selected one
 */
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // we can subscribe this to get selected recipe. it is an observable !
  // EventEmitter replaced w/ Subject - a better way
  recipeSelected = new Subject<Recipe>();

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
      [ new Ingredient('cup zucchini', '2'),
        new Ingredient('cup grated carrot', '2'),
        new Ingredient('cup corn, canned', '1'),
        new Ingredient('large egg', '1'),
        new Ingredient('cup yogurt, plain', '1/8'),
        new Ingredient('teaspoon salt', '1/2'),
        new Ingredient('cup flour', '1/2'),
        new Ingredient('cup cornmeal, yellow', '1/2'),
        new Ingredient('teaspoon baking powder', '2'),
        new Ingredient('cup cheddar cheese, shredded', '1/2'),
        new Ingredient('tablespoon olive oil', '1'),
        new Ingredient('teaspoon black pepper, ground', '1/8')
      ])

  ];

  constructor() { }

  /**
   * gets Recipe by id
   *
   * @param id index++ number of recipes[]
   */
  getRecipe(id: number) {
    return this.recipes[id--];
  }

  getRecipeId(recipe: Recipe) {
    return this.recipes.findIndex((item) => {
      return recipe.name === item.name;
    });
  }
}
