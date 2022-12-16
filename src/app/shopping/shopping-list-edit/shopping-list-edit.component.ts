import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {ShoppingService} from "../../shopping-service/shopping.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
ingredients:Ingredient[]=[];
@ViewChild('inputName') inputNameRef: ElementRef | undefined
@ViewChild('inputAmount') inputAmountRef: ElementRef | undefined
@Output() eventAddOn=new EventEmitter<Ingredient>();
constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    const inputName=this.inputNameRef?.nativeElement.value;
    const inputAmount=this.inputAmountRef?.nativeElement.value;
    const inputIngredient= new Ingredient(inputName,inputAmount);
    // this.eventAddOn.emit(inputIngredient);
    this.shoppingService.saveIngredients(inputIngredient);

  }
  getIngredient(){
   this.shoppingService.getIngredient();
  }
}
