// Angular
import { Inject, Injectable } from '@angular/core';

// App
import { DOCS_MENU_SIDENAV_CONFIG } from "./docs-menu-sidenav.token";
import { DocsMenuSidenavInterface } from "../../../core/interfaces/docs-menu-sidenav.interface";



@Injectable({
  providedIn: 'root'
})
export class DocsMenuSidenavService {

  constructor(
    @Inject(DOCS_MENU_SIDENAV_CONFIG) public menu: DocsMenuSidenavInterface,
  ) { }

}
