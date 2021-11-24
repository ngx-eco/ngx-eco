// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { DocsHeaderComponent } from './docs-header.component';
import {InlineSVGModule} from "ng-inline-svg";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DocsHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InlineSVGModule,
  ],
  exports: [
    DocsHeaderComponent,
  ],
})
export class DocsHeaderModule { }
