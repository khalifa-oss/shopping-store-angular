import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from "../../model/recipe";
import {RecipeService} from "../../recipe-service/recipe.service";
import {ShoppingService} from "../../shopping-service/shopping.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  // @Input() recipeTestDetail ={} as  Recipe ;


  recipeDetail = {} as Recipe;
  paramSubscribe: Subscription | undefined
  @Input() index: number = 0;

  constructor(private shoppingService: ShoppingService, private route: ActivatedRoute, private recipeService: RecipeService,
              private router :Router) {
  }

  ngOnInit(): void {
// @ts-ignore
    this.paramSubscribe = this.route.params.subscribe((data) => {
     this.index = +data['id'];
      // @ts-ignore
      this.recipeDetail = this.recipeService.getRecipeById(this.index)
    });
    // @ts-ignore

  }


  addToSoppingList() {

    // @ts-ignore
    this.shoppingService.addIngredients(this.recipeDetail.ingredients)
    this.shoppingService.alertMessage();


  }

  ngOnDestroy(): void {
    this.paramSubscribe?.unsubscribe();
  }

  onEditRecipe() {
    // this .router.navigate(['edit'],{relativeTo:this.route});
    this .router.navigate(['/recipe',this.index,'edit'],{relativeTo:this.route});

  }

}
