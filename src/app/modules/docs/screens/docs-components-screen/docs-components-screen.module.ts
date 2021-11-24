// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { DocsComponentsScreenComponent } from './docs-components-screen.component';
import { DocsComponentsScreenRoutingModule } from './docs-components-screen-routing.module';



@NgModule({
  declarations: [
    DocsComponentsScreenComponent,
  ],
  imports: [
    CommonModule,
    DocsComponentsScreenRoutingModule,
  ],
})
export class DocsComponentsScreenModule { }
