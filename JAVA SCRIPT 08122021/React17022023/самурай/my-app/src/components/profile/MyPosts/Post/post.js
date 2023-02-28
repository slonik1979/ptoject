import s from './post.module.css';

const Post = ({message, like}) => {
    return (  
        <div>
            
            <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuA4JOqARyDKfg3-EsltTvxG8meA1ABOHx3g&usqp=CAU'/>
                {message}</div>
                <div>like - {like}</div>
                    
        </div>
        
            
          
      
    )
  };
  
  export default Post;