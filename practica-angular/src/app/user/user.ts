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
  carBrands = [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Ford' },
    { id: 3, name: 'Chevrolet' },
    { id: 4, name: 'Honda' },
    { id: 5, name: 'Nissan' }
  ];

  ngOnInit() {
    this.carBrands = [];
  }

  changeRedirect() {
    if (this.redirect == false) {
      this.redirect = true;
    } else {
      this.redirect = false;
    }
  }
}
