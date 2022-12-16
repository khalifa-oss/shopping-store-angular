import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector:'[appDropDown]'
})


export class DropdownDirective implements OnInit {
  @HostBinding('data-bs-toggle') style: string | undefined;
  isOpen=false;

  constructor(private ref:ElementRef, private  renderer:Renderer2) {
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.ref.)

  }
  @HostListener('click') toggleOpen(){
    this.style='dropdown'
    this.isOpen=!this.isOpen;
  }

}
