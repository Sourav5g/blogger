import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat/chat.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageData!: FormGroup;
  user: any
  getMessageData :any
 // arr!: any[];
  // data = {
  //    chat_id: "RKdMKJsF6g7k1foS7O",
  //     message: "hi",
  //     user: "sourav",
  //   };
  constructor(
    private chatService: ChatService,
    private fb: FormBuilder,
    private firestore: AngularFirestore


  ) {
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('num');
    console.log(this.user)
    this.chatData();

    //this.getMessageData = this.firestore.collection('chat', ref => ref.orderBy('timeStamp'));
    this.chatService.getMessages().subscribe((data: any[]) => {
      this.getMessageData = data.map((item: { payload: { doc: { data: () => any; id: any; }; }; }) => {
         const object: any = item.payload.doc.data();
         return object;
 
       })
       console.log(this.getMessageData);
     });
   // console.log(this.getMessageData);
    
  }

  // sortData() {
  //   return this.getMessageData.sort((a:any, b:any) => {
  //     return <any>new this.getMessageData(b.timeStamp) - <any>new this.getMessageData(a.timeStamp);
  //   });
  // }

  chatData() {
    this.messageData = this.fb.group({
      message: [''],

    });
    // console.log(this.loginData.value.first_name)
  }

  postMessage() {
    console.log(this.messageData.value)
    //console.log(this.data.user, this.data.message, this.data.chat_id);
    this.chatService.sendMessage(this.user, this.messageData.value);
    this.messageData.reset();
  }

}
