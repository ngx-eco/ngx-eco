import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsControlBaseMainScreenRoutingModule } from './docs-control-base-main-screen-routing.module';
import { DocsControlBaseMainScreenComponent } from './docs-control-base-main-screen.component';


@NgModule({
  declarations: [
    DocsControlBaseMainScreenComponent
  ],
  imports: [
    CommonModule,
    DocsControlBaseMainScreenRoutingModule
  ]
})
export class DocsControlBaseMainScreenModule { }
