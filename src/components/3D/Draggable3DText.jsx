import { useState } from "react";
import Draggable from "react-draggable";
import Scene from "./Scene";
import TextStackEffects from "./TextStackEffects";

export default function Draggable3DText({
  bounds = "parent",
  fitScreen = false,
}) {
  return (
    <>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          return;
        }}
        onDrop={(e) => {
          e.stopPropagation();
          e.preventDefault();
          // if (!is3D) {
          //   console.log("setting 3D");
          //   setIs3D(true);
          //   return;
          // }
          // if (!isMetal) {
          //   console.log("setting metal");
          //   setIsMetal(true);
          //   return;
          // }
          // if (!isMoving) {
          //   console.log("setting movemetn");
          //   setIsMoving(true);
          //   return;
          // }
        }}
        draggable={false}
      >
        <Scene fitScreen={fitScreen}>
          <TextStackEffects
          // is3D={is3D}
          // isMetal={isMetal}
          // isMoving={isMoving}
          />
        </Scene>
      </div>
    </>
  );
}
