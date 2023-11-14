import React, {useState} from 'react';

const Counter = function () {
    const [count, setCount] = useState(5);

   

    const inc = () => {
        if (count < 10) {
            setCount(count + 1);
        }
      };
    
      const dec = () => {
        if (count > 0) {
            setCount(count - 1);
        }
      };
    return (
        <div>
            
            <h1>{count}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    )
}

export default Counter;