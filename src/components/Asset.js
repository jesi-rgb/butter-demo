import { useMemo, useRef, useState } from "react";

export default function Asset() {
  const [cursor, setCursor] = useState("grab");

  const ref = useRef(
    [
      50 + Math.random() * 250,
      50 + Math.random() * 200,
      50 + Math.random() * 250,
    ].join(",")
  );

  return (
    <span
      draggable
      onMouseDown={() => setCursor("grabbing")}
      onMouseUp={() => setCursor("grab")}
      onDragLeave={() => setCursor("grab")}
      style={{
        cursor: cursor,
        backgroundColor: "rgb(" + ref.current + ")",
      }}
      className="asset group h-32 shrink-0 rounded-sm border-2 border-blue-700"
    ></span>
  );
}
