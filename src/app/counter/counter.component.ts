import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  like = 0;
  dislike = 0;
  text = 'your Awesome';
  likeCounter() {
    this.like += 1;
  }
  dislikeCounter() {
    this.dislike += 1;
  }
}
