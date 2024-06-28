import React from "react";
import { useRef } from "react";
export default function ManipulatingDom() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
