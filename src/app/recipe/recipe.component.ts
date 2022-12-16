import {Component, OnInit} from "@angular/core";
import {Recipe} from "../model/recipe";
import {RecipeService} from "../recipe-service/recipe.service";
import {error} from "@angular/compiler/src/util";



@Component({
  selector:'app-recipe',
  templateUrl:'./recipe.component.html',
  styleUrls: ['./recipe.component.css']
})




export class RecipeComponent implements OnInit {

  recipeElement: Recipe | undefined;
  // catchValue:string='';
  // listOfValue:string[]=['khalifa','ridha','ayham','sayeb'];



  constructor(private recipeService:RecipeService){

  }

  ngOnInit(): void {
    this.recipeService.recipeSelectOn.subscribe((recipe:Recipe)=>this.recipeElement=recipe)
  }


  // display(test: string) {
  //   this.catchValue=test;
  //   console.log(this.catchValue);
  //
  // }
}
