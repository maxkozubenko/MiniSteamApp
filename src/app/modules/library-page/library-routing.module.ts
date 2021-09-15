import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesGuard } from '../games-page/games.guard';
import { LibraryComponent } from './library.component';

const routes: Routes = [
    {
        path: '',
        component: LibraryComponent,
        canActivate: [GamesGuard],
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LibraryRoutingModule {}
