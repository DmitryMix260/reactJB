import style from './MessageList.module.css';
import { FC } from 'react';
import { Messages } from 'src/types';

interface MessageListProps {
  messages: Messages;
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <>
      <div className={style.messagelist}>
        <ul className={style.messagelistUl}>
          {messages.map((message, idx) => (
            <li className={style.messagelistLi} key={idx} data-testid="li">
              {message.author}: {message.message}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
