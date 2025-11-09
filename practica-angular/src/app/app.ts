import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from './product/product';
import {ProfileComponent} from './profile/profile';
import { User } from './user/user';
import { Loans } from './loans/loans';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Loans],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('coder');
}
