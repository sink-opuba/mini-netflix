import { Component, OnInit, Input, ChangeDetectorRef, DoCheck } from '@angular/core';
import { MovieService } from './shared/movie.service';
import { IMovie } from './shared/movie.model';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit, DoCheck {

  constructor(private movieService: MovieService, private cdr: ChangeDetectorRef) {}
  searchInput: any;
  movies: IMovie[];
  filteredMovies: IMovie[];

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies => {
      this.movies = movies;
      this.setFilteredMovies();
    }));
  }

  performSearch(searchValue: string): IMovie[] {
    searchValue = searchValue.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.title.toLocaleLowerCase().indexOf(searchValue) !== -1);
  }

  setFilteredMovies(): void {
    // Use entered search value to filtered available movies for display
    this.filteredMovies = this.searchInput
      ? this.performSearch(this.searchInput)
      : this.movies;
  }

  ngDoCheck() {
    // subscribe to emitted changes from subject created in movieService
    this.movieService.searchButtonClickEventTrack.subscribe(value => {
      this.searchInput = value;

      // initiate change detection in angular
      this.cdr.detectChanges();
      // display filtered values matching search input
      this.setFilteredMovies();
    });
  }
}
