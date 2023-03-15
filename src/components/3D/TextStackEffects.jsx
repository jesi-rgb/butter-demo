import {
  MeshReflectorMaterial,
  Text3D,
  Center,
  Float,
  useSelect,
  MeshTransmissionMaterial,
  Environment,
} from "@react-three/drei";
import { useControls } from "./MultiLeva";
import { useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { button } from "leva";

export default function TextStackEffects() {
  const selected = useSelect().map((sel) => sel.userData.store);
  const mesh = useRef(null);

  let [threeD, setThreeD] = useState(false);
  let [metal, setMetal] = useState(true);
  let [mirror, setMirror] = useState(false);
  let [motion, setMotion] = useState(false);
  let [enableBg, setEnableBg] = useState(false);

  const backgrounds = {
    "Photo Studio":
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/christmas_photo_studio_07_2k.hdr",
    "Lake Pier":
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/lake_pier_1k.hdr",
    "Neon Studio":
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/neon_photostudio_2k.hdr",
    "Solitude Night":
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/solitude_night_2k.hdr",
  };
  let [background, setBackground] = useState(backgrounds["Photo Studio"]);

  let textOptions = {
    height: 0.0,
    bevelEnabled: true,
    bevelSize: 0.05,
    bevelThickness: 0.0,
    bevelSegments: 70,
  };

  if (threeD) {
    textOptions.height = 0.3;
    textOptions.bevelThickness = 0.1;
  } else {
    textOptions.height = 0.0;
    textOptions.bevelThickness = 0.0;
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
        Cheee: "cheee",
      },
      value: "cheee",
    },
    color: { value: "#239dd1" },
    "3D": button(() => {
      setThreeD(!threeD);
    }),
    Glass: button(() => {
      setMirror((mirror) => !mirror);
      setMetal(false);
    }),
    Metal: button(() => {
      setMetal((metal) => !metal);
      setMirror(false);
    }),
    Motion: button(() => setMotion((motion) => !motion)),

    "Base shape": button(() => {}, { disabled: true }),
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
        <Float speed={motion ? 3 : 0}>
          <Center>
            <Text3D
              userData={{ store }}
              curveSegments={10}
              font={"/fonts/" + textControls.font + ".json"}
              {...textOptions}
            >
              {textControls.text}

              <meshBasicMaterial color={textControls.color} />
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
                  color={textControls.color}
                  thickness={1}
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
