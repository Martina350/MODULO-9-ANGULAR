import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  imports: [CommonModule],
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

  changeRedirect() {
    if (this.redirect == false) {
      this.redirect = true;
    } else {
      this.redirect = false;
    }
  }
}
