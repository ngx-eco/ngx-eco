import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsButtonBaseMainScreenRoutingModule } from './docs-button-base-main-screen-routing.module';
import { DocsButtonBaseMainScreenComponent } from './docs-button-base-main-screen.component';


@NgModule({
  declarations: [
    DocsButtonBaseMainScreenComponent
  ],
  imports: [
    CommonModule,
    DocsButtonBaseMainScreenRoutingModule
  ]
})
export class DocsButtonBaseMainScreenModule { }
