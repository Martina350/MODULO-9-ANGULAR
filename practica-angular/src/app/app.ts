import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from './product/product';
import {ProfileComponent} from './profile/profile';
import { User } from './user/user';
import { Loans } from './loans/loans';
import { ChangeAsciiPipe } from './pipes/changeAscii';
import { Sales } from './sales/sales';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sales, ChangeAsciiPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('coder');
}
