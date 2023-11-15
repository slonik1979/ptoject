import { useState } from 'react';
import Counter from './component/Counter';
import ClasCounter from './component/ClassCounter';
import './styles/App.css';
import PostItems from './component/PostItems';
import PostList from './component/PostList';
import MyButton from './component/UI/button/MyButton';
import MyInput from './component/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'JavaScript - язык программирования',
      body: 'descr',
    },
    {
      id: '2',
      title: 'JavaScript - язык программирования2',
      body: 'descr2',
    },
  ]);

  const [title, setTitle] = useState('1111');

  const addNewPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form>
        <MyInput value={title} input type="text" placeholder="Название поста" />
        <MyInput input type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
