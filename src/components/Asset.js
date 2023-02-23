import { useState } from "react";
import Draggable from "react-draggable";

export default function Asset() {
  const [cursor, setCursor] = useState("grab");
  const onDrop = (e) => {
    console.log(e);
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
    setCursor("grab");
  };
  return (
    <Draggable onStart={() => setCursor("grabbing")} onStop={onDrop}>
      <span
        style={{ cursor: cursor }}
        className="group h-32 shrink-0 rounded-sm border-2 border-blue-700 bg-gradient-to-br from-blue-500 to-blue-600"
      ></span>
    </Draggable>
  );
}
