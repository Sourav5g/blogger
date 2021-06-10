import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridstersComponent } from './gridsters.component';

const routes: Routes = [
  {
    path: '',
    component: GridstersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridstersRoutingModule { }
