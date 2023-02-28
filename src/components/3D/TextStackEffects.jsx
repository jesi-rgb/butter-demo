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

export default function TextStackEffects({ effect }) {
  const selected = useSelect().map((sel) => sel.userData.store);
  const mesh = useRef(null);

  let [motion, setMotion] = useState(false);
  let [metal, setMetal] = useState(false);
  let [mirror, setMirror] = useState(false);
  let [is3D, setIs3D] = useState(false);

  let textOptions = {
    height: 0.0,
    bevelEnabled: true,
    bevelSize: 0.05,
    bevelThickness: 0.0,
    bevelSegments: 70,
  };

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

    // Glass: button((get) => {
    //   setMirror((mirror) => !mirror);
    //   setMetal(false);
    // }),

    // Metal: button((get) => {
    //   setMetal((metal) => !metal);
    //   setMirror(false);
    // }),

    // Motion: button((get) => setMotion((motion) => !motion)),

    // "Base shape": button((get) => {}, { disabled: true }),
  });

  const isSelected = !!selected.find((sel) => sel === store);

  return (
    <>
      <mesh
        ref={mesh}
        onClick={(e) => {
          if (e.shiftKey) {
            console.log("lookin camera");
            mesh.current.quaternion.copy(camera.quaternion);
          }
        }}
      >
        <Float speed={motion ? 3 : 0}>
          <Center>
            <Text3D
              userData={{ store }}
              curveSegments={10}
              font={"/fonts/" + textControls.font + ".json"}
              {...textOptions}
            >
              {textControls.text}

              {metal && (
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
              {mirror && (
                <MeshTransmissionMaterial
                  samples={3}
                  thickness={20}
                  chromaticAberration={3.5}
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
