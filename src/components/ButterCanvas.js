import useDnD from "@/hooks/useDnD.js";
import { useState } from "react";
import Draggable3DText from "./3D/Draggable3DText";
import ImageItem from "./ImageItem";

export default function ButterCanvas({}) {
  useDnD();
  let [itemsArray, setItemsArray] = useState([]);

  function drop(e) {
    e.preventDefault();

    e.target.style = "background-color: none";

    let file = e.dataTransfer?.files[0];
    let reader = new FileReader();

    reader.onload = function (reader) {
      const result = reader.target?.result;
      const dropPosition = {
        x: e.clientX,
        y: e.clientY,
      };
      setItemsArray([
        ...itemsArray,
        <ImageItem
          dropPosition={dropPosition}
          imgData={result}
          key={itemsArray.length}
        />,
      ]);
      console.log(itemsArray);
    };

    if (file) reader.readAsDataURL(file);

    hideWrapper();
  }

  function dragOver(e) {
    e.target.style = "background-color: #FF349033";
    showWrapper();
  }

  function dragLeave(e) {
    e.target.style = "background-color: white";
  }

  function hideWrapper() {
    let element = document.querySelector(".drop-label");
    if (element) {
      element.style.visibility = "hidden";
    }
  }

  function showWrapper() {
    let element = document.querySelector(".drop-label");
    if (element) {
      element.style.visibility = "";
    }
  }

  return (
    <>
      <section
        id="canvas"
        onDrop={drop}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        className="drop-target relative w-full border-2 border-blue-800 m-1"
      >
        <div
          style={{ fontFamily: "cursive" }}
          className="drop-label absolute left-1/2 pointer-events-none text-gray-600 text-center text-7xl my-32"
        >
          drop here
        </div>
        {itemsArray.map((i) => i)}
      </section>
    </>
  );
}
