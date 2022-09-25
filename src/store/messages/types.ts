import { Message } from 'src/types';
import { ADD_CHAT, ADD_MESSAGE, DEL_CHAT } from './actions';

export type MesssagesActions = AddChat | AddMessage | DelChat;

export interface AddChat {
  type: typeof ADD_CHAT;
  chatName: string;
}

export interface AddMessage {
  type: typeof ADD_MESSAGE;
  chatName: string;
  newMessage: Message;
}

export interface DelChat {
  type: typeof DEL_CHAT;
  chatName: string;
}
