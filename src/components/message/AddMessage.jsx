import { useState } from 'react';

export const AddMessage = ({ addMessage }) => {
  const [message, setMessage] = useState('');
  const handleAddMessage = (ev) => {
    ev.preventDefault();
    addMessage({
      autor: 'user',
      message,
    });
    setMessage('');
  };

  return (
    <>
      <form action="#" onSubmit={handleAddMessage} data-testid="addmessage">
        <div>
          <p>Print message</p>
        </div>
        <input
          type="text"
          value={message}
          placeholder="Type message"
          onChange={(ev) => setMessage(ev.target.value)}
          role="input"
        />
        <button disabled={!message} role="button">
          Submit
        </button>
      </form>
    </>
  );
};
