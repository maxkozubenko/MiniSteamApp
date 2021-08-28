import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import { GamesGuard } from './games.guard';


const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    canActivate: [GamesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
