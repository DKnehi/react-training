import React from "react";
import { useState, useEffect } from "react";
export default function UpdatingStateBased() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1); // ✅ Pass a state updater
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // ✅ Now count is not a dependency
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
