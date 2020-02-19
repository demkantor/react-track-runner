import React, { Component } from "react";
import './App.css';
import Header from '../Header/Header';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <p>
            I've got to (dunt, dunt) run away... I've got to (dunt, dunt) get away from the react you...
          </p>
          <a
            className="App-link"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Do you need help? Click me!
          </a>
          <p className="time">in case you care this is the current time: {new Date().toLocaleTimeString()}</p>
        </header>
      </div>
    );
  }
}

export default App;
