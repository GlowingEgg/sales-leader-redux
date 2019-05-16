import React, {Component} from 'react';
import Header from './Header';
import ChatClient from './ChatClient';
import './MainContentContainer.css';

/**
* Container component for the main content.
* includes the Header toolbar and all things below it.
*/
class MainContentContainer extends Component {
  render() {
    return (
      <div className="MainContent">
        <Header/>
        <ChatClient/>
      </div>
    );
  }
}

export default MainContentContainer;
