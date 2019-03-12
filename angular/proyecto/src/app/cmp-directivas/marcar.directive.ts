import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {



  constructor(private elemRef: ElementRef) {
    //elemRef.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(){
    this.color = this.color ? this.color : "blue";
  }
  @Input('appMarcar') color = "blue";
  @HostBinding('style.backgroundColor') colorFondo;
  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.color;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = "";
  }



}
