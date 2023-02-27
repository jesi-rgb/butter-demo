/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";

export default function ImageItem({ imgData, dropPosition }) {
  const [cursor, setCursor] = useState("grab");

  return (
    <Draggable
      bounds="parent"
      onStart={() => setCursor("grabbing")}
      onStop={() => setCursor("grab")}
      defaultPosition={dropPosition}
    >
      <ResizableBox
        className="box"
        width={200}
        height={200}
        handleSize={[8, 8]}
      >
        <div style={{ cursor: cursor }} className="border p-2">
          <div>
            <img src={imgData} alt="" draggable={false} />
          </div>
        </div>
      </ResizableBox>
    </Draggable>
  );
}
