import { useState } from 'react';
import './App.css';
import { Message } from './components/message/Message.jsx';
import { TimerComp } from './components/timer/TimerComp.jsx';
import { TimerClass } from './class/timer/TimerClass.jsx';

export function App() {
  const [message, setMessage] = useState('geek');
  const arr = ['ivanov', 'petrov', 'sidorov'];

  const handleChangeName = (ev) => {
    setMessage(ev.target.value)
    };

  return (
    <div className="App">
      <header className="App-header">
        <p>My first page React</p>
      </header>
      <main>
        <div> 
          <p>Print message</p> 
        </div>
        <input type='text' onChange={handleChangeName} />  
          <Message message={message} />
          <TimerComp />
          <TimerClass />
        <ul>
          {arr.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </main>
    </div>
  );
}
