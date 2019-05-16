import React from 'react';
import './ChatText.css';

/**
* Stateless component producing an individual incoming message.
* Receives props from the ChatContent component.
*/
const ChatIncomingText = props => {
  return (
    <div className="ChatTextBoxIncoming">
      <p className="ChatTextIncomingText" align="left">{props.message}</p>
    </div>
  );
}

/**
* Stateless component producing an individual outgoing message.
* Receives props from the ChatContent component.
*/
const ChatOutgoingText = props => {
  return (
    <div className="ChatTextBoxOutgoing">
      <p className="ChatTextOutgoingText" align="left">{props.message}</p>
    </div>
  );
}

export {ChatIncomingText, ChatOutgoingText};
