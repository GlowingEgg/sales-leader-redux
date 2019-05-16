import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import './BoostScreen.css';

class BoostScreen extends Component {
  render() {
    return (
      <div className = "BoostScreen">
        <div className = "NavBar">
          <div className = "Title">
            <img className = "TitleImage" src = "/landing-page-assets/LogoOutline.png" alt = "Sales Leader"></img>
            <p className = "TitleText">Liftoff</p>
          </div>
          {/* Render the nav links if we're on desktop */}
          <MediaQuery query = "(min-width: 1024px)">
            <div className = "NavLinks" >
              <p className = "NavLink" onClick = {() => this.props.onNavClick("future")} >What</p>
              <p className = "NavLink" onClick = {() => this.props.onNavClick("control")} >How</p>
              <p className = "NavLink" onClick = {() => this.props.onNavClick("advantage")} >Why</p>
              <p className = "NavLink" onClick = {() => this.props.onNavClick("getStarted")} >Sign Up</p>
            </div>
          </MediaQuery>
        </div>
        <div className = "BoostContent">
          <div className = "ContentTextContainer">
            <div className = "ContentTextBox">
              <p className = "ContentMainText">Give your sales team a boost</p>
              <p className = "ContentSubText">Liftoff's conversational AI learns from your top sales agents and gives real-time recommendations to maximize sales.</p>
              <div className = "ActionButton" onClick = {() => this.props.onNavClick("future")}>
                <p className = "ActionButtonText">Tell me more</p>
              </div>
            </div>
          </div>
          <div className = "ContentImageContainer">
            <img className = "BoostImage" src = "/landing-page-assets/Salesman.png" alt = "Salesman blasting off with jetpack"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default BoostScreen;
