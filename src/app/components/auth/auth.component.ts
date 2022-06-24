import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  user: User = {};
  error: string | null = null;
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}
  connexion() {
    this.as.login(this.user).subscribe({
      next: (res) => {
        if (res.token != null) {
          localStorage.setItem('jeton', res.token);
          this.as.getTheUser(this.user.email).subscribe((res) => {          
            sessionStorage.setItem('user', JSON.stringify(res[0]));
          });
          this.router.navigateByUrl('/movies');
        }
      },
      error: (res) => {
        this.error = res.message;
      },
    });
  }
}
