import React, {Component} from 'react';
import './GetStartedScreen.css';

class GetStartedScreen extends Component {

  openDemoEmail() {

  }

  render() {
    return (
      <div className = "GetStartedScreen">
        <div className="GetStartedContent">
          <div className = "GetStartedImageBox">
            <img className = "GetStartedImage" src = "/landing-page-assets/SalesWoman.png" alt = "Sales Woman"></img>
            <img className = "GetStartedLargeImage" src = "/landing-page-assets/SalesWomanLongTail.png" alt = "Sales Woman"></img>
          </div>
          <div className = "GetStartedContentTextBox">
            <p className = "GetStartedContentMainText">Boost your sales with Liftoff today</p>
            <p className = "GetStartedContentSubText">{"Want to see Liftoff in action?"}</p>
            <a className = "ActionButton GetStartedActionButton" href = {"mailto:demo@liftoff.ai?subject=Liftoff%20Demo"}>
              <p className = "ActionButtonText">Request a demo</p>
            </a>
          </div>
        </div>
        <div className = "GetStartedBottomContainer">
          <a className = "GetStartedBottomTextContact" href = {"mailto:team@liftoff.ai"}>{"©2018 liftoff.ai"}</a>
          <p className = "GetStartedBottomText"></p>
        </div>
      </div>
    );
  }
}

export default GetStartedScreen;
