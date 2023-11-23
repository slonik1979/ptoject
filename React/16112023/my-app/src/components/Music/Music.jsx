import React from 'react';
import MusicItem from './MusicItem/MusicItem';

const Music = ({misicData}) => {
    let newMisicData = misicData.map((el) => (
        <MusicItem id={el.id} name={el.name} />
      ));
    return (
        <div>
           {newMisicData} 
        </div>
    );
};

export default Music;