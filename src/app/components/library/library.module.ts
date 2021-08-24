import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './pages/library.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule
  ]
})
export class LibraryModule { }
