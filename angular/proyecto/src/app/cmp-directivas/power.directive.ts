import { Directive, ElementRef, Input, HostBinding, HostListener } from '@angular/core';
import { fillProperties } from '@angular/core/src/util/property';

@Directive({
  selector: '[appPower]'
})
export class PowerDirective {

  constructor(private elemRef: ElementRef) { 
    
  }
  ngOnInit(){
    this.color = this.color ? this.color : '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  }

  @Input('appMarcar') color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

  @HostBinding('style.backgroundColor') colorFondo;
  @HostBinding('style.animation') animation;
  @HostBinding('style.animation-fill-mode') fill;
  skills:string[] = [""];
  @HostListener('keypress') power() {
    this.colorFondo = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    this.animation = "shake 0.5s";
    this.fill = "none";
  }



}
