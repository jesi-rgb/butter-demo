import { useState } from "react";

export default function Asset() {
  const [cursor, setCursor] = useState("grab");

  return (
    <span
      draggable
      onMouseDown={() => setCursor("grabbing")}
      onMouseUp={() => setCursor("grab")}
      onDragLeave={() => setCursor("grab")}
      style={{ cursor: cursor }}
      className="asset group h-32 shrink-0 rounded-sm border-2 border-blue-700 bg-gradient-to-br from-blue-500 to-blue-600"
    ></span>
  );
}
