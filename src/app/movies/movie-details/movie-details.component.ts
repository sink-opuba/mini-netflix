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
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    const param = this.route.snapshot.params.id;
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
  addToFavourite(): void {
    return;
  }

}
