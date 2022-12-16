import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})


export class HeaderComponent {
  // @Output() clickOn = new EventEmitter<string>();

  constructor() {
  }

  // onSelect(choice: string) {
  //   this.clickOn.emit(choice)
  //   console.log(choice)
  // }
}
