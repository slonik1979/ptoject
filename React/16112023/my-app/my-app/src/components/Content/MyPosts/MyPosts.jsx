import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
        <textarea></textarea>
        <button>Add post</button>
        <div>New post</div>
        <Post message='Привет' like='15'/>
        <Post message='Как дела' like='25'/>
       
      </div>
    );
};

export default MyPosts;