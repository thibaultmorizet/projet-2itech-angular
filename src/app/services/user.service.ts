import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:8000/ws/users';

  constructor(private http: HttpClient) { }
  getUser() {

    return this.http.get<Array<User>>(this.url);
  }
}
