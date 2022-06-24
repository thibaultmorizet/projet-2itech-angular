import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: Array<Movie> = [];
  idUser: number = 0;
  user: User = {};
  constructor(
    private ms: MovieService,
    private as: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ms.getAllMovies().subscribe((res) => {
      this.movies = res;
    });
    setTimeout(() => {
      this.user = JSON.parse(sessionStorage.getItem('user') ?? '');
    }, 1000);
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
  addMovie(movie_id: any) {
    this.ms.addAMovie(this.user, this.user.id, movie_id).subscribe(() => {
      this.as.getTheUser(this.user.email).subscribe((res) => {
        sessionStorage.setItem('user', JSON.stringify(res[0]));
        this.router.navigateByUrl('/my-movies');
      });
    });
  }
}
