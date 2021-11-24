import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsButtonBaseMainScreenComponent } from './docs-button-base-main-screen.component';

const routes: Routes = [
  {
    path: '',
    component: DocsButtonBaseMainScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsButtonBaseMainScreenRoutingModule { }
