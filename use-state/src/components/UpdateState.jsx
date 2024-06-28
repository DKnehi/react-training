import React from "react";
import { useState } from "react";
export default function UpdateState() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge((a) => a + 1);
  }
  return (
    <div>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </div>
  );
}
