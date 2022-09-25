import React, { FC, useEffect, useState, useRef, memo } from 'react';
import { Button } from '@mui/material';
import { AUTHOR } from 'src/types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessage } from 'src/store/messages/actions';

export const FormMessage: FC = memo(() => {
  const [message, setMessage] = useState('');
  const { chatId } = useParams();
  const dispath = useDispatch();
  const handleAddMessage = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      dispath(
        addMessage(chatId, {
          author: AUTHOR.USER,
          message,
        })
      );
    }
  };
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  return (
    <>
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
