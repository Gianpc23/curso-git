import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tareas: string[] = [];
  constructor(private todoService: TodoService,private formBuilder: FormBuilder) { }
  miForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.miForm = this.formBuilder.group({
      tarea: this.formBuilder.control('')
    });
  }
  addTarea(tareaNueva: string): void {
    this.todoService.addTarea(tareaNueva);
    this.initForm();
  }
  deleteTarea(tareaNueva: string): void {
    this.todoService.deleteTarea(tareaNueva);
  }
  prueba(event: any) {
    if (event.target.checked)
      event.target.parentNode.style.textDecoration = 'line-through';
    else
      event.target.parentNode.style.textDecoration = '';
    console.log(event);
  }
}
