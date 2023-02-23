import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, Preload, Select } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { Panel } from "./MultiLeva";

export default function Scene({ children }) {
  // Everything defined in here will persist between route changes, only children are swapped
  let ref = useRef();
  const [selected, setSelected] = useState([]);
  return (
    <>
      <div ref={ref} className="border-2 cursor-move no-cursor">
        <Canvas
          orthographic
          camera={{
            position: [-3, 4.2, 10.5],
            zoom: 70,
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
              enableZoom={false}
              dampingFactor={0.3}
              //   enableRotate={false}
              enablePan={false}
            />
          </Suspense>
        </Canvas>
        <Panel selected={selected} />
        <Loader
          initialState={(active) => active}
          dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
        />
      </div>
    </>
  );
}
