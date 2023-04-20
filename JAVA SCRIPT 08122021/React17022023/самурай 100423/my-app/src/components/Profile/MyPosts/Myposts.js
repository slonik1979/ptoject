import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {
    return (
      <div>
        My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className='posts'>
         <Post message='Привет' like='10'/>
         <Post message='Как дела?' like='15'/>
        </div>
      </div>
    )
}

export default Myposts;