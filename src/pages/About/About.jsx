import { Component } from 'react';

import './About.scss';

export class About extends Component {
  render() {
    return (
      <div className="about">
        <p className="title"> About Looper</p>
        <p className="container">
          Welcome to the looper. What is a looper? <br />
          An app where you can play yourself different samples with some
          different sounds. <br /> to play a sound you need to click on him and
          then click the play button and stop any sample, when ever you want .{' '}
          <br /> The first sample will play automatically, but the rest of the
          samples will start when the first sample will end. Every sample cycle
          is 8 seconds.
          <br /> Enjoy combining different samples and sound and let the music
          begin !!
        </p>
      </div>
    );
  }
}
