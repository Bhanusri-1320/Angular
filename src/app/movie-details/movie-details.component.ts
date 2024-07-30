import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  // movie: any;

  // constructor(
  //   private movieServie: MovieService,
  //   private route: ActivatedRoute
  // ) {
  //   let idx = this.route.snapshot.paramMap.get('id') || 0;
  //   console.log(idx);
  //   this.movie = this.movieServie.getMovieByIndex(+idx);
  //   console.log(this.movie);
  // }

  Movies!: any;
  trustedUrl!: SafeUrl;
  https: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {
    let idx = this.route.snapshot.paramMap.get('id') || 0; // From URL
    console.log(idx);
    this.Movies = this.movieService.getMovieByIndex(+idx);
    console.log(this.Movies);

    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.Movies.trailer
    );
  }
}
