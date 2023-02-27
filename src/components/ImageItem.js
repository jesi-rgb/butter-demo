/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import Draggable from "react-draggable";

export default function ImageItem({ imgData, dropPosition }) {
  const [cursor, setCursor] = useState("grab");

  return (
    <Draggable
      bounds="parent"
      onStart={() => setCursor("grabbing")}
      onStop={() => setCursor("grab")}
      defaultPosition={dropPosition}
    >
      <div style={{ cursor: cursor }} className="w-fit border">
        <img width={200} height={200} src={imgData} alt="" draggable={false} />
      </div>
    </Draggable>
  );
}
