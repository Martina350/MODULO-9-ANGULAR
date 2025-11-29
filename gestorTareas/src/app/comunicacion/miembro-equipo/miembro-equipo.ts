import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-miembro-equipo',
  imports: [],
  templateUrl: './miembro-equipo.html',
  styleUrl: './miembro-equipo.css',
})
export class MiembroEquipo {
  @Input() contador: number = 0;
  @Output() incrementar = new EventEmitter<void>();

  notificarIncremento(): void {
    this.incrementar.emit();
  }
}
