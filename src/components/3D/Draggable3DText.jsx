import { useState } from "react";
import Draggable from "react-draggable";
import Scene from "./Scene";
import TextStackEffects from "./TextStackEffects";

export default function Draggable3DText({
  bounds = "parent",
  wants3D = false,
  wantsMetal = false,
  wantsMoving = false,
}) {
  let [is3D, setIs3D] = useState(wants3D);
  let [isMetal, setIsMetal] = useState(wantsMetal);
  let [isMoving, setIsMoving] = useState(wantsMoving);

  console.log(wantsMetal, isMetal);
  return (
    <>
      <Draggable bounds={bounds} cancel=".no-cursor">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return;
          }}
          onDrop={(e) => {
            e.stopPropagation();
            e.preventDefault();
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
