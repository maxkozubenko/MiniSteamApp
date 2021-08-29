import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login-page/login.module').then(m => m.LoginModule),
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile-page/profile.module').then(m => m.ProfileModule),
    pathMatch: 'full'
  },
  {
    path: 'library',
    loadChildren: () => import('./components/library-page/library.module').then(m => m.LibraryModule),
    pathMatch: 'full'
  },
  {
    path: 'friends',
    loadChildren: () => import('./components/friends-page/friends.module').then(m => m.FriendsModule),
    pathMatch: 'full'
  },
  {
    path: 'games',
    loadChildren: () => import('./components/games-page/games.module').then(m => m.GamesModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
