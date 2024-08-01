import { Component, Input } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MoviesComponent,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    AddMovieComponent,
    EditMovieComponent,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  isLoading: boolean = true;
  Movies: any = [];
  editmovie: any;
  constructor(public movieServie: MovieService, private route: Router) {
    // console.log(this.movieServie.MoviesList);
  }
  ngOnInit() {
    this.loadMovies();
  }
  loadMovies() {
    this.movieServie.getAllMoviesp().then((data) => {
      this.Movies = data;
      this.isLoading = false;
    });
  }
  deleteMovie(movie: any) {
    this.movieServie.deleteMovieP(movie).then(() => this.loadMovies());
    // let idx = this.Movies.indexOf(movie);
    // this.Movies.splice(idx, 1);
    // //this.MoviesList.splice(1, 1);
    // return this.Movies;
  }
  editMovie(editmovie: any) {
    console.log('newwww');
    console.log(editmovie.id);
    console.log(editmovie);
    this.route.navigate([`movies/edit/${editmovie.id}`]);
  }
}
