import React from 'react'


export default function FirstComponent() {
    function Profile() {
        return (
          <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
          />
        );
      }
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
