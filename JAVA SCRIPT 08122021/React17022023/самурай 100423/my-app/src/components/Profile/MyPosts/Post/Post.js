import s from './Post.module.css';

const Post = ({message, like}) => {
    return (
                 <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSHnul1YrPl-UprCFaH1xjWZJ20ePk3MAlS2eTgLaW67DRqNFOeIYc6-MxvWm90j1Usg&usqp=CAU'/>
            {message}
            <div>Like: {like}</div>
          </div>
    )
}

export default Post;