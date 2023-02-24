import { useState } from "react";
import Draggable from "react-draggable";

export default function Asset() {
  const [cursor, setCursor] = useState("grab");

  function dragStart(e) {
    e.preventDefault();
    console.log("a");
    console.log(e.target);
    setCursor("grabbing");
    e.target.classList.add("drag-over");
  }

  return (
    // <Draggable onStart={() => setCursor("grabbing")} onStop={onDrop}>
    <span
      draggable
      onMouseDown={() => setCursor("grabbing")}
      onMouseUp={() => setCursor("grab")}
      //   onDragStart={dragStart}
      style={{ cursor: cursor }}
      className="asset group h-32 shrink-0 rounded-sm border-2 border-blue-700 bg-gradient-to-br from-blue-500 to-blue-600"
    ></span>
    // </Draggable>
  );
}
