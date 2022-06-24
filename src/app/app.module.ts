import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [AppComponent, MovieComponent, AuthComponent, MyMoviesComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
