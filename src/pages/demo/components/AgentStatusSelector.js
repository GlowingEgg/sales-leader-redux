import React, {Component} from 'react';
import './AgentStatusSelector.css';

/**
* The component for the dropdown that facilitates...
* ...the agent going online/offline
**/
class AgentStatusSelector extends Component {

  constructor(props) {
    // call the superclass' constructor
    super(props);
    // set a flag in state for if the dropdown is dropped tf down
    this.state = {
      dropdownOpen: false,
    }
  }

  // either opens or closes the dropdown
  dropDown() {
    this.setState({
      dropdownOpen: ! this.state.dropdownOpen
    })
  }

  // switches the agent's status to online
  goOnline() {
    // close the dropdown
    this.dropDown();
    // call back to the parent to say we should go online
    this.props.updateAgentStatus(true);
  }

  // switches the agent's status to offline
  goOffline() {
    // close the dropdown
    this.dropDown();
    // call back to the parent to say we should go offline
    this.props.updateAgentStatus(false);
  }

  render() {
    // if the agent is currently online
    if(this.props.agentIsOnline) {
      // make an AgentStatusSelector with the an online AgentStatusSelectorItem at the top
      return (
        <div className="AgentStatusSelector">
          <div className="AgentStatusSelectorItem" onClick = {() =>
            this.dropDown()}>
            <span className="OnlineDot"></span>
            <p className="AgentStatusSelectorText" align="left">Online</p>
            {
              // if the dropdown is open, use the reversed dropdown arrow
              this.state.dropdownOpen ? <img src="/liftoff-assets/DropdownArrowReversed.png" alt="Status List"></img> :
              // otherwise use the normal one
              <img src="/liftoff-assets/DropdownArrow.png" alt="Status List"></img>
            }
          </div>
          {
            // if the dropdown should be open, add the secondary offline item
            this.state.dropdownOpen && (
              <div className="AgentStatusSelectorSecondaryItem" onClick = {() =>
                this.goOffline()}>
                <span className="OfflineDot"></span>
                <p className="AgentStatusSelectorText" align="left">Offline</p>
              </div>
            )
          }
        </div>
      )
    }
    // otherwise make an AgentStatusSelector with the an offline AgentStatusSelectorItem at the top
    else {
      return (
        <div className="AgentStatusSelector">
          <div className="AgentStatusSelectorItem" onClick = {() =>
            this.dropDown()}>
            <span className="OfflineDot"></span>
            <p className="AgentStatusSelectorText" align="left">Offline</p>
            {
              // if the dropdown is open, use the reversed dropdown arrow
              this.state.dropdownOpen ? <img src="/liftoff-assets/DropdownArrowReversed.png" alt="Status List"></img> :
              // otherwise use the normal one
              <img src="/liftoff-assets/DropdownArrow.png" alt="Status List"></img>
            }
          </div>
          {
            // if the dropdown should be open, add the secondary online item
            this.state.dropdownOpen && (
              <div className="AgentStatusSelectorSecondaryItem" onClick = {() =>
                this.goOnline()}>
                <span className="OnlineDot"></span>
                <p className="AgentStatusSelectorText" align="left">Online</p>
              </div>
            )
          }
        </div>
      )
    }
  }
}

export default AgentStatusSelector;
