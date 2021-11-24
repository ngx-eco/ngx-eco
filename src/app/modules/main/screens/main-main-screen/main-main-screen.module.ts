// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// App
import { MainMainScreenComponent } from './main-main-screen.component';
import { MainMainScreenRoutingModule } from './main-main-screen-routing.module';



@NgModule({
  declarations: [
    MainMainScreenComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainMainScreenRoutingModule,
  ],
})
export class MainMainScreenModule { }
