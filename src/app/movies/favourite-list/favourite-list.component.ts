import { Component, OnInit } from '@angular/core';
import { IMovie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  favourites: IMovie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.favourites = this.getFavourite();
  }
  getFavourite(): IMovie[] {
    // get favourites from session storage;
    const favouriteArray = Object.keys(sessionStorage);
    const favourites = [];
    favouriteArray.map((stringID) => {
      return this.movieService.getMovie(+stringID).subscribe((movie) =>
          favourites.push(movie)
        );
    });
    return favourites;
  }

}
