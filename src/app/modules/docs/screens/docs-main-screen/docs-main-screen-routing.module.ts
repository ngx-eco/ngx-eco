import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsMainScreenComponent } from './docs-main-screen.component';

const routes: Routes = [
  {
    path: '',
    component: DocsMainScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsMainScreenRoutingModule { }
