import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridstersRoutingModule } from './gridsters-routing.module';
import { GridstersComponent } from './gridsters.component';
import { LayoutModule } from '../layout/layout.module';
import { GridsterModule } from 'angular-gridster2';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    GridstersComponent
  ],
  imports: [
    CommonModule,
    GridstersRoutingModule,
    LayoutModule,
    GridsterModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    DragDropModule
  ]
})
export class GridstersModule { }
