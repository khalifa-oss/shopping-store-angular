import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import {HeaderComponent} from "./header/header.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {NgbdDropdownBasic} from "./drop-down/dropdown-basic";
import {NgbdDropdownBasicModule} from "./drop-down/dropdown-basic.module";
import {DropdownDirective} from "./dropdown-directive/dropdown.directive";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing-module";
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent


  ],
    imports: [
        BrowserModule,
        NgbdDropdownBasicModule,
        // RouterModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
