import React, { Component } from 'react';

class VideoComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoIndex: 0,
      videoId: "W0LHTWG-UmQ",
      videoArray: ["W0LHTWG-UmQ","zj05Pebbkbc","dlF1KxtArCg","Nv07q-SFgNc","-Z636P1l0Hs"]
    }

    this.changeVideo = this.changeVideo.bind(this)
  }


  changeVideo(event){
    let count = this.state.videoIndex
    let index = count + 1
    this.setState({videoIndex: index})
    this.setState({videoId: this.state.videoArray[this.state.videoIndex]})
  }


  render(){

    let changeVideo = (event) => this.changeVideo(event)

    let videoId = this.state.videoId

    let url = `https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${videoId}`

    return(

      <div>
        <button onClick={changeVideo}>Push me</button>

        <div className="video-background">
          <div className="video-foreground">
            <iframe title="video" src={url} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

      </div>

    )
  }



}


export default VideoComponent;
