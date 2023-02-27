import { Box, Diamond, DiamondIcon, Gem, LucideDiamond } from "lucide-react";
import Asset from "./Asset";
import Effect from "./Effect";

export default function AssetLibrary() {
  let assets = ["Text", "Shape"];
  // eslint-disable-next-line react/jsx-key
  let effects = [<Box size={50} />, <Gem size={50} />];
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
        {effects.map((children, i) => (
          <Effect key={i}>{children}</Effect>
        ))}
      </div>
    </div>
  );
}
