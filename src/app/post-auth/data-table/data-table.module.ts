import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { LayoutModule } from '../layout/layout.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    LayoutModule,
    NgxDatatableModule,
    MatTableModule
  ]
})
export class DataTableModule { }
