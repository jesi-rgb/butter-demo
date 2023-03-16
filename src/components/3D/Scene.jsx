import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Select,
} from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { Panel } from "./MultiLeva";

export default function Scene({ children, fitScreen = false }) {
  // Everything defined in here will persist between route changes, only children are swapped
  let ref = useRef();
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div
        ref={ref}
        onKeyDown={(e) => {
          if (e.key === "Escape") setSelected([]);
        }}
        className="no-cursor"
        style={fitScreen ? { width: "100vw", height: "100vh" } : {}}
      >
        <Canvas
          orthographic
          camera={{
            position: [-3, 4.2, 10.5],
            zoom: 180,
          }}
        >
          <Suspense fallback={null}>
            <directionalLight
              position={[100.9, 10.1, 100.1]}
              intensity={10200}
            />
            <ambientLight intensity={20000.75} />

            <Select onChange={setSelected}>{children}</Select>

            <Preload all />
            <OrbitControls
              enableZoom={true}
              dampingFactor={0.3}
              enableRotate={true}
              enablePan={true}
              makeDefault
            />
          </Suspense>
        </Canvas>
        <Panel selected={selected} />
      </div>
    </>
  );
}
