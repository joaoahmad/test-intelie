import React, { Component } from 'react';
import logo from './logo.svg';
import EventsEditor from '../EventsEditor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-aside">
          <EventsEditor />
        </div>
        <div className="App-content">

        </div>
      </div>
    );
  }
}

export default App;
