import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CounterComponent } from './counter/counter.component';
import { ColorGameComponent } from './color-game/color-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'BTS❤️💜🎊🎊';
  profilePic =
    'https://www.pinkvilla.com/pics/500x500/64642134_why-bts-is-popular_202403.jpg';
  // Users=[ { name:"BhanuSri",
  //   image:"https://www.hyundai.com/content/dam/hyundai/ww/en/images/worldcup/08-bts/worldcup-bts-stg-m.jpg"
  //   }, { name:" Harshu" ,image:
  //   "https://m.media-amazon.com/images/M/MV5BNzkxOGE0NzgtYzAwYS00NWE4LTk4Y2EtMWE4YTQ0YjVlMTdiXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_FMjpg_UX1000_.jpg"
  //   } , { name:"chiukku", image:
  //   "https://www.billboard.com/wp-content/uploads/2021/12/bts-courtesy-billboard-japan-1548.jpg?w=942&h=623&crop=1"
  //   } ]
  MoviesList: any = [
    {
      name: 'Vikram',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
      rating: 8.4,
      summary:
        'Members of a black ops team must track and eliminate a gang of masked murderers.',
    },
    {
      name: 'RRR',
      poster:
        'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
      rating: 8.8,
      summary:
        'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    },
    {
      name: 'Iron man 2',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg',
      rating: 7,
      summary:
        'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
    },
    {
      name: 'No Country for Old Men',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: 'Jai Bhim',
      poster:
        'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
      summary:
        'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
      rating: 8.8,
    },
    {
      name: 'The Avengers',
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
    },
    {
      name: 'Interstellar',
      poster: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg',
      rating: 8.6,
      summary:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
    },
    {
      name: 'Baahubali',
      poster: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
      rating: 8,
      summary:
        'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
    },
    {
      name: 'Ratatouille',
      poster:
        'https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=',
      rating: 8,
      summary:
        'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
    },
    {
      name: 'PS2',
      poster:
        'https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg',
      summary:
        'Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan',
      rating: 8,
    },
    {
      name: 'Thor: Ragnarok',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg',
      summary:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.',
      rating: 8.8,
    },
  ];
}
