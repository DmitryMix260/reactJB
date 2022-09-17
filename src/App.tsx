import { FC, useEffect, useState, useCallback } from 'react';
import './App.css';
import { AddMessage } from 'components/message';
import { MessageList } from 'components/messageList';
import { AUTHOR, Message, Messages } from 'src/types';

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>([]);
  const addMessage = useCallback((newMessage: Message) => {
    setMessages((prevMesages) => [...prevMesages, newMessage]);
  }, []);
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author !== 'BOT') {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.BOT,
          message: 'Im bot',
        });
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [messages, addMessage]);

  return (
    <div className="App">
      <header className="App-header">
        <p>My first page React</p>
      </header>
      <main>
        <AddMessage addMessage={addMessage} />
        <MessageList messages={messages} />
      </main>
    </div>
  );
};
