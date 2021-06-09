import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloaraComponent } from './floara.component';

const routes: Routes = [
  {
    path: '',
    component: FloaraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloaraRoutingModule { }
