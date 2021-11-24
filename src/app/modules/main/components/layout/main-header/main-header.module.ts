// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// App
import { MainHeaderComponent } from './main-header.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainHeaderComponent,
  ],
})
export class MainHeaderModule { }
