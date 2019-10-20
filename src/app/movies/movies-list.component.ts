import { Component, OnInit } from '@angular/core';
import { MovieService } from './shared/movie.service';
import { IMovie } from './shared/movie.model';

@Component({
  selector: 'app-movies-list',
  template: `
  <div>
    <h1 class="p-2">See all available Movies</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let movie of movies" class="col-md-5 m-4">
        <app-movie-thumbnail [movie]="movie"></app-movie-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies => {
      this.movies = movies;
      console.log(this.movies);
    }));
  }

}
