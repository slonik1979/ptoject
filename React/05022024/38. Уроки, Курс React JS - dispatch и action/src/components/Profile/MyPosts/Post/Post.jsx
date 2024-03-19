import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGz2DLZQTZfmNgM2UgIGOJkmvXvIZJrm7X_YKUzkQQFtVxu3PNO11aIXGufpVphRplOKI&usqp=CAU" />
      {props.message}
      <div>
        <span>{props.like}</span>
      </div>
    </div>
  );
};

export default Post;
