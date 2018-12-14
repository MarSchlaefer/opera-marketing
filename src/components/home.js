import React from 'react';
import michele from '../images/Michele.jpg'
import boyd from '../images/Boyd.jpg'
import Fader from './fader'

const Home = () => {

  return(
    <div className="home">
      <Fader name="michele"/>
      <img id="michele" src= { michele } alt=""/>
      <img id="boyd" src= { boyd } alt=""/>
      <Fader name="boyd"/>
    </div>
  )
}

export default Home
