import { CommonModule, LowerCasePipe, UpperCasePipe, DatePipe, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Transactions } from '../transactions/transactions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loans',
  imports: [CommonModule, Transactions, LowerCasePipe, UpperCasePipe, DatePipe, TitleCasePipe, CurrencyPipe, FormsModule],
  templateUrl: './loans.html',
  styleUrls: ['./loans.css'],
})
export class Loans {
  web = "https://youtube.com";
  redirect = true;
  loansList = [
    { id: 1, amount: 5000, state: 'approved' },
    { id: 2, amount: 10000, state: 'pending' },
    { id: 3, amount: 15000, state: 'approved' },
    { id: 4, amount: 20000, state: 'pending' },
    { id: 5, amount: 25000, state: 'pending' },
    { id: 6, amount: 30000, state: 'approved' }
  ];
  public myLoan: string = "";
  loansDate = new Date();

  loans = {
    id: 1,
    type: "hipotecary",
    interest: 15000,
  }

  changeRedirect() {
    if (this.redirect == false) {
      this.redirect = true;
    } else {
      this.redirect = false;
    }
  }

  removeLoan(index: number) {
    this.loansList.splice(index, 1);
  }
  addNewLoan() {
    let id = this.loansList.length > 0 ? this.loansList[this.loansList.length - 1].id + 1 : 1;
    let newLoan = { id: id, amount: parseFloat(this.myLoan), state: 'pending' };
    console.log(newLoan);
    this.loansList.push(newLoan);
  }
}
