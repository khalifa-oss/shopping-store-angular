import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {ShoppingService} from "../../shopping-service/shopping.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[];

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.shoppingService.shoppingAdded.subscribe((ingredients:Ingredient[])=>this.ingredients=ingredients)
    this.ingredients= this.shoppingService.getIngredient();

  }


  // saveIngredients(ingredient:Ingredient) {
  //    this.ingredients.push({name:ingredient.name,amount:ingredient.amount});
  //
  //
  // }
}
