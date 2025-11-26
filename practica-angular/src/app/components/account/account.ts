import { Component } from '@angular/core';
import { ClientModel } from '../../models/client';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {
  public client: ClientModel;

  constructor() {
    this.client = new ClientModel(
      1,
      'Kenny',
      'Mccormick',
      'kenny.mccormick@example.com',
      '1500.00'
    );
  }
}
