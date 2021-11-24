import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsButtonBaseComponent } from './docs-button-base.component';

const routes: Routes = [
  {
    path: '',
    component: DocsButtonBaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./screens/docs-button-base-main-screen/docs-button-base-main-screen.module').then(m => m.DocsButtonBaseMainScreenModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsButtonBaseRoutingModule { }
