import { FC, useState } from 'react';
import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import style from './ChatList.module.css';
import { addChat, delChat } from 'src/store/messages/actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectChats } from 'src/store/messages/selectors';

export const ChatList: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const chats = useSelector(selectChats, shallowEqual);

  const handlerSubmit = (ev: React.ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (value) {
      dispatch(addChat(value));
      setValue('');
    }
  };

  return (
    <>
      <div>
        <List className={style.ChatListUl}>
          {chats.map((chat) => (
            <ListItem key={chat.id}>
              <NavLink
                to={`/chats/${chat.name}`}
                data-testid="li"
                className={({ isActive }) =>
                  isActive ? style.activeChatLink : style.ChatNavLink
                }
              >
                {chat.name}
              </NavLink>
              <button onClick={() => dispatch(delChat(chat.name))}>del</button>
            </ListItem>
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
