import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
path: '', redirectTo: 'details-layout', pathMatch: 'full'
  },
  {
    path: 'details-layout', 
    loadChildren: () => import('./modules/details-layout/details-layout.module').then(m => m.DetailsLayoutModule)
  },
  {
    path: 'data-table', 
    loadChildren: () => import('./modules/data-table/data-table.module').then(m => m.DataTableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
