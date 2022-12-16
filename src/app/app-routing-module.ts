import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";

import {RecipeComponent} from "./recipe/recipe.component";
import {ShoppingListComponent} from "./shopping/shopping-list/shopping-list.component";
import {AppComponent} from "./app.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo:'/recipe',pathMatch:'full'},
  {
    path: 'recipe', component: RecipeComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {path: 'shoppingList', component: ShoppingListComponent},

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  }
)

export class AppRoutingModule {


}
