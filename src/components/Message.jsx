import React from 'react';

function Message(props) {
  return (
    <div className="message">
        <p>This is message from {props.name}</p>
    </div>
  );
}

export default Message;
