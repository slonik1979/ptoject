import { useState } from 'react';
import Counter from './component/Counter';
import ClasCounter from './component/ClassCounter';
import './styles/App.css';
import PostItems from './component/PostItems';

function App() {
  const [value, setValue] = useState('Текст в инпуте');

  return (
    <div className="App">
      <PostItems />
    </div>
  );
}

export default App;
