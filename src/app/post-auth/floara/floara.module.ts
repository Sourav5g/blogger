import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloaraRoutingModule } from './floara-routing.module';
import { FloaraComponent } from './floara.component';
import { LayoutModule } from '../layout/layout.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    FloaraComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FloaraRoutingModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ]
})
export class FloaraModule { }
