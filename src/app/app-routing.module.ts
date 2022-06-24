import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { MovieComponent } from './components/movie/movie.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'movies', component: MovieComponent },
  { path: 'my-movies', component: MyMoviesComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
