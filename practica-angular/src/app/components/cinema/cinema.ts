import { Component } from '@angular/core';
import { MovieModel } from '../../models/movies';

@Component({
  selector: 'app-cinema',
  imports: [],
  templateUrl: './cinema.html',
  styleUrl: './cinema.css',
})
export class Cinema {
  public title: string;
  public moviesExample: Array<MovieModel>;

  constructor() {
    this.title = 'My Movie Collection';
    this.moviesExample = [
      new MovieModel(1, 'Inception', 'Christopher Nolan', 2010, 'Sci-Fi', 'Netflix', true),
      new MovieModel(2, 'The Godfather', 'Francis Ford Coppola', 1972, 'Crime', 'Amazon Prime', false),
      new MovieModel(3, 'Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime', 'Hulu', true)
    ];
  }
  ngOnInit() {
    console.log(this.moviesExample);

    this.moviesExample[1].title = 'Shrek';
  }
}
