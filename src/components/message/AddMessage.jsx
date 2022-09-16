import { useEffect, useState, useRef } from 'react';
import { Button, TextField } from '@mui/material';

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
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  return (
    <>
      <div>
        <p>Print message</p>
      </div>
      <form action="#" onSubmit={handleAddMessage} data-testid="addmessage">
        <TextField
          type="text"
          value={message}
          placeholder="Type message"
          onChange={(ev) => setMessage(ev.target.value)}
          role="input"
          ref={inputFocus}
          autoFocus={true}
        />
        <Button disabled={!message} role="button" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};
