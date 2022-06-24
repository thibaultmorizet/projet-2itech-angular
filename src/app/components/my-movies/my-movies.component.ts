import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  my_movies: Array<Movie> = [];
  user: User = {};

  constructor(private ms: MovieService,private as: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.ms.getMyMovies(JSON.parse(sessionStorage.getItem('user') ?? '').id).subscribe((res) => {
      this.my_movies = res.movies ?? [];
    })
    setTimeout(() => {
      this.user = JSON.parse(sessionStorage.getItem('user') ?? '');
    }, 500);
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
  removeMovie(movie_id: any) {    
    this.ms.removeAMovie(this.user, this.user.id, movie_id).subscribe(() => {
      this.as.getTheUser(this.user.email).subscribe((res) => {
        sessionStorage.setItem('user', JSON.stringify(res[0]));
        window.location.reload();
      });
    });
  }

}
