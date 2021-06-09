import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { PostAuthComponent } from './post-auth.component';
import { UpdateFormModule } from '../shared/modules/update-form/update-form.module';
import { UpdateFormComponent } from '../shared/modules/update-form/update-form.component';


@NgModule({
  declarations: [
    PostAuthComponent,
   // UpdateFormComponent
  ],
  imports: [
    CommonModule,
    PostAuthRoutingModule,
    
  ]
})
export class PostAuthModule { }
