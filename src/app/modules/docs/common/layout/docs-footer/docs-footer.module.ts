// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { DocsFooterComponent } from './docs-footer.component';



@NgModule({
  declarations: [
    DocsFooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DocsFooterComponent,
  ],
})
export class DocsFooterModule { }
