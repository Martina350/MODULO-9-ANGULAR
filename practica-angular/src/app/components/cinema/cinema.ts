import { Component } from '@angular/core';
import { MovieModel } from '../../models/movies';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinema',
  imports: [FormsModule],
  templateUrl: './cinema.html',
  styleUrl: './cinema.css',
})
export class Cinema {
  public title: string;
  public moviesExample: Array<MovieModel>;
  
  // to work with forms and two-way binding
  public myMovieTitle: string = "";

  public moviesWithoutData: string[] = [];

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

  ngDoCheck() {
    console.log(this.myMovieTitle);
  }

  showMovieTitle() {
    alert(this.myMovieTitle);
  }

  addNewMovie() {
    //this.moviesWithoutData.push(this.myMovieTitle);
    let id = this.moviesExample[this.moviesExample.length - 1].id + 1;
    let newMovie = new MovieModel(id, this.myMovieTitle);
    console.log(newMovie);
    this.moviesExample.push(newMovie);
  }
}
