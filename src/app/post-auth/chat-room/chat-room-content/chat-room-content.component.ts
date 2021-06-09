import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {CHAT} from '../../../core/model/chat-data'

@Component({
  selector: 'app-chat-room-content',
  templateUrl: './chat-room-content.component.html',
  styleUrls: ['./chat-room-content.component.css']
})
export class ChatRoomContentComponent implements OnInit {
  id!: any;
  chatData:any
  messageData:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.chatData = CHAT
    this.id = this.route.snapshot.paramMap.get('id')
    // console.log(this.id)
    // console.log(this.chatData)
    this.messagePrint();
  }

  messagePrint(){
    //console.log( this.chatData)
    this.chatData.forEach( (value: any) => {
        // console.log(value.id);
          if ( value.id == this.id ){
            //console.log(value.message)
            this.messageData = value.message
          }
    })
  }
}
