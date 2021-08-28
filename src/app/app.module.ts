import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginModule } from './components/login-page/login.module';
import { ProfileModule } from './components/profile-page/profile.module';
import { LibraryModule } from './components/library-page/library.module';
import { FriendsModule } from './components/friends-page/friends.module';
import { GamesModule } from './components/games-page/games.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamesGuard } from './components/games-page/games.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProfileModule,
    LibraryModule,
    FriendsModule,
    GamesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GamesGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
