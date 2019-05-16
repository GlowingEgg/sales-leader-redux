import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import './ControlScreen.css';

class ControlScreen extends Component {
    render() {
      return (
        <div className="ControlScreen">
          <div className = "Content">
            {/* If we're on mobile, put the title and description at the top */}
            <MediaQuery query = "(max-width: 1023px)">
              <div className = "ContentBox">
                <p className = "ContentTitle">Bigger top line</p>
                <p className = "ContentDescription">is the direct result. Liftoff's AI is singularly focused on maximizing team sales.</p>
              </div>
            </MediaQuery>
            <div className = "ControlImageBox">
              <img className = "ControlImage" src = "/landing-page-assets/YouAreInControl.png" alt = "Agent Chat"></img>
            </div>
            <div className = "ContentBox">
              {/* if we're on desktop, put the title and description on the side with the content */}
              <MediaQuery query = "(min-width: 1024px)">
                <p className = "ContentTitle">Bigger top line</p>
                <p className = "ContentDescription">is the direct result. Liftoff's AI is singularly focused on maximizing team sales.</p>
              </MediaQuery>
              <div className = "ContentItem">
                <img className = "ContentItemImage" src = "/landing-page-assets/ResultsDetailIcon.png" alt = "Results Icon" ></img>
                <div className = "ContentItemTextContainer">
                  <p className = "ContentItemTitle">Compounding results</p>
                  <p className = "ContentItemDescription">Your team learns and improves with every conversation. Now your tools can too.</p>
                </div>
              </div>
              <div className = "ContentItem">
                <img className = "ContentItemImage" src = "/landing-page-assets/DashboardDetailIcon.png" alt = "Dashboard Detail Icon" ></img>
                <div className = "ContentItemTextContainer">
                  <p className = "ContentItemTitle">Total Control</p>
                  <p className = "ContentItemDescription">Customize the models to match your business needs. Integrate with Salesforce, Intercom, LivePerson, or any of your current tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default ControlScreen;
