import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieThumbnailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
