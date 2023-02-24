import { useContext } from "react";
import { ShortType } from "three";
import { ItemsContext } from "./ItemsContext.js";

export default function Canvas({ children }) {
  const items = useContext(ItemsContext);
  console.log(items);

  function drop(e) {
    e.preventDefault();
    console.log(e.target);

    e.target.style = "background-color: none";

    let file = e.dataTransfer?.files[0];
    let reader = new FileReader();
    let dropData;

    reader.onload = function (reader) {
      const result = reader.target?.result;
      const dropPosition = {
        x: e.clientX,
        y: e.clientY,
      };
      dropData = { imgData: result, dropPosition: dropPosition };
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
        onDrop={drop}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        className="drop-target w-full border-2 border-blue-800 m-1"
      >
        <div className="drop-label hidden pointer-events-none text-black text-center text-7xl my-32">
          drop here
        </div>
        {children}
      </section>
    </>
  );
}
