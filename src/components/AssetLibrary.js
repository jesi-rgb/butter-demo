/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-html-link-for-pages */
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
    <div className="w-1/4 h-full bg-blue-50 p-5 shrink-0 flex flex-col justify-between">
      <div className="">
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

      <div className="w-min">
        <a href="/about">
          <button
            className="bg-blue-800 text-blue-100 px-4 py-2 rounded-full hover:-translate-y-1 hover:bg-blue-600 transform transition-all
          "
          >
            About
          </button>
        </a>
      </div>
    </div>
  );
}
