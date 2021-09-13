import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login-page/login.module';
import { ProfileModule } from './modules/profile-page/profile.module';
import { LibraryModule } from './modules/library-page/library.module';
import { FriendsModule } from './modules/friends-page/friends.module';
import { GamesModule } from './modules/games-page/games.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamesGuard } from './modules/games-page/games.guard';
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
