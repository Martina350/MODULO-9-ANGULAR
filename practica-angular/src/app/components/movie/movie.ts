import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie {
  ngOnInit() {
    console.log('Movie component initialized');
  }
  ngOnDestroy() {
    console.log('Movie component destroyed');
  }
}
