import { Component, OnInit } from '@angular/core';
import { IMovie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie;
  id: string;
  favourite: boolean;
  favouriteText: string;
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    const param = this.route.snapshot.params.id;
    this.id = param;
    this.favourite = sessionStorage.hasOwnProperty(this.id) ? true : false;
    this.favouriteText = this.favourite ? 'Remove From Favourite' : 'Add To Favourite';

    if (param) {
      const id = +param; // '+' converts string to num
      this.getMovie(id);
    }
  }
  getMovie(id: number): void {
    this.movieService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
    });
  }
  onBack(): void {
    this.router.navigate(['/movies']);
  }
  addToFavourite(id: number): void {
    const idString = id.toString();
    if (sessionStorage.hasOwnProperty(idString)) {
      sessionStorage.removeItem(idString);
    } else {
      sessionStorage.setItem(idString, idString);
    }
    this.favourite = sessionStorage.hasOwnProperty(this.id) ? true : false;
    this.favouriteText = this.favourite ? 'Remove from Favourite' : 'Add To Favourite';
  }

}
