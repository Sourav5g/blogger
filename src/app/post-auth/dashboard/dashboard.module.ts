import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatFormFieldModule, } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '../layout/layout.module';
import { MatCardModule } from '@angular/material/card';
import { UpdateFormModule } from 'src/app/shared/modules/update-form/update-form.module';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    DashboardComponent,
   //UpdateFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    LayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    DashboardRoutingModule,
    UpdateFormModule,
    NgxSpinnerModule
  ]
})
export class DashboardModule { }
