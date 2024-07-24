import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  like=0
  dislike=0
  text="your Awesome"
   likeCounter()
   {
       this.like+=1;
   }
   dislikeCounter()
   {
    this.dislike+=1;
   }
   display()
   {
    
   }
}
