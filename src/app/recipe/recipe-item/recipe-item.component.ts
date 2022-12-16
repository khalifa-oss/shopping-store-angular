import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../model/recipe";
import {RecipeService} from "../../recipe-service/recipe.service";
import {ActivatedRoute, Routes} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeTest = {} as Recipe;
  @Input() index: number = 0;


  constructor(private recipeService: RecipeService, private routes: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.recipeTest.name=this.routes.snapshot.params['nameRecipe'];

  }

  onselect() {
    this.recipeService.recipeSelectOn.emit(this.recipeTest)
    // this.selectOn.emit();

  }
}
