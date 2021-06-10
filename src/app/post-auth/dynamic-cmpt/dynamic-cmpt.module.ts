import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicCmptRoutingModule } from './dynamic-cmpt-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { DynamicCmptComponent } from './dynamic-cmpt.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';


@NgModule({
  declarations: [
    DynamicCmptComponent,
    Sample1Component,
    Sample2Component
  ],
  imports: [
    CommonModule,
    DynamicCmptRoutingModule,
    LayoutModule
  ],
  entryComponents: [
    Sample1Component,
    Sample2Component]
})
export class DynamicCmptModule { }
