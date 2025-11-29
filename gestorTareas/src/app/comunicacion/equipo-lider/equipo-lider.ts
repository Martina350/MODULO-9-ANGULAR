import { Component } from '@angular/core';
import { MiembroEquipo } from '../miembro-equipo/miembro-equipo';

@Component({
  selector: 'app-equipo-lider',
  imports: [MiembroEquipo],
  templateUrl: './equipo-lider.html',
  styleUrl: './equipo-lider.css',
})
export class EquipoLider {
  contador: number = 0;
  mensaje: string = 'Contador de acciones del miembro del equipo';

  onIncrementarDesdeHijo(): void {
    this.contador++;
  }
}
