import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
	providedIn: 'root'
})
export class ChatService {
	[x: string]: any;

	constructor(
		private db: AngularFireDatabase,
		private http: HttpClient,
		private firestore: AngularFirestore

	) { }
	//https://krimsonhart.medium.com/support-chat-with-angular-firebase-realtime-database-1bf1c3b21f10

	// getMessagesList() {
	// 	return this.db.object('Chat').valueChanges();
	// }

	getMessages() {
		return this.firestore.collection('chat').snapshotChanges();
	}

	// getMessagesId(userID: any) {
	// 	return this.db.object('Chat/' + userID + '/messages').valueChanges();
	// }

	sendMessage(user: any, message: any) {
		const messageData = {
			messageBody: message,
			senderName: user,
			timeStamp: new Date().getTime()
		};
		//console.log(messageData)
		return this.firestore.collection('chat').add(messageData);

	}

	// endConversation(chatID: any) {
	// 	const agentMeta = {
	// 		name: '',
	// 		new: false
	// 	};
	// 	const userMeta = {
	// 		new: false
	// 	};
	// 	this.db.database.ref(`Chat/${chatID}/meta-data/agent`).update(agentMeta);
	// 	this.db.database.ref(`Chat/${chatID}/meta-data/user`).update(userMeta);
	// }

}
