import { Component, input, Input } from '@angular/core';
 
// Declaring component
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() name = 'Bhanu';
  @Input() image="https://www.pinkvilla.com/pics/500x500/64642134_why-bts-is-popular_202403.jpg";
}