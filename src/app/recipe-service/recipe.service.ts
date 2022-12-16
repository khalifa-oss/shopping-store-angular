import {EventEmitter, Injectable, Output} from '@angular/core';
import {Recipe} from "../model/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 recipeSelectOn = new EventEmitter<Recipe>();
  recipes:Recipe[]= [new Recipe('fish recipe','just is a simple test','https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540'
    ,[{name:"fish",amount:1},{name:"oil",amount:0.5}]),
    new Recipe('Recipe Potatoes','It s  a delicious recipe','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg'
      ,[{name:"potatoes",amount:4},{name:"cheese",amount:2}])];
  constructor() { }
  getRecipe(){
    return this.recipes;
  }
  getRecipeById( id :number){
    return this.recipes[id];
  }

  getRecipeByName(name: string | undefined){
    return(this.recipes.find(obj=>
      obj.name===name)
    )
  }
}
