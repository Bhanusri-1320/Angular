import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [AddMovieComponent, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.scss',
})
export class EditMovieComponent {
  constructor(
    public movieServie: MovieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}
  movie: any = {
    name: '',
    poster: '',
    summary: '',
    rating: 0,
    trailer: '',
    id: '100',
  };
  movieId: any;
  msg = '';
  // displaymovie() {
  //   this.Movie = this.movie;
  //   console.log(this.movie);
  //   console.log(this.Movie);
  //   //this.Movie = this.movieServie.getMoviesByIdp(this.movie.id);
  //   //this.Movie.then((res: any) => console.log(res));
  //   // console.log(this.movie.name);
  //   fetch(
  //     `https://669a42939ba098ed61fef789.mockapi.io/MoviesList/${this.movie.id}`,
  //     {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json', // Specify the data type
  //       },
  //       body: JSON.stringify(this.movie), // Convert data to JSON string
  //     }
  //   );
  // }
  // ngOnInit() {
  //   let id = this.route.snapshot.paramMap.get('id') as string;
  //   this.movieServie.getMoviesByIdp(id).then((data) => {
  //     this.movie = data;

  //   });
  // }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string; // Get movie ID from URL
    this.movieServie
      .getMoviesByIdp(id)
      .then((data) => {
        this.movie = data;
        this.movieId = data.id;
        this.movie.patchValue(data);
      })
      .catch(() => {
        this.msg = 'Something went wrong';
      });
  }
  saveMovie() {
    console.log(this.movie);
    this.movieServie.updateMovies(this.movie);
    this.router.navigate(['movies']);
  }
}
