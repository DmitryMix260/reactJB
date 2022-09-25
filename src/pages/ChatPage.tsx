import { FC, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import style from './ChatPage.module.css';
import { ChatList } from 'src/components/ChatList';
import { MessageList } from 'src/components/messageList';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';
import { addMessage } from 'src/store/messages/actions';
import { AUTHOR } from 'src/types';
import { FormMessage } from 'src/components/message';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);
  const dispath = useDispatch();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        dispath(
          addMessage(chatId, {
            author: AUTHOR.BOT,
            message: 'Im BOT',
          })
        );
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [chatId, messages, dispath]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <div className={style.App}>
        <main className={style.Wrapper}>
          <ChatList />
          <div className={style.WrapperMessage}>
            <MessageList messages={chatId ? messages[chatId] : []} />
            <FormMessage />
          </div>
        </main>
      </div>
    </>
  );
};
