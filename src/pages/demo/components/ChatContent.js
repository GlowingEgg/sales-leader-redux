import React, {Component} from 'react';
import {ChatIncomingText, ChatOutgoingText} from './ChatText';
import './ChatContent.css';

/**
* Stateless component for the content of the main chat- the messages.
* Receives props from the ChatContainer.
*/
class ChatContent extends Component {

  // when the component first mounts
  componentDidMount() {
    // scroll to the bottom
    this.scrollToBottom();
  }

  // when the component updates with new props
  componentDidUpdate() {
    // scroll to the bottom
    this.scrollToBottom();
  }

  // scrolls the ChatContent to the bottom, showing the newest message
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div className="ChatContent">
        {
          // map the messages from message history into ChatText components
          this.props.messageHistory.map((message, index) => {
            // if the agent sent the message
            if(message.agentSent) {
              // protduce a ChatOutgoingText component
              return <ChatOutgoingText key = {index} message = {message.message} />
            }
            // otherwise produce a ChatIncomingText component
            else {
              return <ChatIncomingText key = {index} message = {message.message} />
            }
          })
        }
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    )
  }
}

export default ChatContent;
