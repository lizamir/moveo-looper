import './Loop.scss';
import React from 'react';

export const Loop = ({ padsData, padsArr, setPadsArr }) => {
  const handleClick = () => {
    let newArr = padsArr.map((data) => {
      data.sound === padsData.sound && (data.isPlay = !data.isPlay);
      return data;
    });
    setPadsArr(newArr);
  };

  return (
    <div
      id="pad"
      className={padsData.isPlay ? 'play-on sample' : 'play-off sample'}
      onClick={(e) => {
        handleClick(e.target);
      }}
    >
      <padsData.icon id="icon" className="icon-music" />
    </div>
  );
};
