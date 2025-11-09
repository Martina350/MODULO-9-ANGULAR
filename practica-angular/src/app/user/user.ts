import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  web = "https://amazon.com";
  redirect = true;

  changeRedirect() {
    if (this.redirect == false) {
      this.redirect = true;
    }else {
      this.redirect = false;
    }
  }
}
