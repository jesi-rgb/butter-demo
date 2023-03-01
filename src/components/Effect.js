import {
  Children,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export default function Effect({ children, id, color }) {
  const [cursor, setCursor] = useState("grab");

  let ref = useRef();

  return (
    <span
      draggable
      ref={ref}
      id={id}
      //   onDrop={(e) => console.log(e.target)}
      onMouseDown={() => setCursor("grabbing")}
      onMouseUp={() => setCursor("grab")}
      onDragLeave={() => setCursor("grab")}
      style={{
        cursor: cursor,
        backgroundColor: color,
      }}
      className="asset font-bold flex justify-center items-center relative group h-32 shrink-0 rounded-sm border-2 border-blue-700"
    >
      <span>{children}</span>
    </span>
  );
}
