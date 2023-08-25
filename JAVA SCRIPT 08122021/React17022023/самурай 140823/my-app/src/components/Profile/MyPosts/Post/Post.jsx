import React from 'react';
import s from './Post.module.css';


const Post = ({ message, like }) => {

  return (
    <div>
      <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8yayEWOmhbnKeSVvn-0Utem8t6aw8w-TM04gyt1hElUahY5paxX4XftE2Dnqz8Nq-R8&usqp=CAU" />
        {message}
        <div>like={like}</div>
      </div>
    </div>
  );
};

export default Post;
