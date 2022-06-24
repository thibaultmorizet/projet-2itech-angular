import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url: string = 'http://localhost:8000/ws/movies';
  private movies: Array<object> = [];
  private my_movies: Array<object> = [];
  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<Array<Movie>>(this.url);
  }
  getMyMovies(user_id: any) {
    return this.http.get<User>(`http://localhost:8000/ws/users/` + user_id);
  }
  addAMovie(user: User, user_id: any, movie_id: any) {
    this.movies = user.movies ?? [];
    this.movies.push({ id: movie_id });

    return this.http.put<User>(`http://localhost:8000/ws/users/` + user_id, {
      id: user_id,
      movies: this.movies,
    });
  }
}
