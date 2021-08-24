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
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'library',
    loadChildren: () => import('./components/library/library.module').then(m => m.LibraryModule),
  },
  {
    path: 'friends',
    loadChildren: () => import('./components/friends/friends.module').then(m => m.FriendsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
