import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  my_movies: Array<Movie> = [];

  constructor(private ms: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.ms.getMyMovies(JSON.parse(sessionStorage.getItem('user') ?? '').id).subscribe((res) => {
      this.my_movies = res.movies ?? [];
    })
  }
  deconnexion() {
    localStorage.removeItem('jeton');
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/auth');
  }
  goToMovies() {
    this.router.navigateByUrl('/movies');
  }
  goToMyMovies() {
    this.router.navigateByUrl('/my-movies');
  }

}
