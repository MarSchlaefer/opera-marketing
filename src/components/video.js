import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
  render () {
    return <div className="video">
      <h1>Videos</h1>
      <ReactPlayer url='https://www.youtube.com/watch?v=ropsFY0U2xQ'/>
      <br />
      <ReactPlayer url='https://www.youtube.com/watch?v=5taghtpjoBg'/>
      <br />
      <ReactPlayer url='https://www.youtube.com/watch?v=aM-4FfuyPx0'/>
    </div>
  }
}

export default Video
