import React, {Component} from 'react';
import ChatContainer from './ChatContainer';
import SuggestionsContainer from './SuggestionsContainer';
import './ChatClient.css';

/**
* Container component for the entire chat.
* Includes the main ChatContainer and also the SuggestionsContainer.
*/
class ChatClient extends Component {
  render() {
    return (
      <div className="ChatClient">
        <ChatContainer/>
        <SuggestionsContainer/>
      </div>
    );
  }
}

export default ChatClient;
