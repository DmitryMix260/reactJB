import { FC } from 'react';
import { Chat } from 'src/types';
import { List } from '@mui/material';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, onAddChat }) => {
  const [value, setValue] = useState('');

  const handlerSubmit = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      });
      setValue('');
    }
  };

  return (
    <>
      <div>
        <List>
          {chats.map((chat) => (
            <Link to={`/chats/${chat.id}`} key={chat.id} data-testid="li">
              {chat.name}
            </Link>
          ))}
        </List>
        <form action="#" onSubmit={handlerSubmit}>
          <input
            type="text"
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
          />
          <button>create chat</button>
        </form>
      </div>
    </>
  );
};
