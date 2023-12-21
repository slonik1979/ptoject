import React from 'react';
import classes from './Mesagge.module.css';

const Mesagge = (props) => {
  return <div className={classes.message}>{props.name}</div>;
};

export default Mesagge;
