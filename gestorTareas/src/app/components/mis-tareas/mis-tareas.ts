import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mis-tareas',
  imports: [NgStyle, FormsModule, NgClass],
  templateUrl: './mis-tareas.html',
  styleUrl: './mis-tareas.css',
})
export class MisTareas {
cambiar = true;

  materiaRapida: string = '';


  tareas = [
    { id: 1, titulo: 'Matematicas', descripcion: 'Fracciones', completada: true },
    { id: 2, titulo: 'Quimica Avanzada', descripcion: 'Hidrocarburos y Oxigenos', completada: false },
    { id: 3, titulo: 'Algebra', descripcion: 'Mattrices de Identidad', completada: false },
    { id: 4, titulo: 'Comunicacion', descripcion: 'Oraciones', completada: true },
    { id: 5, titulo: 'Biologia', descripcion: 'Ecosistemas', completada: false },
  ]

  cambiarEstado(id: number) {
    this.tareas = this.tareas.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completada: tarea.completada ? false : true,
        };
      }
      return tarea;
    });
  }

  addTareaRapida(){
    let identificador = this.tareas[this.tareas.length - 1].id + 1;
    let nuevaTareaRapida = {id: identificador, titulo: this.materiaRapida, descripcion: this.materiaRapida, completada: false};
    this.tareas.push(nuevaTareaRapida);
    alert("Se ha creado una nueva Tarea:" + nuevaTareaRapida.titulo)
    this.materiaRapida = '';
  }

  deleteTarea(indice: number) {
    this.tareas.splice(indice, 1);
  }

  haciendoFoco(){ 
    console.warn('Input Activo');
  }
  saliendoDelFoco(){
    console.warn('Input Inactivo');
  }
  inFocus(){
    console.log("input activo")
  }
  inBlur(){
    console.log("input inactivo")
  }
}
