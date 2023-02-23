import { useEffect, useState } from "react";

function hideWrapper() {
  let element = document.querySelector("#wrapper");
  if (element) {
    element.style.visibility = "hidden";
    element.style.opacity = "0";
  }
}

function showWrapper() {
  let element = document.querySelector("#wrapper");
  if (element) {
    element.style.visibility = "";
    element.style.opacity = "0.2";
  }
}

export default function useDnD() {
  const [lastTarget, setLastTarget] = useState(null);
  let [items, setItems] = useState();

  useEffect(() => {
    window.addEventListener("dragenter", function (e) {
      // drag start
      // unhide our red overlay
      showWrapper();
      setLastTarget(e.target);
    });

    window.addEventListener("dragleave", function (e) {
      // user canceled

      if (e.target === lastTarget || e.target === document) {
        hideWrapper();
      }
    });

    window.addEventListener("dragover", function (e) {
      //to stop default browser act
      e.preventDefault();
      e.stopImmediatePropagation();
    });

    window.addEventListener("drop", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      hideWrapper();

      let file = e.dataTransfer?.files[0];
      let reader = new FileReader();

      reader.onload = function (reader) {
        const result = reader.target?.result;
        const dropPosition = {
          x: e.clientX,
          y: e.clientY,
        };
        setItems({ imgData: result, dropPosition: dropPosition });
      };

      if (file) reader.readAsDataURL(file);
    });
  });

  return items;
}
