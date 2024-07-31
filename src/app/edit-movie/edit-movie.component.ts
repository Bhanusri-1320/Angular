import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.scss',
})
export class EditMovieComponent {
  @Input() movie: any = [];
  name = this.movie.name;
}