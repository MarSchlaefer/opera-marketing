import React from 'react';
import michele from '../images/Michele.jpg'
import boyd from '../images/Boyd.jpg'

const Home = () => {

  return(
    <div className="home">
      <img id="michele" src= { michele } alt=""/>
      <img id="boyd" src= { boyd } alt=""/>
    </div>
  )
}

export default Home
