import { Message } from 'src/types';
import { AddChat, AddMessage, DelChat } from './types';

export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DEL_CHAT = 'MESSAGES::DEL_CHAT';

export const addChat = (chatName: string): AddChat => ({
  type: ADD_CHAT,
  chatName,
});

export const addMessage = (
  chatName: string,
  newMessage: Message
): AddMessage => ({
  type: ADD_MESSAGE,
  chatName,
  newMessage,
});

export const delChat = (chatName: string): DelChat => ({
  type: DEL_CHAT,
  chatName,
});
