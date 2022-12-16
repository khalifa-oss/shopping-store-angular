import {BrowserModule} from "@angular/platform-browser";
import {NgbdDropdownBasic} from "./dropdown-basic";
import {NgModule} from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdDropdownBasic],
  exports: [NgbdDropdownBasic],
  bootstrap: [NgbdDropdownBasic]
})
export class NgbdDropdownBasicModule{}
