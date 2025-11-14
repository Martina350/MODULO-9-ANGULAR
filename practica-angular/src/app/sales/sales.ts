import { Component } from '@angular/core';
import { Movie } from '../movie/movie';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-sales',
  imports: [Movie, NgClass, NgStyle],
  templateUrl: './sales.html',
  styleUrls: ['./sales.css'],
})
export class Sales {
  public painting: boolean = false;

  public show: string = 'Yes';

  public hello: string = 'Hello Angular';

  myStyle = {
    'background-color': 'green',
    'padding': '6px',
    'font-weight': 'bold',
    'font-style': 'italic',
    'color': 'white'
  };

  stylesSp = {
    'background-color': 'red',
    'padding': '6px',
    'font-weight': 'bold',
    'font-style': 'italic',
    'color': 'white'
  };
}
