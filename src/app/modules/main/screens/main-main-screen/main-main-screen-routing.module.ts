// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App
import { MainMainScreenComponent } from "./main-main-screen.component";



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainMainScreenComponent,
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMainScreenRoutingModule { }
