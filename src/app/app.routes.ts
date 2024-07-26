import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'movies/add',
    component: AddMovieComponent,
  },
  {
    path: 'films',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'color',
    component: ColorGameComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
