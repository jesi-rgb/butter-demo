import {
  MeshReflectorMaterial,
  Text3D,
  Center,
  Float,
  useSelect,
} from "@react-three/drei";
import { useControls } from "./MultiLeva";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";

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

  const { camera } = useThree();

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

              <meshBasicMaterial color={textControls.color} />
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
            </Text3D>
          </Center>
        </Float>
      </mesh>
    </>
  );
}
