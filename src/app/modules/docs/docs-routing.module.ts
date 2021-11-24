// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App
import { DocsComponent } from './docs.component';



const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./screens/docs-main-screen/docs-main-screen.module').then(m => m.DocsMainScreenModule),
      },
      {
        path: 'components',
        loadChildren: () => import('./screens/docs-components-screen/docs-components-screen.module').then(m => m.DocsComponentsScreenModule),
      },
      {
        path: 'button',
        loadChildren: () => import('./screens/docs-button-screen/docs-button-screen.module').then(m => m.DocsButtonScreenModule),
      },
      {
        path: 'control',
        loadChildren: () => import('./screens/docs-control-screen/docs-control-screen.module').then(m => m.DocsControlScreenModule),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
