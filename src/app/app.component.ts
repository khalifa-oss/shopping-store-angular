import {Component, OnInit} from '@angular/core';
import {Recipe} from "./model/recipe";
import {RecipeService} from "./recipe-service/recipe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-store-angular';
  choiceNav='recipes'
  // recipes:Recipe[]=[];
  constructor(private recipeService:RecipeService) {
  }
  ngOnInit() {
    // this.recipes=this.recipeService.getRecipe();
  }

 //  choiceRecipe(varSelected:string) {
 //    this.choiceNav=varSelected;
 //
 // }
}
