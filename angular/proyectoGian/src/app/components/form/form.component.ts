import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() title: string = "";
  @Input() inputs: string[] = [];
  @Input() buttons: string[] = [];
  nameValueInputs = [];

  constructor() { }

  ngOnInit() {
    this.inputs.forEach(item => {
      this.nameValueInputs.push({
        inputName: item,
        value: ''
      });
    });
    console.log(this.nameValueInputs);
  }

}
