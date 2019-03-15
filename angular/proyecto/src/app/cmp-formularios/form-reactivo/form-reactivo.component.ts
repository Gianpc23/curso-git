import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {
  miForm: FormGroup;
  nombres = ['tony', 'arya', 'rickon', 'bran', 'sansa', 'robb'];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.miForm = this.formBuilder.group({
      usuario: this.formBuilder.control('Gian', [Validators.required,
      this.esStark(this.nombres)]),
      password: this.formBuilder.control('', [Validators.required,
      Validators.minLength(5)]),
      email: this.formBuilder.control('', Validators.required),
      skills: new FormArray([
        this.formBuilder.control('React'),
        this.formBuilder.control('Angular')])
    });
  }

  enviarDatoS(): void {
    console.log(this.miForm);
  }
  addSkills(skill: string) {
    (<FormArray>this.miForm.controls.skills).push(this.formBuilder.control(skill, Validators.required));
  }
  esStark(nombres: Array<String>) {
    return (formControl: FormControl) => {
      if (nombres.includes(formControl.value.toLowerCase())) {
        //Valido
        return null;
      }
      //Invalido
      return { esStark: `El valor introducido no esta entre ${nombres.join(', ')}` };
    }
  }
  // esStark(formControl: FormControl) {
  //   const nombres = ['tony', 'arya', 'rickon', 'bran', 'sansa', 'robb'];
  //   if (nombres.includes(formControl.value.toLowerCase())) {
  //     //Valido
  //     return null;
  //   }
  //   //Invalido
  //   return { esStark: `El valor introducido no esta entre ${nombres.join(', ')}`};
  // }
}
