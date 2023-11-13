import { useState } from 'react';

function App() {
  const [likes, doLikes] = useState(5);

  const inc = () => {
    if (likes < 10) {
      doLikes(likes + 1);
    }
  };

  const dec = () => {
    if (likes > 0) {
      doLikes(likes - 1);
    }
  };

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
    </div>
  );
}

export default App;
