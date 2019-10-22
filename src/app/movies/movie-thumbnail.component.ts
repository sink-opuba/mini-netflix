import { Component, Input } from '@angular/core';
import { IMovie } from './shared/movie.model';

@Component({
  selector: 'app-movie-thumbnail',
  template: `
  <div class="movie-container">
    <div class="row" [routerLink]="['/movies', movie.id]">
      <div class="col-md-5">
        <img [src]="movie.poster" class="movie-poster" [alt]="movie.title"  title={{movie.title}}/>
      </div>
      <div class="col-md-6 m-2">
        <h4>{{movie.title}}</h4>
        <p>{{movie.year}}</p>
      </div>
    </div>
  </div>


  `,
  styles: [`
    .movie-poster {
      max-height: 300px;
      border-radius: 3%;
    }
    }
  `]
})
export class MovieThumbnailComponent {
  @Input() movie: IMovie;
}
