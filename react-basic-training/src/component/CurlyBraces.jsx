import React from "react";

export default function CurlyBraces() {
  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };
  return (
    <div>
      <h1>To Do List for {formatDate(today)}</h1>
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </div>
  );
}
