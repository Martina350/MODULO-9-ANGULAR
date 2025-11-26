import { Component } from '@angular/core';
import { Son } from '../son/son';
@Component({
  selector: 'app-father',
  standalone: true,
  imports: [Son],
  templateUrl: './father.html',
  styleUrls: ['./father.css'],
})
export class Father {
  nameFather: string = 'Father Component';
  getHello: string = '';

  handleHelloSonEvent(hello: string) {
    this.getHello = hello;
  }
}

