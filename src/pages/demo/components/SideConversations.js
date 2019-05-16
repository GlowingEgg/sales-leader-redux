import React from 'react';
import './SideConversations.css';

/**
* Stateless component for the selected conversation in the SideConversationBar.
* Receives props from the SideConversationBar container.
*/
const SideConversationSelected = props => {
  return (
    <div className="SideConversationSelected">
      <div className="SideConversationTitle">
        <p className="SideConversationTitleText" align="left">{props.conversation.title}</p>
        <p className="SideConversationTitleTime">{props.conversation.timeSinceLastMessage}</p>
      </div>
      <div className="SideConversationContent">
        <p className="SideConversationContentText" align="left">{props.conversation.messageHistory[props.conversation.messageHistory.length - 1].message}</p>
      </div>
    </div>
  );
}

/**
* Stateless component for a non-selected conversation in the SideConversationBar.
* Receives props from the SideConversationBar container.
*/
const SideConversation = props => {
  return (
    <div>
      <div className="SideConversation" onClick = {() =>
        props.selectConversation(props.conversation.sessionId)}>
        <div className="SideConversationTitle">
          <p className="SideConversationTitleText" align="left">{props.conversation.title}</p>
          <p className="SideConversationTitleTime">{props.conversation.timeSinceLastMessage}</p>
        </div>
        <div className="SideConversationContent">
          <p className="SideConversationContentText" align="left">{props.conversation.messageHistory[props.conversation.messageHistory.length - 1].message}</p>
        </div>
      </div>
    </div>
  );
}

export {SideConversation, SideConversationSelected};
