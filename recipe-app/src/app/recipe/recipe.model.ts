import {Ingredient} from '../ingredient.model';

export class Recipe {

  // public name means -> creates this.name = name automatically!
  constructor(public name: string,
              public description: string,
              public imagePath: string,
              public ingredients?: Ingredient[] ) {

  }
}
