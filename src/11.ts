import { useState } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(getRandomInt(10));
  };

  return (
    <div>
      <button onClick={handleClick}>Generate random number</button>
      <p>{count}</p>
    </div>
  );
}
