import React from 'react'
import { useState } from 'react';
export default function State() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }
  return (
    <div>
        <button onClick={handleClick}>
        You pressed me {count} times
        </button>
    </div>
  )
}
