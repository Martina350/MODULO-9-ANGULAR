import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-son',
  imports: [],
  standalone: true,
  templateUrl: './son.html',
  styleUrls: ['./son.css'],
})
export class Son {
  nameSon: string = 'Son Component';

  @Input() fathersName: string = '';

  @Output() helloSonEvent = new EventEmitter();

  sendHello() {
    this.helloSonEvent.emit('Hello Father, I am your son!');
  }

}
