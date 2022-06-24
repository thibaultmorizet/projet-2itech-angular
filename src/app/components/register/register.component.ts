import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {};
  error: string | null = null;

  constructor(private rs: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }
  inscription() {
    this.rs.register(this.user).subscribe({
      next: (res) => {
          this.router.navigateByUrl('/auth');
      },
      error: (res) => {
        this.error = res.message;
      },
    });
  }

}
