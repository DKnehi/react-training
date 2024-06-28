import React from "react";
import { useRef } from "react";
export default function UseRef() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
