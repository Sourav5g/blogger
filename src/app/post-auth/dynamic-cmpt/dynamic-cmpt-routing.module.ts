import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicCmptComponent } from './dynamic-cmpt.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicCmptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicCmptRoutingModule { }
