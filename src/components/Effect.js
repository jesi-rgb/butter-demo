import { Children, useMemo, useRef, useState } from "react";

export default function Effect({ children }) {
  const [cursor, setCursor] = useState("grab");

  const ref = useRef(
    [
      190 + Math.random() * 255,
      190 + Math.random() * 255,
      190 + Math.random() * 255,
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
      className="asset font-bold flex justify-center items-center relative group h-32 shrink-0 rounded-sm border-2 border-blue-700"
    >
      <span>{children}</span>
    </span>
  );
}
