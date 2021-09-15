import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [GamesComponent],
    imports: [CommonModule, GamesRoutingModule, SharedModule, ReactiveFormsModule],
})
export class GamesModule {}
