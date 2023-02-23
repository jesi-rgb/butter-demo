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
} from "@react-three/drei";
import { button, useControls } from "leva";
import { useEffect, useRef, useState } from "react";

export default function TextStackEffects({ effect }) {
  const mesh = useRef(null);

  const [hovered, setHover] = useState(false);

  let [motion, setMotion] = useState(false);
  let [metal, setMetal] = useState(true);
  let [mirror, setMirror] = useState(false);
  let [enableBg, setEnableBg] = useState(true);

  const draggableEffects = {
    Texture: () => {
      setTexture(true);
      setMetal(false);
      setMirror(false);
    },
    Motion: () => {
      setMotion(true);
    },
    Glass: () => {
      setMirror(true);
      setMetal(false);
    },
    Metal: () => {
      setMetal(true);
      setTexture(false);
      setMirror(false);
    },
  };

  let textOptions = {
    height: 0.3,
    bevelEnabled: true,
    bevelSize: 0.05,
    bevelThickness: Math.abs(0.05 * 1.4),
    bevelSegments: 70,
  };
  const textControls = useControls({
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

  const controls = useControls("Text", {
    Glass: button((get) => {
      setMirror((mirror) => !mirror);
      setMetal(false);
    }),
    Metal: button((get) => {
      setMetal((metal) => !metal);
      setMirror(false);
    }),

    Motion: button((get) => setMotion((motion) => !motion)),

    "Base shape": button((get) => {}, { disabled: true }),
  });

  useCursor(hovered, "pointer");

  return (
    <>
      <mesh>
        <Float speed={motion ? 3 : 0}>
          <Center>
            <Text3D
              ref={mesh}
              onPointerOut={(e) => setHover(false)}
              onPointerOver={(e) => {
                setHover(true);
              }}
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
                  samples={2}
                  thickness={5}
                  chromaticAberration={0.5}
                />
              )}
            </Text3D>
          </Center>
        </Float>
      </mesh>
    </>
  );
}
