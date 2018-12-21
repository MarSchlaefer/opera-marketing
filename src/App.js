import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Recordings from './components/recordings'
import Video from './components/video'
import Photos from './components/photos'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      page: "home"
    }
  }

  render() {
    return (
      <div className="App">
        <Header handleClick={this.handleClick}/>
        <div className="content">
          {this.renderContent()}
        </div>
        <Footer />
      </div>
    );
  }

  renderContent = () => {
    if (this.state.page === "home") {
      return <Home />
    } else if (this.state.page === "about") {
      return <About />
    } else if (this.state.page === "recordings") {
      return <Recordings />
    } else if (this.state.page === "video") {
      return <Video />
    } else if (this.state.page === "photos") {
      return <Photos />
    } else if (this.state.page === "contact") {
      return <Contact />
    }
  }

  handleClick = (pageClick) => {
    if (pageClick === "home") {
      return this.setState({
        page: "home"
      })
    } else if (pageClick === "about") {
      return this.setState({
        page: "about"
      })
    } else if (pageClick === "recordings") {
      return this.setState({
        page: "recordings"
      })
    } else if (pageClick === "video") {
      return this.setState({
        page: "video"
      })
    } else if (pageClick === "photos") {
      return this.setState({
        page: "photos"
      })
    } else if (pageClick === "contact") {
      return this.setState({
        page: "contact"
      })
    }
  }

} //end of class

export default App;
