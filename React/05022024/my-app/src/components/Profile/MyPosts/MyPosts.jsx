import classes from './MyPosts.module.css';

const MyPosts = () => {
    return <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div>
          <div className={classes.item}>
            
            <img src='https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg'/>
                      
            post 1</div>
          <div className={classes.item}>post 2</div>
        </div>
      </div>
}

export default MyPosts;