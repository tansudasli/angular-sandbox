
export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: string[];

  constructor(name: string, description: string, imagePath: string, ingredients?: string[] ) {
      this.name = name;
      this.description = description;
      this.imagePath = imagePath;
      this.ingredients = ingredients;
  }
}
