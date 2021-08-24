import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { ProfileModule } from './components/profile/profile.module';
import { LibraryModule } from './components/library/library.module';
import { FriendsModule } from './components/friends/friends.module';

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
    FriendsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
