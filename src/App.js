import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';


class App extends Component {

  render() {
    const opts = {
     height: '390',
     width: '640',
     playerVars: {
       autoplay: 1
     }
   };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
        />

        
      </div>
    );
  }
}

export default App;
