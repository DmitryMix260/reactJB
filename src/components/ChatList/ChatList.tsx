import { FC } from 'react';
import { Chat } from 'src/types';
import { ListItem, List } from '@mui/material';

interface ChatListProps {
  chats: Chat[];
}

export const ChatList: FC<ChatListProps> = ({ chats }) => {
  return (
    <>
      <div>
        <List>
          {chats.map((chat) => (
            <ListItem key={chat.id} data-testid="li">
              {chat.name}
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
