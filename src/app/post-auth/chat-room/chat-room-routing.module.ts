import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomContentComponent } from './chat-room-content/chat-room-content.component';
import { ChatRoomComponent } from './chat-room.component';

const routes: Routes = [
  {
    path: '',
    component: ChatRoomComponent
  },
  {
    path: ':id',
    component: ChatRoomContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoomRoutingModule { }
