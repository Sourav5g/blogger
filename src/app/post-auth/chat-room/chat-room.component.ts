import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import {CHAT} from '../../core/model/chat-data'
import {chatType} from '../../core/model/chat'
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  chatData:any
  inboxData!: any[];

  constructor(
    private sidebarService : NbSidebarService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    //console.log(CHAT)
    this.chatData = CHAT
  }

  getMessages(chatMessage:any){
    this.inboxData = chatMessage.id
    this.router.navigate(['dashboard/chat-room',this.inboxData]);
    //console.log(this.inboxData)
    // this.inboxData = Object.keys(chatMessage).map((key) => {
    //       console.log(this.inboxData)
    //    return chatMessage
    // });

  }

}
