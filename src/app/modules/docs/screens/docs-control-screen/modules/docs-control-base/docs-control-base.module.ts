import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsControlBaseRoutingModule } from './docs-control-base-routing.module';
import { DocsControlBaseComponent } from './docs-control-base.component';


@NgModule({
  declarations: [
    DocsControlBaseComponent
  ],
  imports: [
    CommonModule,
    DocsControlBaseRoutingModule
  ]
})
export class DocsControlBaseModule { }
