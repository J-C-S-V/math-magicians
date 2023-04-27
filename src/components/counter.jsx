import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement(event) {
    // setCount(prevCount => prevCount + 1);
    setCount(event.target.textContent);
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button type="button" onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
