import React from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal'

class Fader extends React.Component {
  render() {
    return (
      <div>
        <div className={this.props.name === "michele" ? "fade-michele" : "fade-boyd"}>
          <Fade>
            <Reveal >
              <h1>{this.props.name === "michele" ? "Michele McBride" : "Boyd Schlaefer"}</h1>
            </Reveal>
          </Fade>
        </div>
        <div className={this.props.voice === "soprano" ? "fade-soprano" : "fade-baritone"}>
          <Fade>
            <Reveal >
              <h1>{this.props.voice === "soprano" ? "Soprano" : "Baritone"}</h1>
            </Reveal>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Fader;
