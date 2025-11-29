import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MisTareas } from '../mis-tareas/mis-tareas';

@Component({
  selector: 'app-nueva-tarea',
  imports: [FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea {
  materia: string = '';
  descripcion: string = '';

  addTarea(){
    if(this.materia=='' || this.descripcion==''){
      alert('Los campos estan vacios')
    }
    else{
      console.log("Tarea Creada con los datos: Titulo: " + this.materia + " Descripcion: " + this.descripcion)
    }
  }
}