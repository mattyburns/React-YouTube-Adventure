import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';


class App extends Component {

  render() {
   //  const opts = {
   //    height: '600',
   //    width: '640',
   //    playerVars:{
   //      modestbranding: 1,
   //      controls: 0,
   //      autoplay: 1,
   //      rel: 0,
   //      fs: 1
   //    }
   //
   // };
    return (
      <div className="App">

        <div class="video-background">
          <div class="video-foreground">
            <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>

        <div id="vidtop-content">
          <div class="vid-info">

            {/* <YouTube
              videoId="2g811Eo7K8U"
              opts={opts}
            /> */}


          </div>

        </div>
      </div>
    );
  }
}

export default App;
