import React, {Component} from 'react';
import './AdvantageScreen.css'

class AdvantageScreen extends Component {
  render() {
    return (
      <div className = "AdvantageScreen">
        <div className = "AdvantageContent">
          <p className = "AdvantageTitle">Bottom line: results</p>
          <div className = "AdvantageContentRow">
            <div className = "AdvantageContentItem">
              <img className = "AdvantageContentImage" src = "/landing-page-assets/SalesAdvantageIcon.png" alt = "Sales Advantage"></img>
              <div className = "AdvantageContentItemText">
                <p className = "AdvantageContentItemTitleText">More Sales</p>
                <p className = "AdvantageContentItemSubText">Increase conversion rate and total sales. We guarantee your time and money back if not.</p>
              </div>
            </div>
            <div className = "AdvantageContentItem">
              <img className = "AdvantageContentImage" src = "/landing-page-assets/CustomerAdvantageIcon.png" alt = "Customer Advantage"></img>
              <div className = "AdvantageContentItemText">
                <p className = "AdvantageContentItemTitleText">Happier Customers</p>
                <p className = "AdvantageContentItemSubText">Dazzle clients like the whole team is participating on every conversation.</p>
              </div>
            </div>
          </div>
          <div className = "AdvantageContentRow">
            <div className = "AdvantageContentItem">
              <img className = "AdvantageContentImage" src = "/landing-page-assets/TimeAdvantageIcon.png" alt = "Growth Advantage"></img>
              <div className = "AdvantageContentItemText">
                <p className = "AdvantageContentItemTitleText">Days Saved</p>
                <p className = "AdvantageContentItemSubText">All the time you would've spent onboarding, retaining, and reciprocating is spent <i>selling</i>.</p>
              </div>
            </div>
            <div className = "AdvantageContentItem">
              <img className = "AdvantageContentImage" src = "/landing-page-assets/GrowthAdvantageIcon.png" alt = "Growth Advantage"></img>
              <div className = "AdvantageContentItemText">
                <p className = "AdvantageContentItemTitleText">Motivated Team</p>
                <p className = "AdvantageContentItemSubText">Set your team up for success with software they <i>enjoy</i> being in all day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvantageScreen;
