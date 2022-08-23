import React from 'react';

function Message(props) {
  return (
    <div className="message">
        <p>This is message from {props.message}</p>
    </div>
  );
}

export default Message;
