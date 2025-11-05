import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from './product/product';
import {ProfileComponent} from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, ProfileComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('coder');
}
