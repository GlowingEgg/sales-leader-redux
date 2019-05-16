import React from 'react';
import './Suggestion.css';

/**
* Stateless component for an individual suggestion in the SuggestionsContainer
* Receives props from the SuggestionsContainer and creates every element...
* ...having to do with an individual suggestion.
*/
const Suggestion = props => {
  return (
    <div className="Suggestion">
      <div className="SuggestionContent" onClick = {() => {
          // make a message out of the suggestion
          const message = {
            agentSent: true,
            message: props.suggestion,
            time: ""
          }
          // call back with the message
          props.onClick(props.selectedConversation, message)}}>
        <p className="SuggestionContentText" align="left">{props.suggestion}</p>
        <p className="SuggestionContentFooterText" align="left">Confidence: {props.confidence}</p>
      </div>
      <img className="SuggestionThumb" src="/liftoff-assets/DislikeIconOpen.png" alt="Dislike"
        onMouseOver={e => (e.currentTarget.src = "/liftoff-assets/DislikeIconFilled.png")}
        onMouseOut={e => (e.currentTarget.src = "/liftoff-assets/DislikeIconOpen.png")}></img>
    </div>
  );
}

export default Suggestion;
