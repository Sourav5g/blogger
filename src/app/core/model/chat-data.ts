import { chatType } from './chat';

export const CHAT: chatType[] = [
   {
      name: 'sourav',
      id: 1,
      message!: [
         {
            message: 'hello'
         },
         {
            sentMessage:"yup"
         },
         {
            message: 'whats up'
         },
         {
            sentMessage:"just chilling"
         },
      ],
      email!: 'sourav@gmail.com'
   },

   {
      name!: 'steve',
      id: 2,
      message!: [
         {
            message: 'Are you free today!!'
         },
         {
            sentMessage:"yes"
         },
         {
            message: 'ok'
         },
         
         {
            sentMessage:"yea"
         },
      ],
      email!: 'steve@gmail.com'
   },

   {
      name!: 'max',
      id: 3,
      message!: [
         {
            message: 'hello how are you'
         },
         {
            message: 'I am fine'
         },
         {
            sentMessage:"yea ,I am fine bro"
         },
         {
            sentMessage:"wbu?"
         },
      ],
      email!: 'max@gmail.com'
   },

   {
      name!: 'thor',
      id: 4,
      message!: [
         {
            message: 'hello 1'
         },
         {
            sentMessage:"yea ,I am fine 1"
         },
         {
            message: 'whats up 1'
         },
         
         {
            sentMessage:"yea ,I am fine 1"
         },
      ],
      email!: 'thor@gmail.com'
   },

];
