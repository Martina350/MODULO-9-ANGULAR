import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from './components/product/product';
import {ProfileComponent} from './components/profile/profile';
import { User } from './components/user/user';
import { Loans } from './components/loans/loans';
import { ChangeAsciiPipe } from './pipes/changeAscii';
import { Sales } from './components/sales/sales';
import { config } from './models/config';
import { MovieModel } from './models/movies';
import { Cinema } from './components/cinema/cinema';
import { Transactions } from './components/transactions/transactions';
import { Account } from './components/account/account';
import { Father } from './components/father/father';
import { Son } from './components/son/son';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sales, ChangeAsciiPipe, Cinema, Transactions, Account, Loans, Father, Son, ProfileComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('coder');

  titleApp = config.title;
  descriptionApp = config.description

}
