import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { authGuard } from './auth.guard';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'movies',
    children: [
      { path: '', component: MovieListComponent },
      { path: 'edit', component: EditMovieComponent },
      { path: 'add', component: AddMovieComponent, canActivate: [authGuard] },
      { path: ':id', component: MovieDetailsComponent },
    ],

    // component: MovieListComponent,
  },
  // {
  //   path: 'movies/add',
  //   component: AddMovieComponent,
  // },
  // {
  //   path: 'movies/:id',
  //   component: MovieDetailsComponent,
  // },

  {
    path: 'films',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'color',
    component: ColorGameComponent,
    canActivate: [authGuard],
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
