import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './ChatInput.css';

/**
* Component for the agent chat input within the ChatContainer
* Doesn't use Redux state but maintains a variable within React state...
* ... for dealing with the input field.
*/
class ChatInput extends Component {

  // constructor for initializing state
  constructor(props) {
    super(props);

    // initialize the state
    // agentMessage is the queued up message the agent is typing
    this.state = {
      agentMessage: "",
    }
  }

  // called any time an event is detected in the Agent input
  onAgentTyped(event) {
    // set the message the Agent is composing
    this.setState({
    agentMessage: event.target.value
    })
  }

  // when an Agent hits send
  onAgentSubmittedMessage(element) {
    // if the Agent has entered any text
    if(this.state.agentMessage.length > 0) {

      this.textArea.value="";

      // make a message with the agent message
      const message = {
        agentSent: true,
        message: this.state.agentMessage,
        time: ""
      };

      // call back to the ChatContainer with the message
      this.props.onNewMessage(this.props.selectedConversation, message);

      // reset the agentMessage so the input is blank again
      this.setState({
        agentMessage: ""
      });

    }
  }

  // when the agent hits a key
  handleEnterKeyPress = (event) => {
    // if they hit enter
    if(event.key === 'Enter') {
      // submit the agent's message
      this.onAgentSubmittedMessage();

      // don't create a newline
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="ChatInput">
        <img className="AttachmentsIcon" src="/liftoff-assets/PaperclipIcon.png" alt="Attachments"/>
        <TextareaAutosize className="ChatInputText" ref = {el => this.textArea = el} value = {this.state.agentMessage} placeholder="Reply to Cinquanta"
          onChange={(event) => this.onAgentTyped(event)} onKeyPress={this.handleEnterKeyPress}></TextareaAutosize>
        <p className="ChatInputSend" onClick={() =>
            this.onAgentSubmittedMessage()} >Send</p>
      </div>
    );
  }
}

export default ChatInput;
