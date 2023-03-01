import { useState } from "react";
import Draggable from "react-draggable";
import Scene from "./Scene";
import TextStackEffects from "./TextStackEffects";

export default function Draggable3DText() {
  let [is3D, setIs3D] = useState(false);
  let [isMetal, setIsMetal] = useState(false);
  let [isMoving, setIsMoving] = useState(false);
  return (
    <>
      <Draggable bounds="parent" cancel=".no-cursor">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return;
          }}
          onDrop={(e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log("ducking sick");
            if (!is3D) {
              console.log("setting 3D");
              setIs3D(true);
              return;
            }
            if (!isMetal) {
              console.log("setting metal");
              setIsMetal(true);
              return;
            }
            if (!isMoving) {
              console.log("setting movemetn");
              setIsMoving(true);
              return;
            }
          }}
          className="p-1 w-min overscroll-none border-4 cursor-grab"
          draggable={false}
        >
          <Scene>
            <TextStackEffects
              is3D={is3D}
              isMetal={isMetal}
              isMoving={isMoving}
            />
          </Scene>
        </div>
      </Draggable>
    </>
  );
}
