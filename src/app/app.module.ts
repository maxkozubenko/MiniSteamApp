import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login-page/login.module';
import { ProfileModule } from './components/profile-page/profile.module';
import { LibraryModule } from './components/library-page/library.module';
import { FriendsModule } from './components/friends-page/friends.module';
import { GamesModule } from './components/games-page/games.module';

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
    GamesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
