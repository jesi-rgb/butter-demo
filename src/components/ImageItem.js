import Image from "next/image";
import { useState } from "react";
import Draggable from "react-draggable";

export default function ImageItem({ props }) {
  const [cursor, setCursor] = useState("grab");

  return (
    <Draggable
      bounds="parent"
      grid={[gridSpacing, gridSpacing]}
      onStart={() => setCursor("grabbing")}
      onStop={() => setCursor("grab")}
      defaultPosition={props.dropPosition}
    >
      <div style={{ cursor: cursor }} className="w-fit h-fit">
        <Image
          decoding="sync"
          width={200}
          height={200}
          src={props.imgData}
          alt=""
          draggable={false}
        />
      </div>
    </Draggable>
  );
}
