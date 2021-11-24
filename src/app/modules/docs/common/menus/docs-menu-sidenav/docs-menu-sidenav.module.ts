// Angular
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ModuleWithProviders, NgModule } from '@angular/core';

// Libs
import { InlineSVGModule } from 'ng-inline-svg';

// App
import { DocsMenuSidenavService } from "./docs-menu-sidenav.service";
import { DOCS_MENU_SIDENAV_CONFIG } from "./docs-menu-sidenav.token";
import { DocsMenuSidenavComponent } from './docs-menu-sidenav.component';
import { DocsMenuSidenavInterface } from "../../../core/interfaces/docs-menu-sidenav.interface";



@NgModule({
  declarations: [
    DocsMenuSidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InlineSVGModule,
  ],
  providers: [
    DocsMenuSidenavService,
  ],
  exports: [
    DocsMenuSidenavComponent,
  ]
})
export class DocsMenuSidenavModule {

  public static forRoot(docsMenuSidenavConfig: DocsMenuSidenavInterface): ModuleWithProviders<DocsMenuSidenavModule> {
    return {
      ngModule: DocsMenuSidenavModule,
      providers: [
        DocsMenuSidenavService,
        {
          provide: DOCS_MENU_SIDENAV_CONFIG,
          useValue: docsMenuSidenavConfig,
        },
      ]
    };
  }

  public static forChild(docsMenuSidenavConfig: DocsMenuSidenavInterface): ModuleWithProviders<DocsMenuSidenavModule> {
    return {
      ngModule: DocsMenuSidenavModule,
      providers: [
        DocsMenuSidenavService,
        {
          provide: DOCS_MENU_SIDENAV_CONFIG,
          useValue: docsMenuSidenavConfig,
        },
      ]
    };
  }

  constructor(
    private service: DocsMenuSidenavService,
  ) { }

}
