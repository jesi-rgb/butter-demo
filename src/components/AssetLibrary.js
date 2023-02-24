import Asset from "./Asset";

export default function AssetLibrary() {
  let assets = new Array(10).fill(1);
  return (
    <div className="w-1/4 p-5 shrink-0">
      <div className="text-xl font-bold p-3">Assets</div>
      <div className="p-5 px-10 grid gap-2 grid-cols-2">
        {assets.map((e, i) => (
          <Asset key={i} />
        ))}
      </div>
    </div>
  );
}
