import React, { Component } from 'react';
import {Provider} from 'react-redux';
import SideConversationBar from './containers/SideConversationBar';
import MainContentContainer from './containers/MainContentContainer';
import store from './store';
import './index.css';

/**
* Main App component. Just loads the SideConversationBar and MainContentContainer
*/
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <SideConversationBar/>
          <MainContentContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
