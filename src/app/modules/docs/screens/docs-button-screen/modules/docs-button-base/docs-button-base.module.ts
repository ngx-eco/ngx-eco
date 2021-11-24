import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsButtonBaseRoutingModule } from './docs-button-base-routing.module';
import { DocsButtonBaseComponent } from './docs-button-base.component';


@NgModule({
  declarations: [
    DocsButtonBaseComponent
  ],
  imports: [
    CommonModule,
    DocsButtonBaseRoutingModule
  ]
})
export class DocsButtonBaseModule { }
