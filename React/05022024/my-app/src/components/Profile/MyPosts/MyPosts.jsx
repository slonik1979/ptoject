import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  
  let posts = [
    {message: "Привет", id: 1, like: 10},
    {message: "Пока", id: 2, like: 25},
  ]

  const postsElements = posts.map( (post) => {
    return ( <Post message={post.message} like={post.like} id={post.id}/>
    )
  }

  )

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
