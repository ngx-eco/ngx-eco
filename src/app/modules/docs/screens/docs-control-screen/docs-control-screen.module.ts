import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsControlScreenRoutingModule } from './docs-control-screen-routing.module';
import { DocsControlScreenComponent } from './docs-control-screen.component';


@NgModule({
  declarations: [
    DocsControlScreenComponent
  ],
  imports: [
    CommonModule,
    DocsControlScreenRoutingModule
  ]
})
export class DocsControlScreenModule { }
