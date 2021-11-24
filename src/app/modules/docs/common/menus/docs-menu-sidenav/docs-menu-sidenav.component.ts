// Angular
import { Component, OnInit } from '@angular/core';

// App
import { DocsMenuSidenavService } from "./docs-menu-sidenav.service";



@Component({
  selector: 'app-docs-menu-sidenav',
  templateUrl: './docs-menu-sidenav.component.html',
  styleUrls: ['./docs-menu-sidenav.component.scss']
})
export class DocsMenuSidenavComponent implements OnInit {

  constructor(
    public docsMenu: DocsMenuSidenavService,
  ) { }

  ngOnInit(): void {
  }

}
