import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  }
]

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class DetailsLayoutModule { }
