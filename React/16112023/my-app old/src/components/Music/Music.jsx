import React from 'react';
import MusicItem from './MusicItem/MusicItem';

const Music = ({ state }) => {
  let newMisicData = state.misicData.map((el) => (
    <MusicItem id={el.id} name={el.name} />
  ));
  return <div>{newMisicData}</div>;
};

export default Music;
