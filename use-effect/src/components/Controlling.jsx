import React from "react";
import { useState } from "react";
import Map from "./Map.js";
export default function Controlling() {
  const [zoomLevel, setZoomLevel] = useState(0);
  return (
    <div>
      Zoom level: {zoomLevel}x
      <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
      <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
      <hr />
      <Map zoomLevel={zoomLevel} />
    </div>
  );
}
