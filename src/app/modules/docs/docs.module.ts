// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { DocsComponent } from './docs.component';
import { DocsRoutingModule } from './docs-routing.module';
import { docsMenuSidenavConfig } from "./core/configs/docs-menu-sidenav.config";
import { DocsHeaderModule } from "./common/layout/docs-header/docs-header.module";
import { DocsFooterModule } from "./common/layout/docs-footer/docs-footer.module";
import { DocsMenuSidenavModule } from "./common/menus/docs-menu-sidenav/docs-menu-sidenav.module";



@NgModule({
  declarations: [
    DocsComponent
  ],
  imports: [
    CommonModule,
    DocsHeaderModule,
    DocsFooterModule,
    DocsRoutingModule,
    DocsMenuSidenavModule.forRoot(docsMenuSidenavConfig),
  ]
})
export class DocsModule { }
