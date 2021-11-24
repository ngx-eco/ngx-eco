// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { MainLicenseScreenComponent } from './main-license-screen.component';
import { MainLicenseScreenRoutingModule } from './main-license-screen-routing.module';



@NgModule({
  declarations: [
    MainLicenseScreenComponent,
  ],
  imports: [
    CommonModule,
    MainLicenseScreenRoutingModule,
  ]
})
export class MainLicenseScreenModule { }
