import { useState } from "react";
import Draggable from "react-draggable";
import Scene from "./Scene";
import TextStackEffects from "./TextStackEffects";

export default function Draggable3DText() {
  return (
    <>
      <Draggable bounds="parent" cancel=".no-cursor">
        <div
          onDrag={(e) => e.stopPropagation()}
          className="w-min p-3 border-2 focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer"
        >
          <Scene>
            <TextStackEffects />
          </Scene>
        </div>
      </Draggable>
    </>
  );
}
