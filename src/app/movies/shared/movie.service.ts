import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IMovie } from './movie.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Url to use for http call depending on the environment
  private url: string = environment.url;

  constructor(private http: HttpClient) { }
  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.url)
      .pipe(catchError(this.handleError<IMovie[]>('getMovies', [])));
  }

   // generic error handler
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
