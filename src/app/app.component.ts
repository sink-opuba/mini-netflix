import { Component } from '@angular/core';
import { MovieService } from './movies/shared/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini-netflix';
  searchInput: string;
  constructor(private movieService: MovieService) {}

  getSearchValue(event): string {
    if (this.searchInput === undefined || '') {
      return;
    }
    // Emit a new value to movieService to create an observable stream
    this.movieService.searchButtonClickEventTrack.next(this.searchInput);
  }
}
