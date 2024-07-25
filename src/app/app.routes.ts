import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: AppComponent,
  },
  {
    path: 'color',
    component: ColorGameComponent,
  },
];
