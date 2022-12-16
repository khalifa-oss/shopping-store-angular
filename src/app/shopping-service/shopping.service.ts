import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../model/ingredient";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shoppingAdded=new EventEmitter<Ingredient[]>();
  ingredients:Ingredient[]=[new Ingredient('apples',8),new Ingredient('tomatoes',10)];


  constructor() { }

saveIngredients(ingredient:Ingredient)
{
  this.ingredients.push({name: ingredient.name, amount: ingredient.amount});
  this.shoppingAdded.emit(this.ingredients);

}
getIngredient(){
    return this.ingredients;
}
addIngredients(ingredientsAdded:Ingredient[]){
    this.ingredients.push(...ingredientsAdded);
    this.shoppingAdded.emit(this.ingredients);
}
alertMessage(){
    alert("It is ok these ingredients was added in the list of shopping");
}
}
