// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'docs',
    loadChildren: () => import('./modules/docs/docs.module').then(m => m.DocsModule),
  },
  {
    path: '**',
    redirectTo: '',
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
