import './Pads.scss';
import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { Loop } from '../Loop';
import { FaRegClock, FaGuitar, FaStop, FaPlay } from 'react-icons/fa';
import {
  GiGuitar,
  GiDrum,
  GiVortex,
  GiMusicalKeyboard,
  GiOilDrum,
  GiGasMask,
} from 'react-icons/gi';
import { SiElectron } from 'react-icons/si';
import Bass from '../../assets/audio/Bass.mp3';
import ElectricGuitar from '../../assets/audio/electricGuitar.mp3';
import FutureFunkBeats from '../../assets/audio//future_funk_beats.mp3';
import GrooveTanggu from '../../assets/audio//GrooveTanggu.mp3';
import MazePolitics from '../../assets/audio//MazePolitics.mp3';
import PasGroove from '../../assets/audio//PAS3GROOVE1.mp3';
import SilentStarOrganSynth from '../../assets/audio/SilentStarOrganSynth.mp3';
import StompySlosh from '../../assets/audio//StompySlosh.mp3';
import StutterBreakbeats from '../../assets/audio//StutterBreakbeats.mp3';

export const Pads = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundsOn, setSoundsOn] = useState([]);
  const [isLoopEnd, setIsLoopEnd] = useState(false);

  const bass = new Howl({
    src: [Bass],
  });
  const electricGuitar = new Howl({
    src: [ElectricGuitar],
  });
  const futureFunkBeats = new Howl({
    src: [FutureFunkBeats],
  });
  const grooveTanggu = new Howl({
    src: [GrooveTanggu],
  });
  const mazePolitics = new Howl({
    src: [MazePolitics],
  });
  const pasGroove = new Howl({
    src: [PasGroove],
  });
  const silentStarOrganSynth = new Howl({
    src: [SilentStarOrganSynth],
  });
  const stompySlosh = new Howl({
    src: [StompySlosh],
  });
  const stutterBreakbeats = new Howl({
    src: [StutterBreakbeats],
  });
  const [pads, setPads] = useState([
    {
      sound: bass,
      isPlay: false,
      icon: GiGuitar,
    },
    {
      sound: futureFunkBeats,
      isPlay: false,
      icon: SiElectron,
    },
    {
      sound: grooveTanggu,
      isPlay: false,
      icon: GiOilDrum,
    },
    {
      sound: mazePolitics,
      isPlay: false,
      icon: GiVortex,
    },
    {
      sound: pasGroove,
      isPlay: false,
      icon: GiMusicalKeyboard,
    },
    {
      sound: electricGuitar,
      isPlay: false,
      icon: FaGuitar,
    },
    {
      sound: silentStarOrganSynth,
      isPlay: false,
      icon: GiGasMask,
    },
    {
      sound: stutterBreakbeats,
      isPlay: false,
      icon: FaRegClock,
    },
    {
      sound: stompySlosh,
      isPlay: false,
      icon: GiDrum,
    },
  ]);

  useEffect(() => {
    if (isPlaying) {
      pressPlay();
    }
  }, [isLoopEnd]);

  // create array of the upcoming loop on next loop cycle
  const nextLoop = pads
    .filter((pad) => {
      return pad.isPlay;
    })
    .map((playing) => playing.sound);

  // stop current loop and starts a new loop
  const pressPlay = () => {
    if (!soundsOn && !nextLoop) {
      return;
    }
    soundsOn?.forEach((howl) => {
      howl.stop();
    });
    nextLoop[0].once('end', () => {
      setIsLoopEnd(!isLoopEnd);
    });
    nextLoop.forEach((howl) => {
      howl.play();
    });
    setSoundsOn(nextLoop);
    setIsPlaying(true);
  };

  // stop loop
  const pressStop = () => {
    setIsPlaying(false);
    soundsOn.forEach((howl) => {
      howl.stop();
    });
  };

  return (
    <div className="pads">
      <div className="container">
        {pads.map((pad, index) => (
          <Loop
            key={`pad${index}`}
            padsData={pad}
            padsArr={pads}
            setPadsArr={setPads}
          />
        ))}
      </div>
      <div className="control-panel">
        <FaPlay
          onClick={pressPlay}
          className={isPlaying ? 'on play' : 'off play'}
        />
        <FaStop
          onClick={pressStop}
          className={isPlaying ? 'on play' : 'off play'}
        />
      </div>
    </div>
  );
};
