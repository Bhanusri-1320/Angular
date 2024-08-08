import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  // @Input() MoviesList: any;
  // name = 'Kalki 2898 AD';
  // poster =
  //   'https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg';
  // rating = 10;
  // summary =
  //   'In 2898 AD, 6,000 years after the events of the Kurukshetra War, the desertified city of Kasi stands as the last known city in a post-apocalyptic world dominated by Supreme Yaskin, a totalitarian god king. Yaskin rules from the Complex, an inverted-pyramid megastructure that tovers above the city.';
  // trailer =
  //   '<iframe width="914" height="514" src="https://www.youtube.com/embed/kQDd1AhGIHk" title="Kalki 2898 AD Trailer - Hindi | Prabhas | Amitabh Bachchan | Kamal Haasan | Deepika | Nag Ashwin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  // @Input() MoviesList: any;
  movieForm: FormGroup;
  movieList: any;
  constructor(
    public movieService: MovieService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.movieList = this.movieService.getAllMoviesp();

    // formGroup -> formControlName
    this.movieForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      poster: '',
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      summary: '',
      trailer: '',
    });
  }

  // addMovie() {
  //   let obj: any = {
  //     name: this.name,
  //     poster: this.poster,
  //     rating: +this.rating,
  //     summary: this.summary,
  //     trailer: this.trailer,
  //   };
  //   // this.movieService.MoviesList.push(this.obj);
  //   this.movieService.addMovieP(obj);
  //   console.log(obj);
  //   this.movieService
  //     .getAllMoviesp()
  //     .then(() => this.route.navigate(['movies']));
  // }

  addMovie() {
    console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt
    if (this.movieForm.valid) {
      let newMovie: any = this.movieForm.value;
      this.movieService.addMovieP(newMovie).then(() => {
        // Move to movies page
        this.route.navigate(['movies']);
      });
    }
  }
  get name() {
    return this.movieForm.get('name');
  }

  get rating() {
    return this.movieForm.get('rating');
  }
}
