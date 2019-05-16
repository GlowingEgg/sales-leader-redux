import React from 'react';
import './ChatHeader.css';

/**
* Stateless component for the header within the main chat.
* Receives props from the ChatContainer
*/
const ChatHeader = props => {
  return(
    <div className="ChatHeader">
      <div className="ChatHeaderNameRow">
        <p className="ChatHeaderName" align="left">{props.title}</p>
        <img className="ChatHeaderOptionsImage" src="/liftoff-assets/OptionsButton.png" alt="Options" />
      </div>
      <div className="ChatHeaderButtonsRow">
        <img className="ChatHeaderButtons" src="/liftoff-assets/UserIcon.png" alt="User" />
        <img className="ChatHeaderButtons" src="/liftoff-assets/OSIcon.png" alt="OS" />
        <img className="ChatHeaderButtons" src="/liftoff-assets/LocationIcon.png" alt="Location" />
        <img className="ChatHeaderButtons" src="/liftoff-assets/ScreenIcon.png" alt="Screen" />
      </div>
    </div>
  );
}

export default ChatHeader;
