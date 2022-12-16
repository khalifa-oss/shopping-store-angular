import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../model/recipe";
import {RecipeService} from "../../recipe-service/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  // @Output() isTrueDisplay=new EventEmitter<Recipe>();


  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();

  }

  // displayDetail(recipe:Recipe) {
  //  this.isTrueDisplay.emit(recipe);
  // console.log(recipe.name+"=================================")
  // console.log("0000000000000000"+this.isTrueDisplay)
  // }
  onEditNewRecipe() {
    this.router.navigate(['/recipe/new'], {relativeTo: this.route});
    //it is the same
    // this.router.navigate(['new'],{relativeTo:this.route});

  }


}
