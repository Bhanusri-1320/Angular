import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../movie.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  // @Input() MoviesList: any;
  name = 'Kalki 2898 AD';
  poster =
    'https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg';
  rating = 10;
  summary =
    'In 2898 AD, 6,000 years after the events of the Kurukshetra War, the desertified city of Kasi stands as the last known city in a post-apocalyptic world dominated by Supreme Yaskin, a totalitarian god king. Yaskin rules from the Complex, an inverted-pyramid megastructure that tovers above the city.';
  trailer =
    '<iframe width="914" height="514" src="https://www.youtube.com/embed/kQDd1AhGIHk" title="Kalki 2898 AD Trailer - Hindi | Prabhas | Amitabh Bachchan | Kamal Haasan | Deepika | Nag Ashwin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  // @Input() MoviesList: any;
  movie = {
    name: this.name,
    poster: this.poster,
    rating: +this.rating,
    summary: this.summary,
    trailer: this.trailer,
  };
  constructor(public movieService: MovieService, private route: Router) {}
  addMovie() {
    // this.movieService.MoviesList.push(this.obj);
    this.movieService.addMovieP(this.movie);
    console.log(this.movie);
    this.route.navigate(['movies']);
  }
}
