/* eslint-disable react/jsx-key */
import {
  Box,
  Diamond,
  DiamondIcon,
  Gem,
  Leaf,
  LucideDiamond,
  Type,
} from "lucide-react";
import Asset from "./Asset";
import Effect from "./Effect";

export default function AssetLibrary() {
  let assets = [<Type size={50} />];

  let effects = [
    { children: <Box size={50} />, id: "3D", color: "lavender" },
    { children: <Gem size={50} />, id: "Metal", color: "aquamarine" },
    { children: <Leaf size={50} />, id: "Movement", color: "lightgreen" },
  ];

  return (
    <div className="w-1/4 p-5 shrink-0">
      <div className="text-xl font-bold p-3">Assets</div>
      <div className="p-5 px-10 grid gap-2 grid-cols-2">
        {assets.map((children, i) => (
          <Asset key={i}>{children}</Asset>
        ))}
      </div>
      <div className="text-xl font-bold p-3">Effects</div>
      <div className="p-5 px-10 grid gap-2 grid-cols-2">
        {effects.map((data, i) => (
          <Effect key={i} {...data}>
            {data.children}
          </Effect>
        ))}
      </div>
    </div>
  );
}
