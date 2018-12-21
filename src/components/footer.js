import React from 'react';
import twitter from '../images/iconmonstr-twitter-5.svg'
import facebook from '../images/iconmonstr-facebook-5.svg'
import instagram from '../images/iconmonstr-instagram-11.svg'
import linkedin from '../images/iconmonstr-linkedin-3.svg'

const Footer = () => {
  return (
    <div className="social">
      <img src={ facebook } alt=""/>
      <img src={ twitter } alt=""/>
      <img src={ instagram } alt=""/>
      <img src={ linkedin } alt=""/>
    </div>
  )
}

export default Footer
