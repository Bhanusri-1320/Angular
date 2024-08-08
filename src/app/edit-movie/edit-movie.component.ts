import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AddMovieComponent,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.scss',
})
export class EditMovieComponent {
  movieForm!: FormGroup;
  movieList: any;
  movieId: any;
  msg!: string;
  constructor(
    public movieServie: MovieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.movieList = this.movieServie.getAllMoviesp();
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

  // movie: any = {
  //   name: '',
  //   poster: '',
  //   summary: '',
  //   rating: 0,
  //   trailer: '',
  //   id: '100',
  // };
  // movieId: any;
  // msg = '';
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
    // const id = this.route.snapshot.paramMap.get('id') as string; // Get movie ID from URL
    // this.movieServie
    //   .getMoviesByIdp(id)
    //   .then((data) => {
    //     this.movieForm = data;
    //     this.movieId = data.id;
    //     this.movieForm.patchValue(data);
    //   })
    //   .catch(() => {
    //     this.msg = 'Something went wrong';
    //   });

    this.movieId = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.movieServie.getMoviesByIdp(this.movieId).then((data) => {
      console.log(data);
      // this.movieForm.setValue vs this.movieForm.patchValue
      this.movieForm.patchValue(data);
    });
  }

  saveMovie() {
    console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt
    if (this.movieForm.valid) {
      let updatedMovie: any = this.movieForm.value;
      console.log(this.movieForm.value);
      this.movieServie.updateMovies(this.movieId, updatedMovie).then(() => {
        this.router.navigate(['movies']);
      });
    }

    // console.log(this.movieForm.value);
    // // Todo: Fix Add - Technical Debt

    // if (this.movieForm.valid) {
    //   this.movieServie.updateMovies(this.movieForm);
    //   // .then(() => {
    //   // Move to movies page
    //   this.router.navigate(['movies']);
    //   // });
    // }
    // console.log(this.movieForm);
    // this.movieServie.updateMovies(this.movieForm);
    // this.router.navigate(['movies']);
  }
  get name() {
    return this.movieForm.get('name');
  }

  get poster() {
    return this.movieForm.get('poster');
  }

  get rating() {
    return this.movieForm.get('rating');
  }
}
