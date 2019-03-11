import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otro-componente',
  template: `
    <p>
      otro-componente works!
    </p>
  `,
  styles: [
    `p {
      color:blue;
    }`]
})
export class OtroComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
