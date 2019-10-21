import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IMovie } from './movie.model';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  // Url to use for http call depending on the environment
  private url: string = environment.url;

  public searchButtonClickEventTrack = new Subject();
  public getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.url)
      .pipe(catchError(this.handleError<IMovie[]>('getMovies', [])));
  }

  public getMovie(id: number): Observable<IMovie | undefined> {
    return this.getMovies()
      .pipe(
        map((movies: IMovie[]) => movies.find(movie => movie.id === id))
      );
  }

  // generic error handler
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
