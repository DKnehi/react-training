import React from "react";
import { useState } from "react";
import { useChatRoom } from "./useChatRoom.js";
export default function WrappingEffects() {
  function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    useChatRoom({
      roomId: roomId,
      serverUrl: serverUrl,
    });

    return (
      <>
        <label>
          Server URL:{" "}
          <input
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
          />
        </label>
        <h1>Welcome to the {roomId} room!</h1>
      </>
    );
  }

  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <div>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}
