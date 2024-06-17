import React from 'react'

export default function EventClick() {
    function handleClick() {
        alert('You clicked me!');
    }
  return (
    <div>
        <button onClick={handleClick}>
            Click Me
        </button>
    </div>
  )
}
