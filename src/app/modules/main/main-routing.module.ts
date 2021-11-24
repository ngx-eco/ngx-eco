// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App
import { MainComponent } from "./main.component";



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./screens/main-main-screen/main-main-screen.module').then(m => m.MainMainScreenModule),
      },
      {
        path: 'license',
        loadChildren: () => import('./screens/main-license-screen/main-license-screen.module').then(m => m.MainLicenseScreenModule),
      },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
