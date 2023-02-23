import { Select, useSelect } from "@react-three/drei";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Panel } from "./MultiLeva";
import Scene from "./Scene";
import TextStackEffects from "./TextStackEffects";

export default function Draggable3DText() {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Draggable cancel=".no-cursor">
        <div className="w-min p-3 border-2 focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer">
          <Scene>
            <TextStackEffects />
          </Scene>
        </div>
      </Draggable>
    </>
  );
}
