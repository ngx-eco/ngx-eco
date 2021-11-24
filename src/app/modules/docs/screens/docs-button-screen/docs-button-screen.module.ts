import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsButtonScreenRoutingModule } from './docs-button-screen-routing.module';
import { DocsButtonScreenComponent } from './docs-button-screen.component';


@NgModule({
  declarations: [
    DocsButtonScreenComponent
  ],
  imports: [
    CommonModule,
    DocsButtonScreenRoutingModule
  ]
})
export class DocsButtonScreenModule { }
