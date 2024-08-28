import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, message:'Привет', likesCount: 12},
    {id: 2, message:'Как дела', likesCount: 1},
    {id: 3, message:'Отлично', likesCount: 121}
  ]

  let posts = postsData.map( p =>  <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

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
