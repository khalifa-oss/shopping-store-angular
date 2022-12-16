import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number = 0;
  isEdit: boolean = false;
  // @Output() isTrue = new EventEmitter<string>();
  // testVariable: string = '';
  // @Input() bindingTest: string ='' ;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
      this.isEdit = param['id'] ? true : false;
    });


  }


  // createEvent() {
  //   this.isTrue.emit(this.testVariable);
  //   console.log(this.isTrue)
  // }
}
