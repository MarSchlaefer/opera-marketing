import React from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal'

class Fader extends React.Component {
  render() {
    return (
      <div className={this.props.name === "michele" ? "fade-michele" : "fade-boyd"}>
        <Fade>
          <Reveal >
            <h1>{this.props.name === "michele" ? "Michele McBride" : "Boyd Schlaefer"}</h1>
          </Reveal>
        </Fade>
      </div>
    );
  }
}

export default Fader;
