import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, Preload } from "@react-three/drei";
import { Suspense, useRef } from "react";

export default function Scene({ children }) {
  // Everything defined in here will persist between route changes, only children are swapped
  let ref = useRef();
  return (
    <>
      <div
        ref={ref}
        className="border-2 pointer-events-none cursor-move no-cursor"
      >
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

            {children}

            <Preload all />
            <OrbitControls
              enableZoom={false}
              //   enableRotate={false}
              enablePan={false}
            />
          </Suspense>
        </Canvas>
        <Loader
          initialState={(active) => active}
          dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
        />
      </div>
    </>
  );
}
