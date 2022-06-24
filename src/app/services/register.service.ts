import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private url: string = 'http://localhost:8000/ws/users';
  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post<{ token: string }>(this.url, user);
  }
}
