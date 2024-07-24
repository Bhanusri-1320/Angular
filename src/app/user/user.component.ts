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
   Users=[ { name:"BhanuSri",
    image:"https://www.hyundai.com/content/dam/hyundai/ww/en/images/worldcup/08-bts/worldcup-bts-stg-m.jpg"
    }, { name:" Harshu" ,image:
    "https://m.media-amazon.com/images/M/MV5BNzkxOGE0NzgtYzAwYS00NWE4LTk4Y2EtMWE4YTQ0YjVlMTdiXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_FMjpg_UX1000_.jpg"
    } , { name:"chiukku", image:
    "https://www.billboard.com/wp-content/uploads/2021/12/bts-courtesy-billboard-japan-1548.jpg?w=942&h=623&crop=1"
    } ]
}