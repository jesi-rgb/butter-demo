import useDnD from "@/hooks/useDnD.js";
import { useEffect, useState } from "react";
import Draggable3DText from "./3D/Draggable3DText";
import EffectList from "./EffectList";
import ImageItem from "./ImageItem";

export default function ButterCanvas() {
  useDnD();

  let [itemsArray, setItemsArray] = useState([]);

  function drop(e) {
    e.preventDefault();

    e.target.style = "background-color: none";
    console.log(e);

    // means we are importing an image
    if (e.dataTransfer && e.dataTransfer.files.length > 0) {
      let file = e.dataTransfer?.files[0];
      let reader = new FileReader();

      reader.onload = function (reader) {
        const result = reader.target?.result;
        const dropPosition = {
          x: e.screenX,
          y: e.screenY,
        };
        setItemsArray([
          ...itemsArray,
          <ImageItem
            dropPosition={dropPosition}
            imgData={result}
            key={itemsArray.length}
          />,
        ]);
      };

      if (file) reader.readAsDataURL(file);
    } else {
      setItemsArray([
        ...itemsArray,
        <Draggable3DText key={itemsArray.length} />,
      ]);
    }
    hideWrapper();
  }

  function hideWrapper() {
    let element = document.querySelector(".drop-label");
    if (element) {
      element.style.visibility = "hidden";
    }
  }

  function dragOver(e) {
    e.target.style = "background-color: #FF349033";
  }

  function dragLeave(e) {
    e.target.style = "background-color: white";
    console.log(e, "aa");
    e.stopPropagation();
    e.preventDefault();

    if (!dropped3D) {
      setDropped3D(true);
      return;
    }
    if (!droppedMetal) {
      setDroppedMetal(true);
      return;
    }
    if (!droppedMotion) {
      setDroppedMotion(true);
      return;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" || e.key === "Delete") {
        console.log("deleting last element");

        setItemsArray(itemsArray.slice(0, -1));
        setDropped3D(false);
        setDroppedMotion(false);
        setDroppedMetal(false);
      }
      e.stopPropagation();
    });
  });

  let [dropped3D, setDropped3D] = useState(false),
    [droppedMetal, setDroppedMetal] = useState(false),
    [droppedMotion, setDroppedMotion] = useState(false);

  return (
    <>
      <div
        id="canvas"
        onDrop={drop}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        className="drop-target relative w-full border-2 border-blue-700 p-1"
      >
        <div
          style={{ fontFamily: "cursive" }}
          className="drop-label absolute left-0 right-0 text-center pointer-events-none text-gray-600 text-7xl my-32"
        >
          drop here~
        </div>
        {itemsArray.map((i) => i)}
      </div>

      <EffectList
        is3D={dropped3D}
        isMetal={droppedMetal}
        isMoving={droppedMotion}
      />
    </>
  );
}
