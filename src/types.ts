export interface Message {
  author: AUTHOR;
  message: string;
}

export type Messages = Message[];

export enum AUTHOR {
  USER = 'USER',
  BOT = 'BOT',
}

export interface Chat {
  id: string;
  name: string;
}
