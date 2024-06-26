import React from 'react'

export default function ReadingProps() {
    function AlertButton({ message, children }) {
        return (
          <button onClick={() => alert(message)}>
            {children}
          </button>
        );
      }
  return (
    <div>
        <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  )
}
