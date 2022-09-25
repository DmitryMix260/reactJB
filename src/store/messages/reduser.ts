import { Reducer } from 'redux';
import { AUTHOR, Messages } from 'src/types';
import { ADD_CHAT, ADD_MESSAGE, DEL_CHAT } from './actions';
import { MesssagesActions } from './types';

const initialState: Messages = {
  first: [{ author: AUTHOR.USER, message: 'hello, world' }],
  second: [{ author: AUTHOR.BOT, message: 'hello, im bot' }],
};
export const messsageReduser: Reducer<Messages, MesssagesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatName]: [...state[action.chatName], action.newMessage],
      };
    }
    case DEL_CHAT: {
      const messages = { ...state };
      delete messages[action.chatName];
      return messages;
    }
    default:
      return state;
  }
};
