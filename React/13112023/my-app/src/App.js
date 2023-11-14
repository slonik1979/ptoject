import { useState } from 'react';
import Counter from './component/Counter';

function App() {
 
  const [value, setValue] = useState("Текст в инпуте");



  return (
    <div className="App">
     <Counter/>
    </div>
  );
}

export default App;
