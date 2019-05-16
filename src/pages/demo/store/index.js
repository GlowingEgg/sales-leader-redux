//      _
//  ___| |_ ___  _ __ ___
// / __| __/ _ \| '__/ _ \
// \__ \ || (_) | | |  __/
// |___/\__\___/|_|  \___|
//
// sets up the store, combining all the relevant reducers

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import {conversations, suggestions, selectedConversation, agentInfo, leaderboard, agentIsOnline} from '../utilities/dummy_data';

const initialState = {
  conversations,
  suggestions,
  selectedConversation,
  agentInfo,
  leaderboard,
  agentIsOnline
}

const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

export default store;
