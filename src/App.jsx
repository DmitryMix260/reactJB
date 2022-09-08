import { useEffect, useState } from 'react';
import './App.css';
import { AddMessage } from './components/message/AddMessage.jsx';
import { MessageList } from './components/messageList/MessageList.jsx';

export function App() {
  const [messages, setMessages] = useState([]);
  const addMessage = (newMessage) => {
    setMessages((prevMesages) => [...prevMesages, newMessage]);
  };
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].autor !== 'BOT') {
      const timeout = setTimeout(() => {
        addMessage({
          autor: 'BOT',
          message: 'Im bot',
        });
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [messages]);

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
}
