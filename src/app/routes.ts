import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { FavouriteListComponent } from './movies/favourite-list/favourite-list.component';

export const appRoutes: Routes = [
  { path: 'movies', component: MoviesListComponent},
  { path: 'movies/:id', component: MovieDetailsComponent},
  { path: 'favourites', component: FavouriteListComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];
