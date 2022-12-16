import {Ingredient} from "./ingredient";

export class Recipe{
  public name: string | undefined;
  public description: string | undefined;
  public imagePath: string | undefined;
  ingredients:Ingredient[] |undefined
  constructor(name: string | undefined, description: string | undefined, imagePath: string | undefined,ingredients:Ingredient[]) {
    this.description=description;
    this.name=name;
    this.imagePath=imagePath;
    this.ingredients=ingredients;
  }
}
