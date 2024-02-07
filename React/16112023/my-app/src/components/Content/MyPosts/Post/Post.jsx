import React from 'react';
import classes from './Post.module.css';

const Post = ({ message, like }) => {
  return (
    <div className={classes.item}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR139kVt2OcyFG8s-xLfifERU1Uvg62i93P_A&usqp=CAU" />
        {message}
      </div>
      <div>{like}</div>
    </div>
  );
};

export default Post;
