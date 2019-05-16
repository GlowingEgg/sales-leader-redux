import React, {Component} from 'react';
import ChatContainer from './ChatContainer';
import './CoxChatScreen.css';

class CoxChatScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chatDisplayed: false
    }
  }

  showChat() {
    this.setState({
      chatDisplayed: ! this.state.chatDisplayed
    })
  }

  render() {
    return (
      <div className = "CoxChatScreen">
        <img className = "CoxScreenshot" src = "/cox-chat-assets/CoxScreenshot.png" alt = "Cox sales page screenshot"></img>
        {
          // if the chat should be displayed, show it and hide the prompt, otherwise do the opposite
          this.state.chatDisplayed
          ? <ChatContainer onClose = {() => this.showChat()}/>
          : (
            <div className = "SalesPromptCircle" onClick = {() => this.showChat()}>
              <img className = "SalesPromptAgentSilhouette" src = "/cox-chat-assets/AgentSilhouette.png" alt = "Agent silhouette"></img>
            </div>
          )
        }
      </div>
    );
  }
}

export default CoxChatScreen;
