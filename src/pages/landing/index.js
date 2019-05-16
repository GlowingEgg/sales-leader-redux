import React, {Component} from 'react';
import BoostScreen from './BoostScreen';
import FutureScreen from './FutureScreen';
import ControlScreen from './ControlScreen';
import AdvantageScreen from './AdvantageScreen';
import GetStartedScreen from './GetStartedScreen';
import './App.css';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    
    // initialize intercom
    window.Intercom("boot", {
      app_id: "bhfx1oqj"
    });
  }

  // when a navigation link is clicked in the BoostScreen component
  onNavClick = (navTitle) => {
    // check which link was clicked
    switch(navTitle) {

      // if it was the link to the FutureScreen
      case "future":
        // scroll to the div at the top of it
        this.futureScreen.scrollIntoView({ block: "start", behavior: "smooth" });
        break;

      // if it was the link to the ControlScreen
      case "control":
        // scroll to the div at the top of it
        this.controlScreen.scrollIntoView({ block: "start", behavior: "smooth" });
        break;

      // if it was the link to the AdvantageScreen
      case "advantage":
        // scroll to the div at the top of it
        this.advantageScreen.scrollIntoView({ block: "start", behavior: "smooth" });
        break;

      // if it was the link to the GetStartedScreen
      case "getStarted":
        // scroll to the div at the top of it
        this.getStartedScreen.scrollIntoView({ block: "start", behavior: "smooth" });
        break;

      // if it's none of these then what the hell
      default:
        break;
    }
  }

  render() {
    return(
      <div className = "LandingPage">
        <BoostScreen onNavClick = {this.onNavClick} />
        <div ref = { (element) => {this.futureScreen = element;} }></div>
        <FutureScreen/>
        <div ref = { (element) => {this.controlScreen = element;} }></div>
        <ControlScreen/>
        <div ref = { (element) => {this.advantageScreen = element;} }></div>
        <AdvantageScreen/>
        <div ref = { (element) => {this.getStartedScreen = element;} }></div>
        <GetStartedScreen/>
      </div>
    );
  }
}

export default LandingPage;
