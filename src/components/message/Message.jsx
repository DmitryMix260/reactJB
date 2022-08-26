import React from 'react';

export function Message({message}) {
  return(
  <>
    <div className="message">
      <p>This is message from {message}</p>
    </div>
  </>)
}


