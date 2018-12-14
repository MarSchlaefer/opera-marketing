import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
  render () {
    return <div className="video">
      <h1>Videos</h1>
      <ReactPlayer url='https://www.youtube.com/watch?v=ropsFY0U2xQ'/>
    </div>
  }
}

export default Video
