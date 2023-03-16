import { useState } from "react";
import Draggable from "react-draggable";
import Scene from "./Scene";
import TextStackEffects from "./TextStackEffects";

export default function Draggable3DText({ fitScreen = false }) {
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
        }}
        draggable={false}
      >
        <Scene fitScreen={fitScreen}>
          <TextStackEffects />
        </Scene>
      </div>
    </>
  );
}
