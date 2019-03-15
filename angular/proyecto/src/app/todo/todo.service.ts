import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tareas: string[] = ["tarea Aux"];
  constructor() { }

  addTarea(tareaNueva: string): void {
    this.tareas.push(tareaNueva);
  }
  deleteTarea(tareaNueva: string): void {
    console.log("tareaBorrar: " + tareaNueva);
    if (this.tareas.includes(tareaNueva)) {
      this.tareas.splice(this.tareas.indexOf(tareaNueva), 1);
    }
  }

}
