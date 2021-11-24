// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App
import { MainLicenseScreenComponent } from "./main-license-screen.component";



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainLicenseScreenComponent,
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLicenseScreenRoutingModule { }
