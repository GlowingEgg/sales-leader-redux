import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatHeader from '../components/ChatHeader';
import ChatContent from '../components/ChatContent';
import ChatInput from '../components/ChatInput';
import {updateConversation} from '../store/actions';
import './ChatContainer.css';

/**
* Container component for the main central chat.
* Loads the main content of the chat - the header, content, and input.
*/
class ChatContainer extends Component {

  render() {
    const conversation = this.props.conversations.find((conversation) =>
      conversation.sessionId === this.props.selectedConversation
    );
    return(
      <div className="ChatContainer">
        <ChatHeader title = {conversation.title} />
        <ChatContent messageHistory = {conversation.messageHistory} />
        <ChatInput selectedConversation = {this.props.selectedConversation} onNewMessage = {this.props.addNewMessage} />
      </div>
    );
  }
}

// grab the conversations and selectedConversation from state and turn them into props
const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
    selectedConversation: state.selectedConversation
  };
}

const mapDispatchToProps = (dispatch) => ({
  addNewMessage(selectedConversation, message) {
    // dispatch the fetchSuggestions thunk.
    dispatch(updateConversation(selectedConversation, message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
