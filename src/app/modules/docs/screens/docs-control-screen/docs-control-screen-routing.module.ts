import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsControlScreenComponent } from './docs-control-screen.component';

const routes: Routes = [
  {
    path: '',
    component: DocsControlScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsControlScreenRoutingModule { }
