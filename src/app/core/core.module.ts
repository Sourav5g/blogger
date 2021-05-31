import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDirective } from './directive/directives.directive';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    DirectivesDirective,
    DatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
