import { Component } from '@angular/core';
import { Movie } from '../movie/movie';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sales',
  imports: [Movie, NgClass],
  templateUrl: './sales.html',
  styleUrls: ['./sales.css'],
})
export class Sales {
  public painting: boolean = false;

  public show: string = 'Yes';

  public hello: string = 'Hello Angular';
}
