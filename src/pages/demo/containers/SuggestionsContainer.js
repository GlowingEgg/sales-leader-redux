import React, {Component} from 'react';
import {connect} from 'react-redux';
import Suggestion from '../components/Suggestion';
import {updateConversation} from '../store/actions';
import './SuggestionsContainer.css';

/**
* Container component for all things in the suggestions area
*/
class SuggestionsContainer extends Component {

  render() {
    const selectedSuggestions = this.props.suggestions[this.props.selectedConversation];
    return(
      <div className="SuggestionsContainer">
        <p className="SuggestionsContainerTitle" align="left">Suggestions</p>
        {
          // map all the suggestions into Suggestion components
          selectedSuggestions.map((suggestion, index) =>
            <Suggestion key = {index} onClick = {this.props.addNewMessage}
              selectedConversation = {this.props.selectedConversation}
              suggestion = {suggestion.suggestion} confidence = {suggestion.confidence}/>
          )
        }
      </div>
    );
  }
}

// grab the suggestions and selectedConversation from state and turn them into props
const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
    selectedConversation: state.selectedConversation
  };
}

const mapDispatchToProps = (dispatch) => ({
  addNewMessage(selectedConversation, message) {
    dispatch(updateConversation(selectedConversation, message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsContainer);
