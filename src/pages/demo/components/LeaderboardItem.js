import React from 'react';
import './LeaderboardItem.css';

const LeaderboardItem = props => {
  return (
    <div className="leaderboard-item" key={props.employee.name}>
      <p className="leaderboard-item-text leaderboard-item-rank">{props.employee.rank}</p>
      <span className="leaderboard-agent-status"></span>
      <p className="leaderboard-item-text leaderboard-item-employeeName">{props.employee.name}</p>
      <div className="leaderboard-stats-container">
        <img className="leaderboard-sales-image" src="/liftoff-assets/SaleIndicator.png" alt="Sales"></img>
        <p className="leaderboard-item-text">{props.employee.sales}</p>
      </div>
      <div className="leaderboard-stats-container">
        <img className="leaderboard-conversion-image" src="/liftoff-assets/ConversionIcon.png" alt="Conversion rate"></img>
        <p className="leaderboard-item-text">{props.employee.conversionRate}</p>
      </div>
    </div>
  );
}

export default LeaderboardItem;
