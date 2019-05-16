import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectConversation, updateAgentStatus} from '../store/actions';
import {SideConversation, SideConversationSelected} from '../components/SideConversations';
import AgentStatusSelector from '../components/AgentStatusSelector';
import './SideConversationBar.css';

/**
* Container component for all things in the side bar.
*/
class SideConversationBar extends Component {
  render() {
    return (
      <div className="SideConversationBar">
        <AgentStatusSelector agentIsOnline = {this.props.agentIsOnline}
          updateAgentStatus = {this.props.updateAgentStatus} />
        <div className="ConversationList">
          {
            // map each conversation into SideConversation components
            this.props.conversations.map((conversation) => {

              console.log("conversation" + conversation);
              // if this conversation is the selected one
              if(conversation.sessionId === this.props.selectedConversation) {
                // produce a SideConversationSelected component
                return (
                  <SideConversationSelected key = {conversation.sessionId} conversation = {conversation} />
                )
              }

              // otherwise produce a normal SideConversation component
              else {
                return (
                  <SideConversation key = {conversation.sessionId} conversation = {conversation}
                    selectConversation = {this.props.selectConversation} />
                )
              }

            })
          }
        </div>
      </div>
    );
  }
}

// grab the conversations and selectedConversation from state and turn them into props
const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
    selectedConversation: state.selectedConversation,
    agentIsOnline: state.agentIsOnline
  };
}

// const mapDispatchToProps = (dispatch) => ({
//   selectConversation(conversationId) {
//     dispatch(selectConversation(conversationId));
//   }
// });
// See the shorthand below- for most common cases, you can just send an *object* of
// the functions you need to bind. https://stackoverflow.com/a/37328548/1922780

export default connect(
  mapStateToProps,
  { selectConversation, updateAgentStatus }
)(SideConversationBar);
