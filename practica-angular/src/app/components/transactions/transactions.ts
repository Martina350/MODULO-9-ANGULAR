import { Component } from '@angular/core';
import { TransactionModel } from '../../models/transaction';
import { DatePipe } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [DatePipe, NgClass],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions {
  public transactionsList: Array<TransactionModel>;

  constructor() {
    this.transactionsList = [
      new TransactionModel(1, new Date('2024-01-15'), 'Monthly Salary', 3000, 'income'),
      new TransactionModel(2, new Date('2024-01-16'), 'Supermarket Purchase', 150.50, 'expense'),
      new TransactionModel(3, new Date('2024-01-17'), 'Freelance Web Project', 800, 'income'),
      new TransactionModel(4, new Date('2024-01-18'), 'Utility Payment', 200, 'expense'),
      new TransactionModel(5, new Date('2024-01-19'), 'Product Sale', 450.75, 'income'),
      new TransactionModel(6, new Date('2024-01-20'), 'Restaurant', 85.25, 'expense')
    ];
  }
}
