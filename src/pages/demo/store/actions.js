//             _   _
//   __ _  ___| |_(_) ___  _ __  ___
//  / _` |/ __| __| |/ _ \| '_ \/ __|
// | (_| | (__| |_| | (_) | | | \__ \
//  \__,_|\___|\__|_|\___/|_| |_|___/
//
// a number of functions that create actions for updating redux state

// ACTION TYPES
export const ADD_NEW_CONVERSATION_ACTION = 'ADD_NEW_CONVERSATION';
export const ADD_NEW_MESSAGE_ACTION = 'ADD_NEW_MESSAGE';
export const UPDATE_SUGGESTIONS_ACTION = 'UPDATE_SUGGESTIONS';
export const SELECT_CONVERSATION_ACTION = 'SELECT_CONVERSATION';
export const UPDATE_AGENT_INFO_ACTION = 'UPDATE_AGENT_INFO';
export const UPDATE_LEADERBOARD_ACTION = 'UPDATE_LEADERBOARD';
export const UPDATE_AGENT_STATUS_ACTION = 'UPDATE_AGENT_STATUS';

// ACTION CREATORS

// create an ADD_NEW_CONVERSATION action
export const addNewConversation = conversation => {
  console.log(ADD_NEW_CONVERSATION_ACTION);
  return {
    type: ADD_NEW_CONVERSATION_ACTION,
    conversation
  }
}

// create an ADD_NEW_MESSAGE action
export const addNewMessage = (conversationId, message) => {
  console.log(ADD_NEW_MESSAGE_ACTION);
  return {
    type: ADD_NEW_MESSAGE_ACTION,
    conversationId,
    message
  }
}

// create a new UPDATE_SUGGESTIONS action
export const updateSuggestions = (conversationId, suggestions) => {
  console.log(UPDATE_SUGGESTIONS_ACTION);
  return {
    type: UPDATE_SUGGESTIONS_ACTION,
    conversationId,
    suggestions
  }
}

// create a new SELECT_CONVERSATION action
export const selectConversation = conversationId => {
  console.log(SELECT_CONVERSATION_ACTION);
  return {
    type: SELECT_CONVERSATION_ACTION,
    conversationId
  }
}

// create a new UPDATE_AGENT_INFO action
export const updateAgentInfo = agentInfo => {
  console.log(UPDATE_AGENT_INFO_ACTION);
  return {
    type: UPDATE_AGENT_INFO_ACTION,
    agentInfo
  }
}

// create a new UPDATE_LEADERBOARD action
export const updateLeaderboard = leaderboard => {
  console.log(UPDATE_LEADERBOARD_ACTION);
  return {
    type: UPDATE_LEADERBOARD_ACTION,
    leaderboard
  }
}

// Async fetch action thunk
export const updateConversation = (selectedConversation, message) =>
  (dispatch, getState) => {
    /* ADD MESSAGE PART */

    // add the new message
    dispatch(addNewMessage(selectedConversation, message));

    /* GET SUGGESTIONS PART */

    // get the state so we can send the conversation to the api
    const state = getState();
    const conversation = state.conversations.find((conversation) =>
      conversation.sessionId === selectedConversation
    );

    // TODO: make a `loadingSuggestions` action that will result in any loading state visuals
    console.log('Fetching new suggestions...')
    // hit our proxy to the API
    return fetch('/api/chat_suggestions', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ // be sure to stringify
        conversation
      })
    }).then((response) => {
      // check the response's validity
      if(response.ok) {
        // continue promise chain with json response
        return response.json();
      }
      // throw an error to skip to the catch
      throw new Error(`Network response for chat suggestions was not ok :: ${response.status}`);
    })
    .then((response) => {
      // receive suggestions
      console.log('suggestions: ', response)
      // dispatch an updateSuggestions
      dispatch(updateSuggestions(selectedConversation, response.suggestions))
    })
    .catch((error) => {
      // TODO: failure case
      console.error(error);
    });
  }

  // create a new UPDATE_AGENT_STATUS action
  export const updateAgentStatus = agentIsOnline => {
    console.log(UPDATE_AGENT_STATUS_ACTION);
    return {
      type: UPDATE_AGENT_STATUS_ACTION,
      agentIsOnline
    }
  }
