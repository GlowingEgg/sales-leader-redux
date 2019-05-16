//               _
//  _ __ ___  __| |_   _  ___ ___ _ __ ___
// | '__/ _ \/ _` | | | |/ __/ _ \ '__/ __|
// | | |  __/ (_| | |_| | (_|  __/ |  \__ \
// |_|  \___|\__,_|\__,_|\___\___|_|  |___/
//
// reducer functions that accept actions
// and use them to return a new updated state

import { combineReducers } from 'redux';
import * as Actions from './actions';

// makes changes to the conversations part of state
// original state will be an array of conversations
const conversations = (state = [], action) => {

  // make a newState variable to hold the soon to be updated state
  let newState;

  // check the action type
  switch(action.type) {
    // if it's the new conversation actions
    case Actions.ADD_NEW_CONVERSATION_ACTION:
      // make a new state array with the old state and the new conversation tacked on
      newState = [...state, action.conversation];
      return newState;

    // if it's the new message action
    case Actions.ADD_NEW_MESSAGE_ACTION:
      // make new state with the selected conversation updated
      // map through every conversation in the state array
      newState = state.map((thisConversation) =>
        // if the action's conversation matches the current conversation
        thisConversation.sessionId === action.conversationId ?
        // tell conversation() to handle it
        conversation(thisConversation, action) :
        // otherwise just tack the selected conversation on as is
        thisConversation
      );
      // return the newly created state
      return newState;

    // if it's an unrecognized action type, just return the og state
    default:
      return state;
  }
}

// makes changes to a single conversation in state
// original state will be a single conversation
const conversation = (state = {}, action) => {

  // make a newState variable to hold the soon to be updated state
  let newState;

  // check the action type
  switch(action.type) {
    // if it's the new message action
    case Actions.ADD_NEW_MESSAGE_ACTION:
      // make a new messageHistory with the old messageHistory and the new message tacked on
      const messageHistory = [...state.messageHistory, action.message];
      // make new state using the old state, but with the updated messageHistory
      newState = {
        ...state,
        messageHistory
      }
      // return the newly created state
      return newState;

    // if it's an unrecognized action type, just return the og state
    default:
      return state;
  }
}

// updates the suggestions in state with updated suggestions for a specific conversation
// original state will be the suggestions object in state, with suggestions groups indexed by conversationId
const suggestions = (state = {}, action) => {

  // make a newState variable to hold the soon to be updated state
  let newState;

  // check the action type
  switch(action.type) {
    // if it's an update suggestions action
    case Actions.UPDATE_SUGGESTIONS_ACTION:
      // make new state using the old state, but with the selected conversation's...
      // ...suggestions updated from the action's suggestions
      newState = {
        ...state
      }
      newState[action.conversationId] = action.suggestions;
      return newState;

    // if it's an unrecognized action type, just return the og state
    default:
      return state;
  }
}

// updates the selectedConversation in state
// original state will be a number identifying the currently selected conversation by conversationId
const selectedConversation = (state = 0, action) => {

  // make a newState variable to hold the soon to be updated state
  let newState;

  // check the action type
  switch(action.type) {
    // if it's the select conversation action
    case Actions.SELECT_CONVERSATION_ACTION:
      newState = action.conversationId;
      return newState;

    // if it's an unrecognized action type, just return the og state
    default:
      return state;
  }
}

// updates the agentInfo object in state
// original state will be the current collection of agentInfo
const agentInfo = (state = {}, action) => {
  let newState;

  // check the action type
  switch(action.type) {
    // if it's the update agent info action
    case Actions.UPDATE_AGENT_INFO_ACTION:
      // just return a new agentInfo state object taken from the action
      newState = action.agentInfo;
      return newState;

    // if it's an unrecognized action type, just return the og state
    default:
      return state;
  }
}

const leaderboard = (state = [], action) => {
  let newState;

  //check the action type
  switch(action.type) {
    // if it's the update leaderboard action
    case Actions.UPDATE_LEADERBOARD_ACTION:
      // return the leaderboard from the action as the new state
      newState = action.leaderboard;
      return newState;

      // if it's an unrecognized action type, just return the og state
      default:
        return state;
  }
}

// updates the agentStatus in state
// original state will be a boolean indicating if the agent is online
const agentIsOnline = (state = true, action) => {

  // make a newState variable to hold the soon to be updated state
  let newState;

  // check the action type
  switch(action.type) {
    // if it's the update agent status action
    case Actions.UPDATE_AGENT_STATUS_ACTION:
      // set the state to the value of the flag in the action
      newState = action.agentIsOnline;
      return newState;

    // if it's an unrecognized action type, just return the og state
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  conversations,
  suggestions,
  selectedConversation,
  agentInfo,
  leaderboard,
  agentIsOnline
});

export default rootReducer;
