import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesGuard } from '../games-page/games.guard';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full',
    canActivate: [GamesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
