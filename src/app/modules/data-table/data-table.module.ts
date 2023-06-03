import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '', component: LandingComponent 
  }
]

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class DataTableModule { }
