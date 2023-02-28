import {
  Environment,
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  useTexture,
  Text3D,
  Center,
  Float,
  useVideoTexture,
  useCursor,
  useSelect,
  Edges,
  Text,
  useCamera,
} from "@react-three/drei";
import { button } from "leva";
import { useControls } from "./MultiLeva";
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function TextStackEffects({ is3D, isMetal, isMoving }) {
  const selected = useSelect().map((sel) => sel.userData.store);
  const mesh = useRef(null);

  let textOptions = {
    height: 0.0,
    bevelEnabled: true,
    bevelSize: 0.05,
    bevelThickness: 0.0,
    bevelSegments: 70,
  };

  if (is3D) {
    textOptions.height = 0.3;
    textOptions.bevelThickness = 0.1;
  }

  const { camera, size } = useThree();

  let [store, textControls] = useControls(selected, {
    text: { value: "butter" },
    font: {
      options: {
        "Kyiv Serif": "kyiv-serif",
        "Space Grotesk": "space-grotesk",
        "Lora Italic": "lora",
        Oswald: "oswald",
        "Abril Fatface": "abril-fatface",
        Lobster: "lobster",
      },
      value: "abril-fatface",
    },

    color: { value: "#837600" },
  });

  return (
    <>
      <mesh
        ref={mesh}
        onClick={(e) => {
          if (e.shiftKey) {
            console.log("lookin camera");
            mesh.current.quaternion.copy(camera.quaternion);
            e.stopPropagation();
          }
        }}
      >
        <Float speed={isMoving ? 3 : 0}>
          <Center>
            <Text3D
              userData={{ store }}
              curveSegments={10}
              font={"/fonts/" + textControls.font + ".json"}
              {...textOptions}
            >
              {textControls.text}

              {isMetal && (
                <MeshReflectorMaterial
                  resolution={8}
                  roughness={0.01}
                  blur={[30, 30]}
                  mixBlur={0.3}
                  color={textControls.color}
                  metalness={1}
                  distortion={1}
                />
              )}
              <meshBasicMaterial color={textControls.color} />
            </Text3D>
          </Center>
        </Float>
      </mesh>
    </>
  );
}
