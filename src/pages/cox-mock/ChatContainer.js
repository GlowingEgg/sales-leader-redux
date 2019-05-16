import React, {Component} from 'react';
import {ChatIncomingText, ChatOutgoingText} from './ChatText';
import './ChatContainer.css';

class ChatContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      messageHistory: []
    }
  }

  // called any time an event is detected in the chat input
  onUserTyped(event) {
    // set the message the Agent is composing
    this.setState({
    chatMessage: event.target.value
    })
  }

  // when the agent hits a key
  handleEnterKeyPress = (event) => {
    // if they hit enter
    if(event.key === 'Enter') {
      // submit the agent's message
      this.onSubmittedMessage();
    }
  }

  onSubmittedMessage(element) {
    // if the user has entered any text
    if(this.state.chatMessage.length > 0) {

      this.textArea.value="";

      // make a message with the chat message
      const message = {
        agentSent: false,
        message: this.state.chatMessage,
        time: ""
      };

      // reset the chatMessage so the input is blank again and update message history
      this.setState({
        chatMessage: "",
        messageHistory: [...this.state.messageHistory, message]
      });

      this.scrollToBottom();

    }
  }

  // scrolls the ChatContent to the bottom, showing the newest message
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return(
      <div className = "CoxChatContainer">
        <div className = "CoxChatContainerHeader">
          <img className = "CoxChatContainerChatIcon" src = "/cox-chat-assets/ChatBubble.png" alt = "Chat bubble"></img>
          <p className = "CoxChatContainerHeaderText">Brexton</p>
          <img className = "CoxChatContainerCloseButton" src = "/cox-chat-assets/CloseButton.png" alt = "Close chat"
            onClick = {this.props.onClose}></img>
        </div>
        <div className = "CoxChatContainerContent" >
          {
            // map the messages from message history into ChatText components
            this.state.messageHistory.map((message, index) => {
              // if the agent sent the message
              if(message.agentSent) {
                // produce a ChatIncomingText component
                return <ChatIncomingText key = {index} message = {message.message} />
              }
              // otherwise produce a ChatOutgoingText component
              else {
                return <ChatOutgoingText key = {index} message = {message.message} />
              }
            })
          }
          <div className = "MessagesEnd" ref={(el) => { this.messagesEnd = el; }}>
          </div>
        </div>
        <hr/>
        <div className = "CoxChatContainerInput">
          <img className = "CoxChatContainerPlusIcon" src = "/cox-chat-assets/PlusButton.png" alt = "Add attachments"></img>
          <textarea className="CoxChatInputText" ref = {el => this.textArea = el} rows="1" placeholder="Message Brexton"
            onChange={(event) => this.onUserTyped(event)} onKeyPress={this.handleEnterKeyPress}></textarea>
          <img className = "CoxChatContainerSendIcon" src = "/cox-chat-assets/SendButton.png" alt = "Send message"
            onClick = {() => this.onSubmittedMessage()}></img>
        </div>
      </div>
    );
  }
}

export default ChatContainer;
