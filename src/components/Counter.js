import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    count !== 0 ? setCount(count - 1) : setCount(0);
  }
  const handleOnChange = (event) => {
    setCount(parseInt(event.target.value));
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <input type="number" value={count} onChange={handleOnChange} />
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
