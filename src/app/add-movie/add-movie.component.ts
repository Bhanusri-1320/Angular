import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  @Input() MoviesList: any;
  id = '';
  name = '';
  poster = '';
  rating = 0;
  summary = '';
  trailer = '';
  // @Input() MoviesList: any;
  obj = {
    id: this.id,
    name: this.name,
    poster: this.poster,
    rating: +this.rating,
    summary: this.summary,
    trailer: this.trailer,
  };
  constructor(public movieService: MovieService) {}
  addMovie() {
    this.movieService.MoviesList.push(this.obj);
  }
}
