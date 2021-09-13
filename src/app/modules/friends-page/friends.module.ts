import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserBlockComponent } from './components/user-block/user-block.component';


@NgModule({
  declarations: [
    FriendsComponent,
    UserBlockComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FriendsModule { }
