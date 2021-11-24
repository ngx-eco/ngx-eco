// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MainHeaderModule } from "./components/layout/main-header/main-header.module";
import { MainFooterModule } from "./components/layout/main-footer/main-footer.module";



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainHeaderModule,
    MainFooterModule,
    MainRoutingModule,
  ],
})
export class MainModule { }
