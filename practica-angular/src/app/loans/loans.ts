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

  changeRedirect() {
    if (this.redirect == false) {
      this.redirect = true;
    } else {
      this.redirect = false;
    }
  }
}
