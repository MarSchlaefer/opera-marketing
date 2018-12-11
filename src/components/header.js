import React from 'react';

const Header = (props) => {

  return(
    <div className="header">
      <span onClick={() => props.handleClick("home")}>Home</span>
      <span onClick={() => props.handleClick("about")}>About</span>
      <span onClick={() => props.handleClick("recordings")}>Recordings</span>
      <span onClick={() => props.handleClick("video")}>Video</span>
      <span onClick={() => props.handleClick("photos")}>Photos</span>
      <span onClick={() => props.handleClick("contact")}>Contact</span>
    </div>
  )
}

export default Header
