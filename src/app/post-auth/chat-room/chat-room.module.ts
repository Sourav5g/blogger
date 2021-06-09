import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { ChatRoomComponent } from './chat-room.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChatRoomContentComponent } from './chat-room-content/chat-room-content.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    ChatRoomComponent,
    ChatRoomContentComponent
  ],
  imports: [
    CommonModule,
    ChatRoomRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    LayoutModule
  ]
})
export class ChatRoomModule { }
