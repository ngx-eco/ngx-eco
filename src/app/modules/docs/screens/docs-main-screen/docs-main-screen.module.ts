import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsMainScreenRoutingModule } from './docs-main-screen-routing.module';
import { DocsMainScreenComponent } from './docs-main-screen.component';


@NgModule({
  declarations: [
    DocsMainScreenComponent
  ],
  imports: [
    CommonModule,
    DocsMainScreenRoutingModule
  ]
})
export class DocsMainScreenModule { }
