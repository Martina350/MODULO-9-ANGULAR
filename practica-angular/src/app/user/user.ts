import { Component } from '@angular/core';
import { Sales } from '../sales/sales';
import { ProductComponent } from '../product/product';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeLetterPipe } from '../pipes/changeLetter';

@Component({
  selector: 'app-user',
  imports: [Sales, ProductComponent, UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, ChangeLetterPipe],
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

  user = {
    id: 1,
    name: "Kenny McCormick",
    nick: "Oh My God, They Killed Kenny!",
    role: "admin",
  };

  date = new Date(2030, 12, 25);

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
