// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App
import { DocsComponentsScreenComponent } from "./docs-components-screen.component";



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DocsComponentsScreenComponent,
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsComponentsScreenRoutingModule { }
