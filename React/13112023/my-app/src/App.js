import { useState } from 'react';
import Counter from './component/Counter';
import ClasCounter from './component/ClassCounter';
import './styles/App.css';
import PostItems from './component/PostItems';

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

  return (
    <div className="App">
      {posts.map((post) => (
        <PostItems post={post} />
      ))}
    </div>
  );
}

export default App;
