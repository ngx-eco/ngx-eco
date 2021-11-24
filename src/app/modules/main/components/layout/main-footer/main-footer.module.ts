// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// App
import { MainFooterComponent } from './main-footer.component';



@NgModule({
  declarations: [
    MainFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainFooterComponent,
  ],
})
export class MainFooterModule { }
