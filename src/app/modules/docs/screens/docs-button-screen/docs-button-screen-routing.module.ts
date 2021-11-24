import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsButtonScreenComponent } from './docs-button-screen.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DocsButtonScreenComponent,
  },
  {
    path: 'base',
    loadChildren: () => import('./modules/docs-button-base/docs-button-base.module').then(m => m.DocsButtonBaseModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsButtonScreenRoutingModule { }
