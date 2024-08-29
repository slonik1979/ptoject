import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {



  let posts = props.postsData.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.desc}>
      <h3>My posts</h3>
      
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
        
        
      </div>
      <div className={s.newPosts}>New posts</div>
      <div className={s.posts}>
        {posts}
       
      </div>
    </div>
  );
};

export default MyPosts;
