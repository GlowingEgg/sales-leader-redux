import React, {Component} from 'react';
import {connect} from 'react-redux';
import LeaderboardItem from '../components/LeaderboardItem';
import './Header.css';

/**
* Standalone component for the Header/toolbar
*/
class Header extends Component {

  constructor(props) {
    // call the superclass' constructor
    super(props);
    // set a flag in state for if the leaderboard should be showing or not.
    this.state = {
      showLeaderboard: false,
      showAccountDropdown: false
    }
  }

  // shows or hides the leaderboard based on its current status in state
  showLeaderboard() {
    // reverse the flag
    this.setState(
      {
        showAccountDropdown: false,
        showLeaderboard: ! this.state.showLeaderboard
      }
    );
  }

  // shows or hides the account dropdown based on its current status in state
  showAccountDropdown() {
    // reverse the flag
    this.setState(
      {
        showLeaderboard: false,
        showAccountDropdown: ! this.state.showAccountDropdown
      }
    );
  }

  render() {
    return (
      <div className="Header">
        <img className="HeaderLogo" src="/liftoff-assets/UpArrows.png" alt="Sales Leader"/>
        <p className="HeaderTitle" align="left">Sales Leader</p>
        <p className="HeaderText" onClick = { () => this.showLeaderboard() }>Leaderboard</p>
        {
          // if the leaderboard should be shown, show it.
          this.state.showLeaderboard && (
            <div className="Leaderboard">
              {
                // map the leaderboard into leaderboard items
                this.props.leaderboard.map((employee) =>
                  <LeaderboardItem employee = {employee} />
                )
              }
            </div>
          )
        }
        <p className="HeaderText" onClick = { () => this.showAccountDropdown() }>Account</p>
        {
          // if the account dropdown should be shown, show it.
          this.state.showAccountDropdown && (
            <div className="AccountDropdown">
              <p className="AccountDropdownBigText">{this.props.agentInfo.name}</p>
              <div className="AccountDropdownContentRow">
                <div className="AccountDropdownContentColumn">
                  <p className="AccountDropdownBigText">{this.props.agentInfo.sales}</p>
                  <p className="AccountDropdownSmallText">Sales</p>
                </div>
                <div className="AccountDropdownContentColumn">
                  <p className="AccountDropdownBigText">{this.props.agentInfo.conversionRate + "%"}</p>
                  <p className="AccountDropdownSmallText">Conversion</p>
                </div>
              </div>
              <hr class = "AccountDropdownHorizontalRule"></hr>
              <div className="AccountDropdownSettingsRow">
                <img className="AccountDropdownSettingsImage" src="/liftoff-assets/SettingsIcon.png" alt="Settings"></img>
                <p className="AccountDropdownSettingsText">Settings</p>
              </div>
              <div className="AccountDropdownSignoutRow">
                <img className="AccountDropdownSettingsImage" src="/liftoff-assets/LogoutIcon.png" alt="Sign out"></img>
                <p className="AccountDropdownSettingsText">Sign Out</p>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

// grab the agentInfo from state and turn it into props.agentInfo
const mapStateToProps = (state) => {
  return {
    agentInfo: state.agentInfo,
    leaderboard: state.leaderboard
  };
}

export default connect(mapStateToProps, null)(Header);
