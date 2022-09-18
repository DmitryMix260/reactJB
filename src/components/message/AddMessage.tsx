import React, { FC, useEffect, useState, useRef, memo } from 'react';
import { Button } from '@mui/material';
import { AUTHOR, Message } from 'src/types';

interface AddMessageProps {
  addMessage: (msg: Message) => void;
}

export const AddMessage: FC<AddMessageProps> = memo(({ addMessage }) => {
  const [message, setMessage] = useState('');
  const handleAddMessage = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addMessage({
      author: AUTHOR.USER,
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
        <input
          type="text"
          value={message}
          placeholder="Type message"
          onChange={(ev) => setMessage(ev.target.value)}
          role="input"
          ref={inputFocus}
        />
        <Button disabled={!message} role="button" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
});
