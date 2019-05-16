import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import './FutureScreen.css';

class BoostScreen extends Component {
  render() {
    return (
      <div className="FutureScreen">
        <div className = "FutureContent">
          { /* On mobile the title and description need to go at the top */ }
          <MediaQuery query = "(max-width: 1023px)">
            <div className = "FutureTextBox">
              <p className = "FutureTextTitle">The future of sales</p>
              <p className = "FutureTextDescription">is about bridging the performance gap. Your best performers have knowledge to share but not time. Let's fix that.</p>
            </div>
          </MediaQuery>
          <div className = "FutureImageBox">
            <img className = "FutureMainImage" src = "/landing-page-assets/ChatRecommendations.png" alt = "Agent Chat"></img>
          </div>
          <div className = "FutureTextBox">
            { /* On desktop the title and description need to go here with the rest of the content */ }
            <MediaQuery query = "(min-width: 1024px)">
              <p className = "FutureTextTitle">The future of sales</p>
              <p className = "FutureTextDescription">is about bridging the performance gap. Your best performers have knowledge to share but not time. Let's fix that.</p>
            </MediaQuery>
            <div className = "FutureTextItem">
              <img className = "FutureTextItemImage" src = "/landing-page-assets/AgentDetailIcon.png" alt = "Agent Detail Icon" ></img>
              <div className = "FutureTextItemTextContainer">
                <p className = "FutureTextItemTitle">Train while selling</p>
                <p className = "FutureTextItemDescription">Conversational AI enables our assistant to coach new hires how to convert like pros, by converting like pros.</p>
              </div>
            </div>
            <div className = "FutureTextItem">
              <img className = "FutureTextItemImage" src = "/landing-page-assets/BestAgentDetailIcon.png" alt = "Agent Detail Icon" ></img>
              <div className = "FutureTextItemTextContainer">
                <p className = "FutureTextItemTitle">Superhuman volume</p>
                <p className = "FutureTextItemDescription">Our multi-thread interface and contextual recommendations allow agents to handle more conversations than humanly possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoostScreen;
